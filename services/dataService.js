import axios from "axios";
import API_CONFIG from "@/constants/ApiConfig";

/**
 * Fetches data from the data API
 * @returns {Promise<any>} The data from the API
 * @throws {Error} When the request fails
 */
export const getData = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.DATA_API_URL}${API_CONFIG.ENDPOINTS.DATA}`,
      {
        timeout: API_CONFIG.TIMEOUT.DEFAULT,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    
    // Provide more context about the error
    if (error.response) {
      // Server responded with error status
      throw new Error(
        `Server error: ${error.response.status} - ${error.response.data?.message || error.message}`
      );
    } else if (error.request) {
      // Request made but no response received
      throw new Error(
        "Network error: Unable to reach the server. Please check your connection."
      );
    } else {
      // Error in request setup
      throw new Error(`Request error: ${error.message}`);
    }
  }
};


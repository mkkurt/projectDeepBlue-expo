import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/data");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

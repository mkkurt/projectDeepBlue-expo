import axios from "axios";
import API_CONFIG from "@/constants/ApiConfig";

const initialSystemMessage =
  "You can only answer questions about the provided context. If you know the answer but it is not based in the provided context, don't provide the answer, just state the answer is not in the context provided.";

/**
 * Fetches chat completion from the API
 * @param {Array} messages - Array of message objects with role and content
 * @returns {Promise<Object>} The chat completion response
 * @throws {Error} When the request fails
 */
const fetchChatCompletion = async (messages) => {
  console.warn("fetchChatCompletion called with messages: ", messages);
  
  try {
    // Validate input
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages must be a non-empty array");
    }

    // Only take the content and role of each message
    const sanitizedMessages = messages.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    // Add the initial system message to the beginning of the messages array
    const messagesWithSystem = [
      {
        role: "system",
        content: initialSystemMessage,
      },
      ...sanitizedMessages,
    ];

    console.warn("sending messages", messagesWithSystem);

    const requestBody = {
      messages: messagesWithSystem,
      stream: false,
      use_context: true,
    };

    const response = await axios.post(
      `${API_CONFIG.CHAT_API_URL}${API_CONFIG.ENDPOINTS.CHAT_COMPLETIONS}`,
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: API_CONFIG.TIMEOUT.CHAT,
      }
    );

    console.warn(
      "fetchChatCompletion response",
      response.data.choices[0].message
    );

    return response.data;
  } catch (error) {
    console.error("fetchChatCompletion error", error.message);
    
    // Provide more context about the error
    if (error.response) {
      throw new Error(
        `Chat API error: ${error.response.status} - ${error.response.data?.message || error.message}`
      );
    } else if (error.request) {
      throw new Error(
        "Network error: Unable to reach the chat server. Please check your connection."
      );
    } else {
      throw new Error(`Chat request error: ${error.message}`);
    }
  }
};

export default fetchChatCompletion;


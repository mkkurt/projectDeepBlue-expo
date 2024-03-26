import axios from "axios";

const initialSystemMessage =
  "You can only answer questions about the provided context. If you know the answer but it is not based in the provided context, don't provide the answer, just state the answer is not in the context provided. ";

const fetchChatCompletion = async (messages) => {
  console.log("fetchChatCompletion called with messages: ", messages);
  try {
    //only take the content and role of each message
    messages = messages.map((message) => {
      return {
        role: message.role,
        content: message.content,
      };
    });
    //add the initial system message to the beginning of the messages array
    messages = [
      {
        role: "system",
        content: initialSystemMessage,
      },
      ...messages,
    ];
    console.log("sending messages", messages);
    const requestBody = {
      messages,
      stream: false,
      use_context: true,
      // context_filter: {
      //   document_ids: ["doc_id_1", "doc_id_2"],
      // },
    };

    const response = await axios.post(
      "http://localhost:8001/v1/chat/completions",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(
      "fetchChatCompletion response",
      response.data.choices[0].message
    );

    return response.data;
  } catch (error) {
    console.log("fetchChatCompletion error", error.message);
  }
};

export default fetchChatCompletion;

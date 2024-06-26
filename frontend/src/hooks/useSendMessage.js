import React, { useState } from "react";
import toast from "react-hot-toast";
import useConversationStore from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  //use zustand
  const { messages, setMessages, selectedConversation } =
    useConversationStore();

  const sendmessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //set message into global state
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendmessage };
};

export default useSendMessage;

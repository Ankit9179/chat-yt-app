import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversationStore from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } =
    useConversationStore();

  useEffect(() => {
    const getmessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    //call function
    if (selectedConversation?._id) getmessages();
  }, [selectedConversation, setMessages]);
  return { loading, messages };
};

export default useGetMessages;

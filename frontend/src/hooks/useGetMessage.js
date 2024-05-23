import React, { useEffect } from "react";
import useConversationStore from "../zustand/useConversation";
import { useSocketContext } from "../context/socketContext";
import notification from "../assets/notification.mp3";

const useGetMessage = () => {
  const { socket } = useSocketContext(); //socket connection
  const { messages, setMessages } = useConversationStore(); //global states

  useEffect(() => {
    //if socket
    socket?.on("newMessage", (newMessage) => {
      // notification sound
      const sound = new Audio(notification);
      sound.play();

      setMessages([...messages, newMessage]);
    });

    //for off cleanup function
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useGetMessage;

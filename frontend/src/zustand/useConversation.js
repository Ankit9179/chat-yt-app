import { create } from "zustand";

const useConversationStore = create((set) => ({
  selectedConversation: null, // global state
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }), //setter function
  //
  messages: [], // global state
  setMessages: (messages) => set({ messages }), // setter function
}));

//when you use default then ,can import with any name without {}curly braces
export default useConversationStore;

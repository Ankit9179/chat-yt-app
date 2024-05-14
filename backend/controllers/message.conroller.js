import Conversation from "../models/conversations.model.js";
import Message from "../models/message.model.js";

//send message
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // it will containe id of that person whoses sending message ny middleware

    //
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // create message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // I Will be add socket io functionality here

    // //save
    // await conversation.save();
    // await newMessage.save();

    //this will run parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error while sending message", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//get message
export const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages"); //net refrence but actually message

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error while gettding message", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

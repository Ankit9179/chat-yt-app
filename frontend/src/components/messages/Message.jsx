import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversationStore from '../../zustand/useConversation';
import { extractTime } from '../../util/extractTime';

const Message = ({ mess }) => {
    const { authUser } = useAuthContext(); //logged in user from context api . loaclstorage
    const { selectedConversation } = useConversationStore();// that user withoom your are talking 
    const formatedTime = extractTime(mess.createdAt)
    const fromMe = mess.senderId === authUser._id; // mess is a single message has both ids sender and reciever , authUser logged in user
    const chatClassName = fromMe ? "chat-end" : "chat-start"; //for sms left,right
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const backgroundColor = fromMe ? "bg-blue-500" : "bg-gray-500"
    return (
        <div className={`chat ${chatClassName} `}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble ${backgroundColor}`}>{mess.message}</div>
            <div className="chat-footer opacity-50">
                {formatedTime}
            </div>
        </div>
    )
}

export default Message
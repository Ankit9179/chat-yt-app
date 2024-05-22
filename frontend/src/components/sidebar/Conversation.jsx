import React from 'react'
import useConversationStore from '../../zustand/useConversation'
import { useSocketContext } from '../../context/socketContext';

const Conversation = ({ conver }) => {
    //get zustand state and setter functions
    const { selectedConversation, setSelectedConversation } = useConversationStore();
    //flag 
    const isSelected = selectedConversation?._id === conver._id

    const { onLineUsers } = useSocketContext();
    const isOnline = onLineUsers.includes(conver._id)

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
                onClick={() => setSelectedConversation(conver)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conver.profilePic}
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200 ml-4'>{conver.fullName}</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1' />
        </>
    )
}

export default Conversation
import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {
    const { loading, conversations } = useGetConversation();
    console.log("conversations", conversations)
    return (
        <div className=' py-2 flex flex-col h-full sm:overflow-auto'>
            {
                conversations.map((conver) => (
                    <Conversation
                        key={conver._id}
                        conver={conver}
                    />
                ))
            }
        </div>
    )
}

export default Conversations
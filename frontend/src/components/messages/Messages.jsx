import React from 'react'
import Message from '../messages/Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js';

const Messages = () => {
    const { loading, messages } = useGetMessages();
    console.log(messages)
    return (
        <div className='px-4 flex-1 overflow-auto'>
            <Message />

            <Message />
        </div>
    );
}

export default Messages
import React, { useEffect, useRef } from 'react'
import Message from '../messages/Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js';
import MessagesSkeleton from '../skeleton/MessagesSkeleton.jsx';

const Messages = () => {
    const { loading, messages } = useGetMessages();

    const lastMessage = useRef() //it could be null

    useEffect(() => {
        setTimeout(() => {
            lastMessage.current?.scrollIntoView({ vehavior: "smooth" })
        }, 100);
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-y-auto'>
            {!loading && messages.length > 0 && messages.map((mess) => (
                <div key={mess.id}
                    ref={lastMessage}
                >
                    <Message mess={mess} />
                </div>
            ))}
            {/** //for skeleton */}
            {loading && [...Array(3)].map((_, indx) => <MessagesSkeleton key={indx} />)}
            {/** //for showing paragraph */}
            {!loading && messages.length === 0 && (<p className='text-white text-center font-semibold'>Send the message to start to conversation</p>)}
        </div>
    );
}

export default Messages
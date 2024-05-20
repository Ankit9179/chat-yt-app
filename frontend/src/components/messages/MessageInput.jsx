import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
    const [message, setMessage] = useState("");
    //use imported hook 
    const { loading, sendmessage } = useSendMessage();

    //send message function
    const handleSendMessage = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendmessage(message);
        setMessage("")

        // console.log("here your message", message)
    }
    return (
        <form className='px-4 my-3' onSubmit={handleSendMessage}>
            <div className='w-full relative'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'>
                    {!loading ? (<BsSend />) : (<span className="loading loading-dots loading-lg"></span>
                    )}
                </button>
            </div>
        </form>
    );
}

export default MessageInput
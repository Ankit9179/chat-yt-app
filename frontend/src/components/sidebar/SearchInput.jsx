import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useGetConversation from '../../hooks/useGetConversation';
import useConversationStore from '../../zustand/useConversation';
import toast from 'react-hot-toast';


const SearchInput = () => {
    const [search, setSearch] = useState("");
    //all users 
    const { conversations } = useGetConversation(); //all users 
    const { setSelectedConversation } = useConversationStore(); //

    //handle function 
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error('length should be greater then 3 characters')
        }
        const searchedName = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (searchedName) {
            setSelectedConversation(searchedName)
            setSearch("")
        } else {
            toast.error("user not found")
        }
    }
    return (
        <form onSubmit={handlesubmit} className='flex items-center gap-2'>
            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className="btn btn-neutral"><FaSearch /></button>
        </form>
    )
}

export default SearchInput
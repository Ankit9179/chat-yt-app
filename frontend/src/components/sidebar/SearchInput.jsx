import React from 'react'
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
            <button className="btn btn-neutral"><FaSearch /></button>
        </form>
    )
}

export default SearchInput
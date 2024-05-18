import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const Logout = () => {
    const { loading, logout } = useLogout()
    return (
        <div className='mt-auto text-center'>
            {
                !loading ? (
                    <BiLogOut className=' text-white cursor-pointer h-6 w-6'
                        onClick={logout}
                    />
                ) : (
                    <span className="loading loading-dots loading-lg"></span>
                )
            }
        </div>
    )
}

export default Logout
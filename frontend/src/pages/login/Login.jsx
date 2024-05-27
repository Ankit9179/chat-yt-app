import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { login, loading } = useLogin()

    //handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(userName, password)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>Login
                    <span className='text-blue-500'> A Chat</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className='my-2'>
                        <label className='lable p-2'>
                            <span className='text-base lable-text text-1xl font-semibold'>User Name</span>
                        </label>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='w-full h-10 px-2 bg-gray-400 text-white rounded-xl' />
                    </div>
                    <div className='my-2'>
                        <label className='lable p-2'>
                            <span className='text-base lable-text text-1xl font-semibold'>Password</span>
                        </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='w-full h-10 px-2 bg-gray-400 text-white rounded-xl' />
                    </div>
                    <div className='button my-2 text-center'>
                        {!loading ? (
                            <button type="submit" className='w-full h-10 px-2 bg-gray-950 text-white rounded-xl hover:bg-white hover:text-black'>login</button>
                        ) : (
                            <span className="loading loading-dots loading-lg"></span>
                        )}
                    </div>
                    <Link to={'/signup'} className='hover:text-blue-400 pt-3 text-1xl'>Don't have any account ?</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
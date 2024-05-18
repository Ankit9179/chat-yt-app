import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    //inputs state
    const [inputs, setInputes] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmpassword: "",
        gender: ""
    })

    //getting from hook signup is a function, loading is a state
    const { signup, loading } = useSignup()

    //gender change fun , it will be called from gendercheckbox.jsx component
    const changeGenderFunction = (gender) => {
        setInputes({ ...inputs, gender });
    }

    //handel inputs functions
    const handelInputs = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>SignUp
                    <span className='text-blue-500'> ChatMet</span>
                </h1>
                <form onSubmit={handelInputs}>
                    <div className='my-2'>
                        <label className='lable p-2'>
                            <span className='text-base lable-text text-1xl font-semibold'>Full Name</span>
                        </label>
                        <input type="text" value={inputs.fullName} onChange={(e) => setInputes({ ...inputs, fullName: e.target.value })} className='w-full h-10 px-2 bg-gray-400 text-white rounded-xl' />
                    </div>
                    <div className='my-2'>
                        <label className='lable p-2'>
                            <span className='text-base lable-text text-1xl font-semibold'>User Name</span>
                        </label>
                        <input type="text" value={inputs.userName} onChange={(e) => setInputes({ ...inputs, userName: e.target.value })} className='w-full h-10 px-2 bg-gray-400 text-white rounded-xl' />
                    </div>
                    <div className='my-2'>
                        <label className='lable p-2'>
                            <span className='text-base lable-text text-1xl font-semibold'>Password</span>
                        </label>
                        <input type="password" value={inputs.password} onChange={(e) => setInputes({ ...inputs, password: e.target.value })} className='w-full h-10 px-2 bg-gray-400 text-white rounded-xl' />
                    </div>
                    <div className='my-2'>
                        <label className='lable p-2'>
                            <span className='text-base lable-text text-1xl font-semibold'>Confirm Password</span>
                        </label>
                        <input type="password" value={inputs.confirmpassword} onChange={(e) => setInputes({ ...inputs, confirmpassword: e.target.value })} className='w-full h-10 px-2 bg-gray-400 text-white rounded-xl' />
                    </div>
                    <GenderCheckBox changeGenderFunction={changeGenderFunction} selectedGender={inputs.gender} />
                    <div className='button my-2'>
                        <button type="submit" className='w-full h-10 px-2 bg-gray-950 text-white rounded-xl hover:bg-white hover:text-black'>Sign Up</button>
                    </div>
                    <Link to={'/login'} className='hover:text-blue-400 pt-3 text-1xl'>Already have an account ?</Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp
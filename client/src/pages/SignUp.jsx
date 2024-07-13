import React, { useState } from 'react'
import GlassMorphism from '../components/GlassMorphism'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice.js'

function SignUp() {
  const [formData, setFormData]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading, error} = useSelector(state=>state.user)
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      dispatch(signInStart())
      const res=await fetch(`${import.meta.env.VITE_API_URL}/avighna/api/auth/signup`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data=await res.json()
      if(data.success === false){
        dispatch(signInFailure(data))
        setErrorMessage(data.message)
        return 
      }
      dispatch(signInSuccess(data))
      navigate('/sign-in')
    }
    catch(err){
      setErrorMessage(err.message)
      dispatch(signInFailure(err))
    }
  }
  return (
    <div className='h-max-screen bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)] flex flex-col justify-center items-center'>
      <GlassMorphism className="py-8 px-6 md:py-16 md:px-28 my-8">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <p className='text-3xl text-center font-semibold mb-8'>Sign Up</p>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" onChange={handleChange}/>
          </div>

          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <div className="flex relative mb-6">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input type="text" id="username" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="rajsingh365" onChange={handleChange}/>
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required onChange={handleChange}/>
          </div>

          <button type="submit" disabled={loading} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mb-2">{loading? 'Loading...' : 'Register new account'}</button>
          
          <OAuth setErrorMessage={setErrorMessage}/>
        </form>
        <div className=' text-sm flex gap-2 mt-5'>
          <p className='font-semibold'>Have an account?</p>
          <Link to='/sign-in'>
            <span className='text-sm text-blue-500'>Sign in</span>
          </Link>
        </div>
        <p className='text-red-700 mt-5 text-base'>{errorMessage} </p>
      </GlassMorphism>
    </div>
  )
}

export default SignUp
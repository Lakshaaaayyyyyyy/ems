import React, { useState } from 'react'


const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const sumbitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }
  return (

    <div className='flex h-screen w-screen items-center justify-center'> 
      <div className='border-2 border-emerald-600 p-20 rounded-3xl'>
        <form onSubmit={(e) =>{
                sumbitHandler(e)}}
                 className='flex flex-col items-center justify-center'>

          <input required value={email} onChange={(e) => setEmail(e.target.value)} className='text-white outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full' type="email" placeholder='Enter your email' />
          <input required value={password} onChange={(e) => setPassword(e.target.value)} className='text-white outline-none border-2 bg-transparent mt-3 border-emerald-600 text-xl py-3 px-5 rounded-full' type="password" placeholder='Enter your password' />
          <button className='text-white mt-8 outline-none w-full hover:bg-emerald-700 transition-all duration-300 border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full'>Log in</button>
        </form>
      </div> 
    </div>
  )
}

export default Login
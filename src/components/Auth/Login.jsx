import React from 'react'

const Login = () => {
    const submitHandler = ()=>{

    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-20 border-emerald-600 rounded-xl'>
            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email'/>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type='password' placeholder='Enter password' />
                <button className='text-white outline-none mt-5 border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
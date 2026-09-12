import { useState } from 'react'
import ThemeToggle from '../Other/ThemeToggle'

const Login = ({ handleLogin, theme, toggleTheme }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <main className='relative flex min-h-screen w-full items-center justify-center bg-[linear-gradient(135deg,#F5EBFA_0%,#E7DBEF_46%,#A56ABD_100%)] px-4 py-10 text-[#49225B] transition-colors dark:bg-[linear-gradient(135deg,#180D21_0%,#49225B_54%,#6E3482_100%)] dark:text-[#F5EBFA]'>
            <div className='absolute right-4 top-4'>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            <section className='w-full max-w-md rounded-lg border border-[#E7DBEF] bg-[#F5EBFA]/90 p-6 shadow-2xl shadow-[#49225B]/20 backdrop-blur dark:border-[#A56ABD]/30 dark:bg-[#2B1536]/90 sm:p-8'>
                <div className='mb-8 text-center'>
                    <p className='text-sm font-semibold text-[#6E3482] dark:text-[#E7DBEF]'>Employee Management</p>
                    <h1 className='mt-2 text-3xl font-bold text-[#49225B] dark:text-[#F5EBFA]'>Welcome back</h1>
                </div>

                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                    <label className='text-sm font-semibold text-[#49225B] dark:text-[#E7DBEF]'>
                        Email
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                            className='mt-2 w-full rounded-lg border border-[#A56ABD]/60 bg-white/80 px-4 py-3 text-base text-[#49225B] outline-none transition placeholder:text-[#6E3482]/55 focus:border-[#6E3482] focus:ring-2 focus:ring-[#A56ABD]/30 dark:border-[#A56ABD]/40 dark:bg-[#49225B]/45 dark:text-[#F5EBFA] dark:placeholder:text-[#E7DBEF]/60'
                            type='email'
                            placeholder='Email ID'
                        />
                    </label>

                    <label className='text-sm font-semibold text-[#49225B] dark:text-[#E7DBEF]'>
                        Password
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                            className='mt-2 w-full rounded-lg border border-[#A56ABD]/60 bg-white/80 px-4 py-3 text-base text-[#49225B] outline-none transition placeholder:text-[#6E3482]/55 focus:border-[#6E3482] focus:ring-2 focus:ring-[#A56ABD]/30 dark:border-[#A56ABD]/40 dark:bg-[#49225B]/45 dark:text-[#F5EBFA] dark:placeholder:text-[#E7DBEF]/60'
                            type='password'
                            placeholder='password'
                        />
                    </label>

                    <button className='mt-2 rounded-lg bg-[#6E3482] px-5 py-3 text-base font-semibold text-[#F5EBFA] shadow-lg shadow-[#49225B]/20 transition hover:bg-[#49225B] focus:outline-none focus:ring-2 focus:ring-[#A56ABD]/40 dark:bg-[#A56ABD] dark:text-[#180D21] dark:hover:bg-[#E7DBEF]'>
                        Log in
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Login

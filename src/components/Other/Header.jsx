import ThemeToggle from './ThemeToggle'

const Header = ({ onLogout, data, theme, toggleTheme }) => {
  const displayName = data?.firstName ?? 'Admin'

  return (
    <header className='flex flex-col gap-4 rounded-lg border border-[#E7DBEF] bg-white/85 p-5 shadow-sm shadow-[#49225B]/10 dark:border-[#A56ABD]/25 dark:bg-[#2B1536]/95 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <p className='text-sm font-semibold text-[#6E3482] dark:text-[#E7DBEF]'>Hello</p>
        <h1 className='mt-1 text-3xl font-bold text-[#49225B] dark:text-[#F5EBFA]'>{displayName}</h1>
      </div>

      <div className='flex flex-wrap items-center gap-3'>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <button onClick={onLogout} className='min-h-10 rounded-lg bg-[#49225B] px-5 py-2 text-sm font-semibold text-[#F5EBFA] transition hover:bg-[#6E3482] focus:outline-none focus:ring-2 focus:ring-[#A56ABD]/40 dark:bg-[#E7DBEF] dark:text-[#49225B] dark:hover:bg-[#F5EBFA]'>Log Out</button>
      </div>
    </header>
  )
}

export default Header

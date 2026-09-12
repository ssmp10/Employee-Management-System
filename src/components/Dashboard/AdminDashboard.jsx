import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({ onLogout, theme, toggleTheme }) => {
  return (
    <main className='min-h-screen w-full bg-[#F5EBFA] px-4 py-6 text-[#49225B] transition-colors dark:bg-[#180D21] dark:text-[#F5EBFA] sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl space-y-6'>
        <Header onLogout={onLogout} theme={theme} toggleTheme={toggleTheme} />
        <CreateTask />
        <AllTask />
      </div>
    </main>
  )
}

export default AdminDashboard

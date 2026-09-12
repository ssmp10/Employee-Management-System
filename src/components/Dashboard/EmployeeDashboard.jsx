import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, onLogout, theme, toggleTheme, updateTaskStatus }) => {
  return (
    <main className='min-h-screen bg-[#F5EBFA] px-4 py-6 text-[#49225B] transition-colors dark:bg-[#180D21] dark:text-[#F5EBFA] sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl space-y-6'>
        <Header onLogout={onLogout} data={data} theme={theme} toggleTheme={toggleTheme} />
        {data ? (
          <>
            <TaskListNumber data={data} />
            <TaskList data={data} onUpdateTask={updateTaskStatus} />
          </>
        ) : (
          <section className='rounded-lg border border-[#E7DBEF] bg-white/80 p-6 text-[#6E3482] shadow-sm shadow-[#49225B]/10 dark:border-[#A56ABD]/30 dark:bg-[#2B1536] dark:text-[#E7DBEF]'>
            Loading employee dashboard...
          </section>
        )}
      </div>
    </main>
  )
}

export default EmployeeDashboard

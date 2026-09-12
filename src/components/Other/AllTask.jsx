import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AllTask = () => {

   const [userData] = useContext(AuthContext)
   const employees = userData ?? []

   
  return (
    <section className='rounded-lg border border-[#E7DBEF] bg-white/85 p-5 shadow-sm shadow-[#49225B]/10 dark:border-[#A56ABD]/25 dark:bg-[#2B1536]/95 sm:p-6'>
        <div className='mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between'>
            <div>
                <h2 className='text-xl font-bold text-[#49225B] dark:text-[#F5EBFA]'>Employee Task Summary</h2>
                <p className='text-sm text-[#6E3482] dark:text-[#E7DBEF]'>Live counts from local storage.</p>
            </div>
        </div>

        <div className='hide-scrollbar overflow-x-auto'>
            <div className='min-w-[720px]'>
                <div className='grid grid-cols-5 rounded-lg bg-[#6E3482] px-4 py-3 text-sm font-semibold text-[#F5EBFA]'>
                    <h3>Employee Name</h3>
                    <h3>New Task</h3>
                    <h3>Active Task</h3>
                    <h3>Completed</h3>
                    <h3>Failed</h3>
                </div>

                <div className='mt-3 space-y-2'>
                    {employees.map((elem) => (
                        <div key={elem.id} className='grid grid-cols-5 rounded-lg border border-[#E7DBEF] bg-[#F5EBFA]/65 px-4 py-3 text-sm font-semibold text-[#49225B] dark:border-[#A56ABD]/25 dark:bg-[#49225B]/45 dark:text-[#F5EBFA]'>
                            <h3>{elem.firstName}</h3>
                            <p className='text-[#6E3482] dark:text-[#E7DBEF]'>{elem.taskNumbers.newTask}</p>
                            <p className='text-[#6E3482] dark:text-[#E7DBEF]'>{elem.taskNumbers.active}</p>
                            <p className='text-[#49225B] dark:text-[#F5EBFA]'>{elem.taskNumbers.completed}</p>
                            <p className='text-[#A56ABD] dark:text-[#E7DBEF]'>{elem.taskNumbers.failed}</p>
                        </div>
                    ))}

                    {!employees.length && (
                        <div className='rounded-lg border border-[#E7DBEF] bg-[#F5EBFA]/65 px-4 py-6 text-sm font-semibold text-[#6E3482] dark:border-[#A56ABD]/25 dark:bg-[#49225B]/45 dark:text-[#E7DBEF]'>
                            No employee data found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllTask

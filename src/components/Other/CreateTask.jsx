import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { saveEmployees } from '../../utils/localStorage'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    const employees = userData ?? []

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        }

        const assigneeId = Number(assignTo)
        let taskWasAssigned = false

        const updatedEmployees = employees.map((employee) => {
            if (employee.id === assigneeId) {
                taskWasAssigned = true
                return {
                    ...employee,
                    taskNumbers: {
                        ...employee.taskNumbers,
                        newTask: employee.taskNumbers.newTask + 1,
                    },
                    tasks: [...employee.tasks, task],
                }
            }

            return employee
        })

        if (!taskWasAssigned) {
            alert('Please choose an employee for this task')
            return
        }

        setUserData(updatedEmployees)
        saveEmployees(updatedEmployees)

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <section className='rounded-lg border border-[#E7DBEF] bg-white/85 p-5 shadow-sm shadow-[#49225B]/10 dark:border-[#A56ABD]/25 dark:bg-[#2B1536]/95 sm:p-6'>
            <div className='mb-5'>
                <h2 className='text-xl font-bold text-[#49225B] dark:text-[#F5EBFA]'>Create Task</h2>
                <p className='mt-1 text-sm text-[#6E3482] dark:text-[#E7DBEF]'>Assign focused work to an employee.</p>
            </div>

            <form onSubmit={submitHandler}
                className='grid w-full gap-5 lg:grid-cols-[1fr_0.9fr]'
            >
                <div className='grid gap-4 sm:grid-cols-2'>
                    <div>
                        <label className='text-sm font-semibold text-[#49225B] dark:text-[#E7DBEF]' htmlFor='taskTitle'>Task Title</label>
                        <input
                            id='taskTitle'
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            required
                            className='mt-2 w-full rounded-lg border border-[#A56ABD]/45 bg-[#F5EBFA]/75 px-4 py-3 text-sm text-[#49225B] outline-none transition placeholder:text-[#6E3482]/50 focus:border-[#6E3482] focus:ring-2 focus:ring-[#A56ABD]/30 dark:border-[#A56ABD]/35 dark:bg-[#49225B]/45 dark:text-[#F5EBFA] dark:placeholder:text-[#E7DBEF]/60'
                            type="text" placeholder='Task Title'
                        />
                    </div>
                    <div>
                        <label className='text-sm font-semibold text-[#49225B] dark:text-[#E7DBEF]' htmlFor='taskDate'>Date</label>
                        <input
                            id='taskDate'
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            required
                            className='mt-2 w-full rounded-lg border border-[#A56ABD]/45 bg-[#F5EBFA]/75 px-4 py-3 text-sm text-[#49225B] outline-none transition focus:border-[#6E3482] focus:ring-2 focus:ring-[#A56ABD]/30 dark:border-[#A56ABD]/35 dark:bg-[#49225B]/45 dark:text-[#F5EBFA]'
                            type="date"
                        />
                    </div>
                    <div>
                        <label className='text-sm font-semibold text-[#49225B] dark:text-[#E7DBEF]' htmlFor='assignTo'>Assign to</label>
                        <select
                            id='assignTo'
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            required
                            className='mt-2 w-full rounded-lg border border-[#A56ABD]/45 bg-[#F5EBFA]/75 px-4 py-3 text-sm text-[#49225B] outline-none transition focus:border-[#6E3482] focus:ring-2 focus:ring-[#A56ABD]/30 dark:border-[#A56ABD]/35 dark:bg-[#49225B]/45 dark:text-[#F5EBFA]'
                        >
                            <option value=''>Select employee</option>
                            {employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>{employee.firstName}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className='text-sm font-semibold text-[#49225B] dark:text-[#E7DBEF]' htmlFor='category'>Category</label>
                        <input
                            id='category'
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            required
                            className='mt-2 w-full rounded-lg border border-[#A56ABD]/45 bg-[#F5EBFA]/75 px-4 py-3 text-sm text-[#49225B] outline-none transition placeholder:text-[#6E3482]/50 focus:border-[#6E3482] focus:ring-2 focus:ring-[#A56ABD]/30 dark:border-[#A56ABD]/35 dark:bg-[#49225B]/45 dark:text-[#F5EBFA] dark:placeholder:text-[#E7DBEF]/60'
                            type="text"
                            placeholder='Design, Dev, etc'
                        />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label className='text-sm font-semibold text-[#49225B] dark:text-[#E7DBEF]' htmlFor='taskDescription'>Description</label>
                    <textarea
                        id='taskDescription'
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        required
                        className='mt-2 min-h-40 w-full rounded-lg border border-[#A56ABD]/45 bg-[#F5EBFA]/75 px-4 py-3 text-sm text-[#49225B] outline-none transition placeholder:text-[#6E3482]/50 focus:border-[#6E3482] focus:ring-2 focus:ring-[#A56ABD]/30 dark:border-[#A56ABD]/35 dark:bg-[#49225B]/45 dark:text-[#F5EBFA] dark:placeholder:text-[#E7DBEF]/60'
                    />
                    <button className='mt-4 min-h-11 w-full rounded-lg bg-[#6E3482] px-5 py-3 text-sm font-semibold text-[#F5EBFA] shadow-lg shadow-[#49225B]/15 transition hover:bg-[#49225B] focus:outline-none focus:ring-2 focus:ring-[#A56ABD]/40 dark:bg-[#A56ABD] dark:text-[#180D21] dark:hover:bg-[#E7DBEF]'>Create Task</button>
                </div>

            </form>
        </section>
    )
}

export default CreateTask

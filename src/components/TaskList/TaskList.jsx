import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onUpdateTask }) => {
  const tasks = data?.tasks ?? []

  return (
    <section id='tasklist' className='flex min-h-[340px] w-full flex-nowrap items-stretch justify-start gap-5 overflow-x-auto py-2'>
      {tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={`${elem.taskTitle}-${idx}`} data={elem} onAccept={() => onUpdateTask(idx, 'active')} />
        }
        if (elem.active) {
          return <AcceptTask key={`${elem.taskTitle}-${idx}`} data={elem} onComplete={() => onUpdateTask(idx, 'completed')} onFail={() => onUpdateTask(idx, 'failed')} />
        }
        if (elem.completed) {
          return <CompleteTask key={`${elem.taskTitle}-${idx}`} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={`${elem.taskTitle}-${idx}`} data={elem} />
        }

        return null
      })}

      {!tasks.length && (
        <div className='flex min-h-[220px] w-full items-center justify-center rounded-lg border border-[#E7DBEF] bg-white/80 p-6 text-sm font-semibold text-[#6E3482] dark:border-[#A56ABD]/25 dark:bg-[#2B1536]/95 dark:text-[#E7DBEF]'>
          No tasks assigned yet.
        </div>
      )}
    </section>
  )
}

export default TaskList

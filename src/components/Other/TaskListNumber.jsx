const TaskListNumber = ({ data }) => {
    const stats = [
        { label: 'New Tasks', value: data.taskNumbers.newTask },
        { label: 'Completed', value: data.taskNumbers.completed },
        { label: 'Accepted', value: data.taskNumbers.active },
        { label: 'Failed', value: data.taskNumbers.failed },
    ]

    return (
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {stats.map((stat) => (
                <article key={stat.label} className='rounded-lg border border-[#E7DBEF] bg-white/85 p-5 shadow-sm shadow-[#49225B]/10 dark:border-[#A56ABD]/25 dark:bg-[#2B1536]/95'>
                    <h2 className='text-4xl font-bold text-[#49225B] dark:text-[#F5EBFA]'>{stat.value}</h2>
                    <p className='mt-2 text-sm font-semibold text-[#6E3482] dark:text-[#E7DBEF]'>{stat.label}</p>
                </article>
            ))}
        </section>
    )
}

export default TaskListNumber

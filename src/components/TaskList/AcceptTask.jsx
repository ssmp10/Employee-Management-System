const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <article className='flex min-h-[320px] w-[300px] flex-shrink-0 flex-col rounded-lg border border-[#E7DBEF] border-t-4 border-t-[#6E3482] bg-white/85 p-5 text-[#49225B] shadow-sm shadow-[#49225B]/10 dark:border-[#A56ABD]/25 dark:border-t-[#A56ABD] dark:bg-[#2B1536]/95 dark:text-[#F5EBFA]'>
            <div className='flex items-center justify-between gap-3'>
                <h3 className='rounded-full bg-[#E7DBEF] px-3 py-1 text-xs font-semibold text-[#49225B] dark:bg-[#49225B] dark:text-[#F5EBFA]'>{data.category}</h3>
                <time className='text-sm font-medium text-[#6E3482] dark:text-[#E7DBEF]'>{data.taskDate}</time>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='mt-2 flex-1 text-sm leading-6 text-[#6E3482] dark:text-[#E7DBEF]'>
                {data.taskDescription}
            </p>
            <div className='mt-6 grid grid-cols-2 gap-2'>
                <button type='button' onClick={onComplete} className='rounded-lg bg-[#6E3482] px-3 py-2 text-xs font-semibold text-[#F5EBFA] transition hover:bg-[#49225B] focus:outline-none focus:ring-2 focus:ring-[#A56ABD]/40 dark:bg-[#A56ABD] dark:text-[#180D21] dark:hover:bg-[#E7DBEF]'>Complete</button>
                <button type='button' onClick={onFail} className='rounded-lg border border-[#A56ABD]/50 px-3 py-2 text-xs font-semibold text-[#6E3482] transition hover:border-[#6E3482] hover:bg-[#E7DBEF] focus:outline-none focus:ring-2 focus:ring-[#A56ABD]/40 dark:text-[#F5EBFA] dark:hover:bg-[#49225B]'>Fail</button>
            </div>
        </article>
  )
}

export default AcceptTask

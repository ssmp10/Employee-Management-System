import React from 'react'

const FailedTask = () => {
    return (
        <div className='shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a yt vdo</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sit.</p>

            <div className='mt-2'>
                <button className='w-full'>Failed</button>
            </div>

        </div>
    )
}

export default FailedTask
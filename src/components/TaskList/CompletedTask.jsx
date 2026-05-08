import React from 'react'

const CompletedTask = ({data}) => {
  return (
    <div className='h-full w-[340px] p-5 bg-violet-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-violet-600 text-sm py-1 mt-5 px-3 rounded'>{data.priority}</h3>
                <h4 className=''>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <button className='bg-green-500 px-2 py-1 text-sm mt-4'>Completed</button>
        </div>
  )
}

export default CompletedTask
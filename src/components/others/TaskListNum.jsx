import React from 'react'

export const TaskListNum = ({data}) => {
  return (
    <div className='flex mt-10 px-11 py-4 justify-between gap-5 screen'>
        <div className='rounded-xl hover:scale-105 hover:bg-red-500 transition-transform duration-200 w-[40%] bg-red-400 px-9 py-6 shadow-md'>
            <h2 className='text-lg  font-semibold mb-4'>{data?.taskNumber.new}</h2>
            <h3 className='text-xl font-bold mb-2'>New Task</h3>
        </div>
        <div className='rounded-xl hover:bg-blue-500 hover:scale-105 transition-transform duration-200 w-[40%] bg-blue-400 px-9 py-6 shadow-md'>
            <h2 className='text-lg font-semibold mb-4'>{data?.taskNumber.active}</h2>
            <h3 className='text-xl font-bold mb-2'>Active</h3>
        </div>
        <div className='rounded-xl hover:scale-105 hover:bg-green-500 transition-transform duration-200 w-[40%] bg-green-400 px-9 py-6 shadow-md'>
            <h2 className='text-lg font-semibold mb-4'>{data?.taskNumber.completed}</h2>
            <h3 className='text-xl font-bold mb-2'>Completed</h3>
        </div>
        <div className='rounded-xl hover:scale-105 hover:bg-pink-500 transition-transform duration-200 w-[40%] bg-pink-400 px-9 py-6 shadow-md'>
            <h2 className='text-lg font-semibold mb-4'>{data?.taskNumber.failed}</h2>
            <h3 className='text-xl font-bold mb-2'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNum
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider.jsx'

const AllTask = () => {
  const AuthData = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] mt-7 p-5 px-10 py-3 h-80 rounded'>
    
      <div className='bg-red-400 py-4 px-5 flex justify-between rounded sticky top-0'>
        <h2 className='text-lg font-medium w-1/5 text-black '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 text-black '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 text-black '>Active</h5>
        <h5 className='text-lg font-medium w-1/5 text-black '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 text-black '>Failed</h5>
      </div>

      
      <div className='max-h-[calc(100%-4rem)] overflow-y-auto mt-5'>
        {AuthData.employees.map((elem, index) => {
          return (
            <div key={index} className=' border-2 border-emerald-500 mb-5 py-4 px-5 flex justify-between rounded'>
              <h2 className=' text-lg font-medium w-1/5'>{elem.firstName}</h2>
              <h3 className=' text-lg font-medium w-1/5'>{elem.taskNumber.new}</h3>
              <h5 className=' text-lg font-medium w-1/5 text-yellow-500'>{elem.taskNumber.active}</h5>
              <h5 className=' text-lg font-medium w-1/5 text-green-500'>{elem.taskNumber.completed}</h5>
              <h5 className=' text-lg font-medium w-1/5 text-red-500'>{elem.taskNumber.failed}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask
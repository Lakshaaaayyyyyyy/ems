import React, { useState } from 'react'

const Header = (props) => {


     const logOutUser = () => {
        localStorage.setItem('loggedInuser','')
        props.changeUser('')
        // window.location.reload()
     }

    return (
        <div className='flex items-end justify-between px-11 py-7'>
            <h1 className='text-2xl font-bold'>Hii <br /> <span className='text-4xl font-bold'>{props.data?.firstName} 👋</span></h1>
            <div className='flex items-center gap-5'>
                <button onClick={logOutUser} className='bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-4 py-2 rounded-md'>Logout</button>
            </div>
        </div>
    )
}
export default Header
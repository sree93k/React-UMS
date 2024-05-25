import React from 'react'
import {Link} from 'react-router-dom'
const header = () => {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold'> Auth App</h1>
            </Link>
            
            <ul className='flex gap-4'>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/About'><li>About</li></Link>
                <Link to='/signin'><li>Sign in</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default header

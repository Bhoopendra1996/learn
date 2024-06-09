import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col pl-8 pt-8 rounded-md fixed left-0 right-0'>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Sidebar

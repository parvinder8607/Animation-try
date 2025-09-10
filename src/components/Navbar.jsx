import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-screen bg-black h-16 flex justify-between items-center px-4 z-[999]'>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <nav className='flex gap-4'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/try">Try</NavLink>
            <NavLink to="/design">Design</NavLink>
            <NavLink to="/page1">Page1</NavLink>
            <NavLink to="/play">Play</NavLink>
        </nav>
    </header>
  )
}

export default Navbar

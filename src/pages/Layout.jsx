import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Cursor from '../components/cursor'

const Layout = () => {
  return (
    <main className='bg-black'>
      <Cursor />
      <Navbar />
    <Outlet />
    </main>
  )
}

export default Layout

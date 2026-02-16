import React from 'react'
import './App.css'
import Navbar from './Componenets/Navbar' // Double check this folder spelling!
import Footer from './Componenets/Footer'
import { Outlet } from 'react-router'
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
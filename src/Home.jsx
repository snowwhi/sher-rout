import React from 'react'
import './App.css'
import Navbar from './Componenets/Navbar'
import Footer from './Componenets/Footer'
import { Outlet } from 'react-router'
const Home = () => {
  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default Home
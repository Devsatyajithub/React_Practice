import React from 'react'
import Footer from './components/Header/Footer/Footer'
import Header from './components/Header/Footer/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout
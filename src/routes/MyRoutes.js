import React from 'react'
import { Route, Routes } from 'react-router'
import AboutPage from '../pages/AboutPage'
import Home from '../pages/Home'

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default MyRoutes
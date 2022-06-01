import React from 'react'
import { Route, Routes } from 'react-router'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>
      <Route exact path='/projects' element={<ProjectsPage/>}/>
      <Route exact path='/contact' element={<ContactPage/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default MyRoutes
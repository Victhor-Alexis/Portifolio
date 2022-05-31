import React from 'react'
import { Route, Routes } from 'react-router'
import AboutPage from '../pages/AboutPage'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>
      <Route exact path='/projects' element={<ProjectsPage/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default MyRoutes
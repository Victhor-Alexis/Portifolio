import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
  )
}

export default MyRoutes
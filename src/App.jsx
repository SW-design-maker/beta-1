import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import User_total from './fragments/User_total/User_total'
import User_location from './fragments/User_location/User_location'
import About from './pages/About'
import About_contact from './fragments/About_contact/About_contact'
import About_delivery from './fragments/About_delivery/About_delivery'
import Shop from './pages/Shop'
import Menu from './pages/Menu'
import Card_info from './pages/Card_info'
import Not_found from './fragments/Not found/Not_found'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/user_location' element={<User_location />} />
        <Route path='/user/user_total' element={<User_total />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/contact' element={<About_contact />} />
        <Route path='/about/delivery' element={<About_delivery />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/card-info/:_id' element={<Card_info />} />
        <Route path='/*' element={<Not_found />} />
      </Routes>
    </>
  )
}

export default App

// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Cart } from './pages/cart'
import { Navbar } from './components/navbar'
import { Addcart } from './pages/logic/addcart'

function App() {

  return (
    <>
      <Addcart>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
      </Router>
      </Addcart>
    </>
  )
}

export default App

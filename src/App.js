import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Home from './pages/home/Home'
import Products from './pages/products/Products'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/maxsulotlar/:id" element={<Products/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
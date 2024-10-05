import React from 'react'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/pages/AboutUs'
import Features from './component/pages/Features'
import Pricing from './component/pages/Pricing'
import Feedback from './component/pages/Feedback'
import Navbar from './component/reuse/Navbar'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;

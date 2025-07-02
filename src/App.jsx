import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CookiesChoice from './components/CookiesChoice'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

function App() {
  const [showCookiesModal, setShowCookiesModal] = useState(true)

  const handleShowCookiesModal = () => {
    setShowCookiesModal(!showCookiesModal)
  }

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
      {showCookiesModal && <CookiesChoice show={showCookiesModal} handleShow={handleShowCookiesModal} />}
    </div>
  )
}

export default App


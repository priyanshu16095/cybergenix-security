import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CookiesChoice from './components/CookiesChoice'
import CyberData from './components/CyberData'
import ContactForm from './components/ContactForm'

function App() {
  const [showCookiesModal, setShowCookiesModal] = useState(true)

  const handleShowCookiesModal = () => {
    setShowCookiesModal(!showCookiesModal)
  }

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
      <Navbar />
      <Hero />
      <CyberData />
      <ContactForm />
      <Accordion />
      <Footer />
      {showCookiesModal && <CookiesChoice show={showCookiesModal} handleShow={handleShowCookiesModal} />}
    </div>
  )
}

export default App


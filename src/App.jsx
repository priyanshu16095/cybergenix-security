import React from 'react'
import Navbar from './components/Navbar'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Accordion />
      <Footer />
    </div>
  )
}

export default App

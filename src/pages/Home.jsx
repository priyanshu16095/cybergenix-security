import React from 'react'
import Hero from '../components/Hero'
import CyberData from '../components/CyberData'
import ContactForm from '../components/ContactForm'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Hero />
            <CyberData />
            <ContactForm />
            <Accordion />
            <Footer />
        </div>
    )
}

export default Home

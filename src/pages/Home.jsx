import React from 'react'
import Hero from '../components/Hero'
import CyberData from '../components/CyberData'
import ContactForm from '../components/ContactForm'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import Audit from '../components/Audit'

function Home() {
    return (
        <div>
            <Hero />
            <Audit />
            <CyberData />
            <ContactForm />
            <Accordion />
        </div>
    )
}

export default Home

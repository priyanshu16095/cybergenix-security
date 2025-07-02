import React from 'react'

function ContactForm() {
    return (
        <div className="contactform__container comp center">
            <div className='flex-s gap-md'>
                <div className="w-full flex-v gap-sm">
                    <p>Contact us</p>
                    <p className="hero__title title">Modernize your identity security with CyberGenix Security</p>
                </div>

                <div className="contactform w-full flex-v gap-md">
                    <div className="flex-v gap-sm" style={{ width: "100%" }}>
                        <div className="flex-h gap-sm" style={{ width: "100%" }}>
                            <input type="text" placeholder='First name' />
                            <input type="text" placeholder='Last name' />
                        </div>
                        <div className="flex-h gap-sm" style={{ width: "100%" }}>
                            <input type="text" placeholder='Buisness email' />
                            <input type="text" placeholder='Phone number' />
                        </div>
                        <div className="flex-h gap-sm" style={{ width: "100%" }}>
                            <input type="text" placeholder='Job title' />
                            <input type="text" placeholder='Company' />
                        </div>
                        <input type="text" placeholder='Reason for inquiry' />
                        <textarea type="text" placeholder='How can we help?' />
                    </div>

                    <div className="flex-v gap">
                        <p className='font-xsm primary'>By submitting this form, you agree to SailPoint contacting you about SailPoint products and services. You may unsubscribe at any time by clicking the unsubscribe link on any emails you receive or by emailing optout@sailpoint.com. SailPoint's websites and communications are subject to our Privacy Statement.</p>

                        <button className='w-full'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

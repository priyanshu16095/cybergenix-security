import React from 'react'

function Navbar() {
    return (
        <div className='navbar-container center vertical padding'>
            <div className='navbar highl w-full rad flex-s padding'>
                <p>CyberGenix Security</p>
                <div className="flex-h gap show">
                    <p>Home</p>
                    <p>About us</p>
                    <p>Services</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar

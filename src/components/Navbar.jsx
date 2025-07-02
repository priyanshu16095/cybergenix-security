import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container center vertical padding'>
            <div className='navbar highl w-full rad flex-s align-center padding'>
                <p>CyberGenix Security</p>
                <div className="flex-h gap show">
                    <Link to={"/home"}><p className='cursor'>Home</p></Link>
                    <Link to={"/about-us"}><p className='cursor'>About us</p></Link>
                    <Link to={"/services"}><p className='cursor'>Services</p></Link>
                </div>
                <button>Get a demo</button>
            </div>
        </div>
    )
}

export default Navbar

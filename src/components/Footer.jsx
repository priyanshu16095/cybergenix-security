import React from 'react'

function Footer() {
    return (
        <div className='comp h-full flex-s vertical'>
            <div className="footer-top rad highl flex-v gap">
                <p className="title">Let’s connect</p>
                <p>Feel free to reach out for collaborations or just a friendly ping.</p>
                <button>Mail us</button>
            </div>
            <div className='border-top flex-v gap-md'>
                <div className="flex-v gap-sm">
                    <a href="#">Contact us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Reviews</a>
                    <a href="#">About</a>
                </div>
                <div className="flex-h gap">
                    <p>LINKEDIN</p>
                    <p>INSTAGRAM</p>
                    <p>X.COM</p>
                </div>
                <p>Designed by <a href="" className='bold'>Priyanshu Gupta</a></p>
            </div>
        </div>
    )
}

export default Footer

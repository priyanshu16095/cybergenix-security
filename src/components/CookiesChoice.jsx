import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function CookiesChoice({ show, handleShow }) {

    return (
        <div className="cookieschoice__container">
            <div className="cookieschoice padding gap flex-s make-vertical">
                <p className="font-sm cookieschoice__left">We use cookies on this website to enhance your experience, provide personalized advertising, and improve our services and our website's functionality. You can accept, reject, or customize your preferences by clicking the options below.</p>

                <div className="flex-h cookieschoice__right gap">
                    <button className='font-sm'>Accept Cookies</button>
                    <CloseIcon className='icon' onClick={() => handleShow()} />
                </div>
            </div>
        </div>
    )
}

export default CookiesChoice

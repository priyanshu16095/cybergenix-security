import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SecurityIcon from '@mui/icons-material/Security';

function Data1() {
    return (
        <div className='cyberdata__item flex-v align-center gap'>
            <ComputerIcon style={{ fontSize: '8rem' }} />
            <div className="flex-v align-center">
                <p className="bold padding-bottom-sm font">2.5 Lakh+</p>
                <p>Attacks Prevented Daily</p>
                <p className='font-sm primary'>Real-time threat detection and neutralization</p>
            </div>
        </div>
    )
}
function Data2() {
    return (
        <div className='cyberdata__item flex-v align-center gap'>
            <PeopleAltIcon style={{ fontSize: '8rem' }} />
            <div className="flex-v align-center">
                <p className="bold padding-bottom-sm font">1.2 Cr+</p>
                <p>	Users Educated</p>
                <p className='font-sm primary'>People trained through awareness programs</p>
            </div>
        </div>
    )
}
function Data3() {
    return (
        <div className='cyberdata__item flex-v align-center gap'>
            <SecurityIcon style={{ fontSize: '8rem' }} />
            <div className="flex-v align-center">
                <p className="bold padding-bottom-sm font">500 TB+</p>
                <p>Data Secured Daily</p>
                <p className='font-sm primary'>Amount of sensitive data protected</p>
            </div>
        </div>
    )
}

function CyberData() {
    return (
        <div className='padding flex-v gap-lg'>
            <div className="flex-v gap">
                <p className="title">Global cybersecurity impact powering digital safety</p>
                <p>Explore key cybersecurity statistics that highlight the scale of digital threats and the global efforts to combat them. These numbers showcase the impact, reach, and importance of cybersecurity in today’s connected world.</p>
            </div>
            <div className="flex-s gap make-vertical">
                <Data1 />
                <Data3 />
                <Data2 />
            </div>
        </div>
    )
}

export default CyberData

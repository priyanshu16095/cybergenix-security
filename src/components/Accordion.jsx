import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
    const data = [
  {
    ques: "What is cybersecurity?",
    ans: "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It includes tools and processes that safeguard digital assets across all sectors."
  },
  {
    ques: "Why is cybersecurity important?",
    ans: "With the growing number of online threats like phishing, malware, and ransomware, cybersecurity ensures the privacy, integrity, and availability of information and critical systems."
  },
  {
    ques: "What are the common types of cyber attacks?",
    ans: "Common types include phishing, malware, ransomware, denial-of-service (DoS) attacks, and man-in-the-middle attacks. Each aims to steal data, disrupt operations, or damage digital infrastructure."
  },
  {
    ques: "How can individuals protect themselves online?",
    ans: "Use strong, unique passwords; enable two-factor authentication; avoid suspicious links; update software regularly; and install antivirus protection to stay secure online."
  },
  {
    ques: "What should I do if I suspect a cyber attack?",
    ans: "Disconnect from the internet, report the incident to your organization's IT team or a cybersecurity expert, run a full antivirus scan, and change passwords immediately for compromised accounts."
  }]


    const [selected, setSelected] = useState([])

    const handleClick = (index) => {
        if (selected.includes(index)) {
            setSelected(selected.filter((i) => i !== index))
        } else {
            setSelected([...selected, index])
        }
    };


    return (
        <div className='comp h-full center flex-v gap-md'>
            <div className="flex-v gap">
                <p className="title">FAQs</p>
                <p>If you can't find the answer to your question below, email us at <span className='bold'>info@cybergenix.com</span></p>
            </div>

            <div className="flex-v w-full rad highl">
                {data && data.length ?
                    data.map((item, index) => (
                        <div className='flex-v gap w-full padding border-bottom'>
                            <div className="flex-s cursor" onClick={() => handleClick(index)} key={index}>
                                <p className='bold'>{item.ques}</p>
                                {selected.includes(index) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </div>
                            {selected.includes(index) ? <p>{item.ans}</p> : null}
                        </div>
                    ))
                    : null}
            </div>
        </div>
    )
}

export default Navbar

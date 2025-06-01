import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
    const data = [
        { ques: "What is the question?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga perspiciatis veniam nisi molestias, voluptatibus id soluta laudantium debitis in tempore harum at ipsa optio, nobis praesentium voluptatem obcaecati totam!" },
        { ques: "What is the question?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga perspiciatis veniam nisi molestias, voluptatibus id soluta laudantium debitis in tempore harum at ipsa optio, nobis praesentium voluptatem obcaecati totam!" },
        { ques: "What is the question?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga perspiciatis veniam nisi molestias, voluptatibus id soluta laudantium debitis in tempore harum at ipsa optio, nobis praesentium voluptatem obcaecati totam!" },
        { ques: "What is the question?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga perspiciatis veniam nisi molestias, voluptatibus id soluta laudantium debitis in tempore harum at ipsa optio, nobis praesentium voluptatem obcaecati totam!" },
        { ques: "What is the question?", ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga perspiciatis veniam nisi molestias, voluptatibus id soluta laudantium debitis in tempore harum at ipsa optio, nobis praesentium voluptatem obcaecati totam!" },
    ]

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
                        <div className='flex-v gap padding border-bottom'>
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

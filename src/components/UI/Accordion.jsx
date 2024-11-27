import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Faq = ({ currData }) => {
    const { question, answer } = currData;

    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        setShow(!show);
    }

    return (

        <div className="accordion-container">
            <div className='accordion'>
                <div className=" accordion-question">
                    <p>{question}</p>
                    <button className='btn-faq' onClick={handleButtonToggle}>
                        {
                            show ? <FaChevronUp/> : <FaChevronDown/>
                        }
                    </button>
                </div>
                <p className='answer'>{show && answer}</p>
            </div>
        </div>
    )
}

export default Faq


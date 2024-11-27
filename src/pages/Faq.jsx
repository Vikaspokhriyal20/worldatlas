import React, { useEffect, useState } from 'react'
import Accordion from '../components/UI/Accordion'
import faq from '../api/faqData.json';

const Faq = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(faq);
    })

    console.log(data);
    return (
        <section className='faq-section'>
            <div className="container">
                <h3 className='container-title'>Faq</h3>
                {
                    data.map((currData) => {
                        return (
                            <Accordion key={currData.id} currData={currData} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Faq

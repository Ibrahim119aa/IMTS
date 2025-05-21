"use client"
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div className={`accordion-title bg-black  text-white cursor-pointer ${isOpen ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion} style={{ padding: '1rem', fontWeight: '600 !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="m-0 d-flex gap-1 text-white" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '400 !important', fontSize: '18px' }}>
                    {title} ?
                </p>
                <span>
                    <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </span>
            </div>
            {isOpen && (
                <div className="accordion-content ml-2">
                    <p className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                        {content}
                    </p>
                </div>
            )}
        </div>
    );
}

function Accordion({ items }) {
    return (
        <div className="accordion  ">

            {items.map((item, index) => (
                <AccordionItem key={index} title={item.question} content={item.answer} className="mt-2" />

            ))}
        </div>
    );
}

function App1({ a }) {


    return (
        <div className=" panel-group mt-4">

            <Accordion items={a} />
        </div>
    );
}

export default App1;

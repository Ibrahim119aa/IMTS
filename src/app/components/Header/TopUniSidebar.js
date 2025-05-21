import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { apiUrl } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecializationList, getSpecializationlistDetail, setSpecializationId, setSpecializationName } from '../../_redux/itemSlice';

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const getSpecializatioId = (id, name) => {


        dispatch(setSpecializationId(id));
        dispatch(setSpecializationName(name));

    }

    const specializationlist = useSelector(getSpecializationlistDetail);

    const dispatch = useDispatch();

    useEffect(() => {


        if (specializationlist === undefined || specializationlist.length == 0) {
            dispatch(getSpecializationList())


        }
    }, [dispatch]);
    console.log(specializationlist);
    



    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div className={`accordion-title w-full border-b border-b-gray-300 ${isOpen ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion} style={{ padding: '1rem', fontWeight: '800 !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="m-0 d-flex gap-1 text-dark font-bold" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', letterSpacing: '1px', wordSpacing: '2px', fontWeight: '800 !important', fontSize: '16px' }} >

                    {title}
                </p>

                <span>
                    <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </span>
            </div>
            {isOpen && (
                <div className="accordion-content ml-2">

                    {
                        specializationlist.map((b, i) => (
                            b.courseid == content ?
                                (
                                    <>
                                        <p key={i} className="m-2 p-2 d-flex gap-2" onClick={() => getSpecializatioId(b.id, b.specialization)} style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                            {b.specialization}
                                        </p>
                                        <hr /></>
                                ) : ''
                        ))
                    }
                    {/* {
                        specializationlist.map((e) => {
                            <p className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                Ibrahim
                            </p>
                        })
                    } */}
                </div>
            )}
        </div>
    );
}

function Accordion({ items }) {
    return (
        <div className="accordion">

            {items.map((item, index) => (
                <AccordionItem key={index} title={item.courename} content={item.id} className="mt-2" />

            ))}
        </div>
    );
}

function TopUniSidebar({ a }) {


    return (
        <div className="app ">

            <Accordion items={a} />
        </div>
    );
}

export default TopUniSidebar;

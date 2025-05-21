"use client";
import { useEffect } from 'react';
import "../../globals.css";
import { useState } from 'react';

import axios from 'axios';

import Link from 'next/link';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { getJobData, getJobPageDetail } from '../../_redux/itemSlice';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
const CVCareer = () => {

    let apiUrl=process.env.NEXT_PUBLIC_API_URL;

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen1, setIsOpen1] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };


    const [jobtypelist, setjobtypelist] = useState([]);

    const getJobTypelist = async () => {
        let a = await axios.get(`${apiUrl}get-Job-Type`);

        setjobtypelist(a.data);

    }
    const [checkedValue, setCheckedValue] = useState('');




    const [jobmodelist, setjobmodelist] = useState([]);

    const getJobMode = async () => {
        let a = await axios.get(`${apiUrl}get-Job-Mode`);
        setjobmodelist(a.data);
    }

    const scrollToSection = (sectionClass) => {
        const sections = document.getElementsByClassName(sectionClass);
        if (sections.length > 0) {
            sections[0].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const a = useSelector(getJobPageDetail);
    const [joblist, setjoblist] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        if (a === undefined || a.length == 0) {
            dispatch(getJobData());


        }
        const fetchData = async () => {

            await getJobTypelist();
            await getJobMode();
            scrollToSection("container-fluid");



        }
        fetchData();
    }, [dispatch]);
    console.log(a);

    const j = a === undefined ? [] : a;

    const MyData = (data) => {
        setjoblist(data);

    }
    useEffect(() => {
        MyData(j);
    }, [a])

    const handleCheckboxChange = async (e, value) => {
        if (e.target.checked) {

            const job = [];
            joblist.forEach((p) => {
                if (p.jobtypenumber == value) {
                    job.push(p);

                }

            });
            setjoblist(job);


            setCheckedValue(value);




        } else {
            setCheckedValue('');
            setjoblist(j);

        }
    };

    const handleCheckboxChange1 = async (e, value) => {
        if (e.target.checked) {

            setCheckedValue(value);


            let job = [];

            joblist.forEach((e) => {
                if (e.jobmodenumber == value) {
                    job.push(e);
                }
            });
            setjoblist(job);




        } else {
            setCheckedValue('');
            setjoblist(j);
        }
    };



    const isMobileExtraSmall = useMediaQuery({ query: '(max-width: 549px)' });
    const isMobileSmall = useMediaQuery({ query: '(min-width: 550px) and (max-width: 638px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 639px) and (max-width: 767px)' });

    const isTablet = useMediaQuery({ query: '(min-width:768px) and (max-width: 1023px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1024px)' });


    return <div>
        <div className={`grid grid-cols-1`}>
            <Slider >

                <div className="rounded-lg">
                    <Image
                        width={500}
                        height={500}
                        src={`/cv.jpg`}
                        alt='cv.jpg'
                        priority



                        className={`w-full ${isLarge ? 'h-96 max-h-96  ' : ''}    rounded-3xl`}
                    />
                </div>

            </Slider>
        </div>
        <div className={`px-24 pt-12 pb-12 ${isMobileSmall ? 'px-5 pt-5 pb-5' : ''} ${isMobileExtraSmall ? 'px-4 pt-3 pb-2' : ''} ${isMobile ? 'px-5 pt-5 pb-5' : ''} ${isTablet ? 'px-5 pt-5 pb-5' : ''}`}>
            <div className={`grid grid-cols-7 gap-2`}>
                <div className={`col-span-2 ${isTablet ? 'col-span-6' : ''} ${isMobile ? 'col-span-6' : ''} ${isMobileSmall ? 'col-span-4' : ''} ${isMobileExtraSmall ? 'col-span-4' : ''} `}>
                    <h5 className="fw-bold mb-0  h5 ">Refine your search</h5>

                </div>
                <div className={`col-span-4 ${isTablet ? 'col-span-6' : ''} ${isMobile ? 'col-span-6' : ''} ${isMobileSmall ? 'col-span-6' : ''} ${isMobileExtraSmall ? 'col-span-6' : ''}`}>
                    <div className="input-group d-flex ">
                        <input
                            type="search"

                            placeholder="Search from Below List"
                            className="fs-14 rounded-0 py-3 w-75    form-control1  form-control-md"
                        />
                        <button type="button" className="bgprimary fs-14 btn btn-primary " >
                            Search
                        </button>
                    </div>
                </div>
                <div className={`my-4`}>
                    <span className=" text-nowrap fs-14 w-lg-25 text-end">{joblist.length} Results</span>
                </div>

            </div>
            <div className={`grid grid-cols-7 my-1 gap-3`}>
                <div className={`col-span-2 ${isMobile?'hidden':''} ${isMobileSmall ? 'hidden' : ''} ${isMobileExtraSmall ? 'hidden' : ''}`}>
                    <div className={`border rounded accordion-item border-b-red-50 border-red-50 bg-[#f7f7f7]  ${isOpen ? 'open' : ''}`} >
                        <div className={`accordion-title ${isOpen ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion} style={{ padding: '1.2rem', fontWeight: '800 !important', backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p className=" item-center d-flex gap-1" style={{ letterSpacing: '1px', color: '#212529', wordSpacing: '1px', fontWeight: '1000 !important', fontSize: '18px' }}>
                                Job Profile
                            </p>
                            <span>
                                <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </span>
                        </div>

                        {isOpen && (
                            <div className="accordion-content ml-2">
                                {
                                    jobtypelist.map((x, k) =>
                                    (
                                        <p key={k} className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                            <div className="d-flex align-items-center gap-2 fs-14 form-check">
                                                <input
                                                    role="button"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    onChange={(e) => handleCheckboxChange(e, x.id)}

                                                />
                                                <label title="" className="form-check-label mt-1">
                                                    {x.name}
                                                </label>
                                            </div>
                                        </p>
                                    ))
                                }

                            </div>
                        )}

                    </div>

                    <div className={`border rounded mt-1 accordion-item bg-[#f7f7f7] ${isOpen1 ? 'open' : ''}`} >
                        <div className={`accordion-title ${isOpen1 ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion1} style={{ padding: '1.2rem', fontWeight: '800 !important', backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p className=" item-center d-flex gap-1" style={{ letterSpacing: '1px', color: '#212529', wordSpacing: '1px', fontWeight: '1000 !important', fontSize: '18px' }}>
                                Job Type
                            </p>
                            <span>
                                <i className={`fas ${isOpen1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </span>
                        </div>
                        {isOpen1 && (
                            <div className="accordion-content ml-2">
                                {
                                    jobmodelist.map((v, k) =>
                                    (
                                        <p key={k} className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                            <div className="d-flex align-items-center gap-2 mb-2 fs-14 form-check">
                                                <input
                                                    role="button"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    onChange={(e) => handleCheckboxChange1(e, v.id)}
                                                />
                                                <label title="" className="form-check-label mt-1">
                                                    {v.name}
                                                </label>
                                            </div>
                                        </p>
                                    ))
                                }

                            </div>
                        )}

                    </div>

                    <div className={`border rounded mt-1 accordion-item bg-[#f7f7f7]  ${isOpen2 ? 'open' : ''}`} >
                        <div className={`accordion-title ${isOpen2 ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion2} style={{ padding: '1.2rem', fontWeight: '800 !important', backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p className="item-center d-flex gap-1" style={{ letterSpacing: '1px', color: '#212529', wordSpacing: '1px', fontWeight: '1000 !important', fontSize: '18px' }}>
                                Location
                            </p>
                            <span>
                                <i className={`fas ${isOpen2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </span>
                        </div>
                        {isOpen2 && (
                            <div className="accordion-content ml-2">
                                <p className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                    <div className="d-flex align-items-center gap-2 mb-2 fs-14 form-check">
                                        <input
                                            role="button"
                                            type="checkbox"
                                            className="form-check-input"

                                        />
                                        <label title="" className="form-check-label mt-1">
                                            India
                                        </label>
                                    </div>
                                </p>

                            </div>
                        )}

                    </div>
                </div>
                <div className={`col-span-4 ${isMobile ? 'col-span-7' : ''} ${isMobileSmall ? 'col-span-7' : ''} ${isMobileExtraSmall ? 'col-span-7' : ''} ${isTablet ? 'col-span-5' : ''}`}>
                    {
                        joblist && (
                            joblist.map((v, k) =>
                            (
                                <Link key={k} href={`/Job-Detail/${v.id}`}>
                                    <div className="row ">

                                        <div className="col-lg-12" >
                                            <div className="border rounded p-3 p-md-4 mb-4 position-relative bg-white JobBar_hover_shadow__hX9SE m-0 row">
                                                <div className="col-12 col-md-9 col">
                                                    <div>
                                                        <p className="fw-bold m-0 h5">{v.jobtype}</p>
                                                        {/* <p className="fs-12 text-secondary">{v.location}</p> */}
                                                        <p className="fs-14 d-flex gap-3 flex-wrap font-bold">
                                                            <span>
                                                                <svg
                                                                    style={{ display: 'inline-block' }}
                                                                    stroke="currentColor"
                                                                    fill="currentColor"
                                                                    strokeWidth="0"
                                                                    viewBox="0 0 16 16"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                                                </svg>
                                                                <span className='ml-1'>
                                                                    {v.location}
                                                                </span>
                                                            </span>
                                                            <span>
                                                                <svg
                                                                    style={{ display: 'inline-block' }}
                                                                    stroke="currentColor"
                                                                    fill="currentColor"
                                                                    strokeWidth="0"
                                                                    viewBox="0 0 16 16"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"></path>
                                                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                                                </svg>
                                                                <span className='ml-1'>
                                                                    {new Date(v.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split('at')[0]}
                                                                </span>
                                                            </span>
                                                        </p>
                                                        <p className="fs-14 mt-3 text-secondary m-0 textline_three textwrap">
                                                            <span>
                                                                <p className="m-0">Job Role & Responsibilities:</p>
                                                                <span dangerouslySetInnerHTML={{ __html: v.responsilibity.split(' ').splice(0, 10).join(' ') }}>


                                                                </span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3 d-flex align-items-center justify-content-start justify-content-md-center col">
                                                    <a className="stretched-link py-3 py-md-0" href="/Job-Detail">
                                                        <button type="button" className="fs-14 bgprimary rounded px-3 py-2 shadow-1 btn btn-primary">Apply</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div></Link>
                            ))
                        )
                    }
                </div>
                <div>

                </div>

            </div>
        </div>




    </div>;
}


export default CVCareer;
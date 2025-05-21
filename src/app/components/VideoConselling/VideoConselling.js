"use client"
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion"
import "../../globals.css";
import { useMediaQuery } from 'react-responsive';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursePageDetail, getCourse } from '../../_redux/itemSlice';
import dynamic from 'next/dynamic';
const UniversityApply=dynamic(()=>import('@/app/components/ApplyUniversity/UniversityApply'),{ssr:false})


const VideoConselling1 = () => {
    let apiUrl=process.env.NEXT_PUBLIC_API_URL;
    const [courseid, setcourseid] = useState('');
    const [specializationid, setspecializationid] = useState('');

    const z = useSelector(getCoursePageDetail);
    const courselist = (z.length == 0 || z == undefined) ? [] : z.coursepage;



    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {

            await dispatch(getCourse()).unwrap();
        }
        fetchData();

    }, [dispatch])

    console.log(courselist);

    const [specilizationlist, setspecialization] = useState([]);


    const [showfirstpage, setshowfirstpage] = useState(true);
    const [showsecondpage, setshowsecondpage] = useState(false);
    const [showthirdpage, setshowthirdpage] = useState(false);
    const [showfourthpage, setshowfourthpage] = useState(false);

    const [showfivethpage, setshowfivthpage] = useState(false);

    const [showsixthpage, setshowsixpage] = useState(false);

    const [showseventhpage, setshowseventhpage] = useState(false);

    const [showeigthpage, setshoweigthpage] = useState(false);
    const [showninththpage, setshowninthpage] = useState(false);
    const [showtenththpage, setshowtenthpage] = useState(false);
    const [showeleventhpage, setshoweleventhpage] = useState(false);

    const [categorie, setcategorie] = useState('');


    const Next1 = async (name) => {

        setcategorie(name);




        setshowfirstpage(false);
        setshowsecondpage(true);





    }
    const Next2 = async (name) => {
        setcourseid(name);




        let a = await axios.get(`${apiUrl}get-Specialization-By-Course-Id?Id=${name}`);

        setspecialization(a.data);
        console.log(a.data);
        setshowsecondpage(false);
        setshowthirdpage(true);

    }
    const Next3 = (name) => {

        setspecializationid(name);

        setshowthirdpage(false);
        setshowfourthpage(true);

    }
    const Next4 = (name) => {




        setshowfourthpage(false);
        setshowfivthpage(true)

    }
    const Next5 = (name) => {




        setshowfivthpage(false);
        setshowsixpage(true)

    }
    const Next6 = (name) => {


        setshowsixpage(false);
        setshowseventhpage(true)

    }
    const Next7 = (name) => {

        setshowseventhpage(false);
        setshoweigthpage(true)

    }
    const Next8 = (name) => {

        setshoweigthpage(false);
        setshowninthpage(true)

    }
    const Next9 = (name) => {

        setshowninthpage(false);
        setshowtenthpage(true)

    }
    const Next10 = (name) => {
        setshowtenthpage(false);
        setshoweleventhpage(true);
    }
    const [uniTalk, setuniTalk] = useState(false);


    const Next11 = async () => {
        setshoweleventhpage(false);

        setuniTalk(!uniTalk);

    };


    const isMobileExtraSmall = useMediaQuery({ query: '(max-width: 399px)' });
    const isMobileSmall = useMediaQuery({ query: '(min-width: 400px) and (max-width: 638px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 639px) and (max-width: 767px)' });

    const isTablet = useMediaQuery({ query: '(min-width:768px) and (max-width: 1023px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1024px)' });


    return <div>
        {
            showfirstpage ?
                (
                    <div className="container-fluid" id='first'>
                        <div className="row">
                            <div className="col-lg-12 Bod">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Which degree are you interested in?
                                        <p className="fw-normal fs-14 mt-2 mb-0" style={{ lineHeight: '20px' }}>



                                        </p>
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className={`grid lg:grid-cols-4 ${isTablet ? 'grid-cols-2' : ''}`}>
                            <div className="cursor-pointer position-relative" onClick={(e) => Next1("pgCourses")}>
                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                    <div className="p-hidden-accessible">
                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                    </div>
                                    <div className="p-radiobutton-box">
                                        <div className="p-radiobutton-icon"></div>
                                    </div>
                                </div>
                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                >
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2765%27%20height=%2765%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="PG Courses" src="/pg.027d30d6.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/pg.027d30d6.svg" />
                                    </span>
                                    <span className="d-inline-block mt-3 text-center fs-14">PG Courses</span>
                                </label>
                            </div>
                            <div className=" position-relative" onClick={(e) => Next1("ugCourses")}>
                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                    <div className="p-hidden-accessible">
                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                    </div>
                                    <div className="p-radiobutton-box">
                                        <div className="p-radiobutton-icon"></div>
                                    </div>
                                </div>
                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                >
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2765%27%20height=%2765%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="PG Courses" src="/ug.62cb337e.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/ug.62cb337e.svg" />
                                    </span>
                                    <span className="d-inline-block mt-3 text-center fs-14">UG Courses</span>
                                </label>
                            </div>
                            <div className="cursor-pointer position-relative" onClick={(e) => Next1("executiveEducation")}>
                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                    <div className="p-hidden-accessible">
                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                    </div>
                                    <div className="p-radiobutton-box">
                                        <div className="p-radiobutton-icon"></div>
                                    </div>
                                </div>
                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                >
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2765%27%20height=%2765%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="PG Courses" src="/executive.b2558f27.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/executive.b2558f27.svg" />
                                    </span>
                                    <span className="d-inline-block mt-3 text-center fs-14">Executive Education</span>
                                </label>
                            </div>
                            <div className="cursor-pointer position-relative" onClick={(e) => Next1("advancedDiploma")}>
                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                    <div className="p-hidden-accessible">
                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                    </div>
                                    <div className="p-radiobutton-box">
                                        <div className="p-radiobutton-icon"></div>
                                    </div>
                                </div>
                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                >
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2765%27%20height=%2765%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="PG Courses" src="/advanced.6197608d.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/advanced.6197608d.svg" />
                                    </span>
                                    <span className="d-inline-block mt-3 text-center fs-14">Advanced Diploma</span>
                                </label>
                            </div>

                        </div>
                        <div className={`grid lg:grid-cols-4   ${isTablet ? 'grid-cols-2' : ''}`}>
                            <div className={`${isLarge ? 'col-span-1' : 'hidden'}`}></div>
                            <div className=" position-relative" onClick={(e) => Next1("Certification")}>
                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                    <div className="p-hidden-accessible">
                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                    </div>
                                    <div className="p-radiobutton-box">
                                        <div className="p-radiobutton-icon"></div>
                                    </div>
                                </div>
                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                >
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2765%27%20height=%2765%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="PG Courses" src="/skill.0223a1c3.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/skill.0223a1c3.svg" />
                                    </span>
                                    <span className="d-inline-block mt-3 text-center fs-14">Certification</span>
                                </label>
                            </div>

                            <div className="cursor-pointer position-relative" onClick={(e) => Next1("Diploma")}>
                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                    <div className="p-hidden-accessible">
                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                    </div>
                                    <div className="p-radiobutton-box">
                                        <div className="p-radiobutton-icon"></div>
                                    </div>
                                </div>
                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                >
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2765%27%20height=%2765%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="PG Courses" src="/study.9cd08b5b.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/study.9cd08b5b.svg" />
                                    </span>
                                    <span className="d-inline-block mt-3 text-center fs-14">Diploma</span>
                                </label>
                            </div>
                        </div>
                        <center>
                            <button
                                aria-label="Next"
                                type="submit"
                                id="submit-btn-now"
                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                            >
                                <span className="p-button-label p-c">Next</span>
                            </button>
                        </center>
                        {/* <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 ">

                                        </div>
                                        <div className="col-lg-3">

                                        </div>
                                        <div className="col-lg-3">

                                        </div>
                                        <div className="col-lg-3">

                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-lg-3 MXLG">
                                            
                                        </div>
                                        <div className="col-lg-3 MXLG1">
                                           
                                        </div>

                                    </div>
                                    <div className="row mt-5">
                                        
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ) : ''
        }
        {
            showsecondpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 Bod">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Which Course you like to pursue

                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-4' : ''} ${isMobile ? 'grid-cols-3' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-6' : ''}`}>
                                        {
                                            courselist.map((i, j) =>
                                            (
                                                i.categorie == categorie ?
                                                    (
                                                        <div key={j} >
                                                            <div className="cursor-pointer position-relative" onClick={(e) => Next2(i.id)}>
                                                                <div className="p-radio  button p-component">
                                                                    <div className="p-hidden-accessible">
                                                                        <input type="radio" />
                                                                    </div>
                                                                    <div className="p-radiobutton-box">
                                                                        <div className="p-radiobutton-icon"></div>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                                >
                                                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2765%27%20height=%2765%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                                                        </span>
                                                                        <img alt="PG Courses" src="/mcom (1).svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/mcom (1).svg" />
                                                                    </span>
                                                                    <div className="coursetitle" style={{ height: '40px' }}>
                                                                        <p className='text-center text-[10px] md:text-xs md:font-normal font-medium medium-text' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                                            {i.course}
                                                                        </p>
                                                                    </div>

                                                                </label>
                                                            </div>
                                                        </div>
                                                    ) : ''
                                            ))
                                        }







                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showthirdpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Have a particular specialization in mind?

                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-4' : ''} ${isMobile ? 'grid-cols-3' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-6' : ''}`}>
                                        {
                                            specilizationlist.map((v, k) =>
                                            (
                                                <div key={k} >
                                                    <div className="cursor-pointer position-relative" onClick={(e) => Next3(v.id)}>
                                                        <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                            <div className="p-hidden-accessible">
                                                                <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                            </div>
                                                            <div className="p-radiobutton-box">
                                                                <div className="p-radiobutton-icon"></div>
                                                            </div>
                                                        </div>
                                                        <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                        >


                                                            <span className="d-inline-block text-wrap text-center fs-14">{v.specialization}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))
                                        }







                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showfourthpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Are you Currently Working?
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-2' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-6' : ''}`}>
                                        <div >

                                        </div>
                                        <div >

                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next4("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Yes</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next4("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>

                                        </div>

                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }

        {
            showfivethpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        How many Study Hours you can give on the weekly basis?
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-3' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-6' : ''}`}>
                                        <div className={`${isLarge ? 'col-span-1' : 'hidden'}`}>

                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next5("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">2-4 Hours</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next5("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">4-8 Hours</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next5("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">8-16 Hours</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next5("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="p-4 QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">16 Hours+</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className={`${isLarge ? 'col-span-1' : 'hidden'}`}>

                                        </div>

                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showsixthpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Choose the total course fees you have in mind!
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-3' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-5 ' : ''}`}>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next6("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Less than 70 Thousand</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next6("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Less than 1 Lakh</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next6("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">1 Lakh to 2.5 Lakh</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next6("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">2.5 Lakh to 4.2 Lakh</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next6("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="p-4 QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">4.2 Lakh+</span>
                                                </label>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showseventhpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Convert Fees into Easy EMIs?
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-2' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-6' : ''}`}>

                                        <div >

                                        </div>
                                        <div >

                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next7("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Yes</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next7("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >

                                        </div>
                                        <div >

                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showeigthpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        What is your Salary Package ?
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-2' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-4 mx-12' : ''}`}>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next8("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Not Working</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" >
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Less than 3 Lac</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next8("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">3 Lakh to 6 Lakh</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next8("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="p-4 QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Above 6 Lakh</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showninththpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Your Highest Qualification ?
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-2' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-4 mx-12' : ''}`}>


                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next9("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Postgraduate</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next9("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">College Graduate</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next9("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="p-4 QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Completed 12th</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next9("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Completed 10th</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showtenththpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Percentage scored in last qualification?
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-2' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-3 mx-12' : ''}`}>



                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next10("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Below 50%</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next10("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="p-4 QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">50% to 80%</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next10("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ p-4 d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Above 80%</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        {
            showeleventhpage ?
                (
                    <div className="container-fluid" id='second'>
                        <div className="row">
                            <div className="col-lg-12 ">

                                <p className="m-0 text-center text-white fs-12 py-2">
                                    <svg
                                        className='mr-1 mb-1'

                                        style={{ display: 'inline-block' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        fontSize="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                    </svg>
                                    Your best match is just 2 minutes away!
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <center>
                                    <h1 className=" text-dark text-center  fw-bold h3 seotag">
                                        Looking for Universities through which you can get Placements/Salary/Hike/Promotions?
                                    </h1>
                                </center>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className={`grid ${isTablet ? 'grid-cols-2' : ''} ${isMobile ? 'grid-cols-2' : ''} ${isMobileSmall ? 'grid-cols-2' : ''} ${isMobileExtraSmall ? 'grid-cols-1' : ''} ${isLarge ? 'grid-cols-6' : ''}`}>

                                        <div >

                                        </div>
                                        <div >

                                        </div>
                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next11("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">Yes</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="cursor-pointer position-relative" onClick={(e) => Next11("PgCourse")}>
                                                <div id="xKAgo5SJBQP" className="p-radio  button p-component">
                                                    <div className="p-hidden-accessible">
                                                        <input id="PG Courses-xKAgo5SJBQP" type="radio" name="domain_id" />
                                                    </div>
                                                    <div className="p-radiobutton-box">
                                                        <div className="p-radiobutton-icon"></div>
                                                    </div>
                                                </div>
                                                <label htmlFor="PG Courses-xKAgo5SJBQP" className="QuestionForm_otta_degree__1mufQ d-flex flex-column justify-content-center m-3 px-3"

                                                >


                                                    <span className="d-inline-block  text-center fs-14">No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div >

                                        </div>
                                        <div >

                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <center>
                                            <button
                                                aria-label="Next"
                                                type="submit"
                                                id="submit-btn-now"
                                                className="p-button mt-5 p-component QuestionForm_nextBtn__NeFl9 py-2 py-sm-2 col col-sm-3"
                                            >
                                                <span className="p-button-label p-c">Next</span>
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
        }
        <AnimatePresence>{uniTalk ? <UniversityApply close={() => setuniTalk(!uniTalk)} uniId={"1"} /> : ""}</AnimatePresence>

    </div>
}



export default VideoConselling1;
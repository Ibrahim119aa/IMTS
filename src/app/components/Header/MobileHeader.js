"use client"
import React, { useEffect, useState } from 'react';
import { useRouter as useNavigate } from "next/navigation";
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import AuthPopUp from './AuthPopUp';

import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { getUniversitySpecializationlistDetail, getHomePageDetail, getSpecializationList, getSpecializationlistDetail, getUniversityListBySpecialization } from '../../_redux/itemSlice';
const MobileHeader = ({ close }) => {

    const n = useNavigate();
    const Redirection = (name) => {
        close();
        n.push(name);

    }
    const Redirect = (name) => {
        // n("Video-Conselling");
        // close();

        // console.log(name);
    }

    const a = useSelector(getHomePageDetail);
    const courselist = (a === undefined || a.length == 0) ? [] : a.universitypage.course;

    const courselisting = (a === undefined || a.length == 0) ? [] : a.course;

    const [isfirstlist, setisfirstlist] = useState(true);

    const [firstcoursename, setfirstcoursename] = useState('');
    const [firstcourseId, setfirstcourseId] = useState('');
    const [isSecondlist, setisSecondlist] = useState(false);

    const firstmethod = (name, id) => {
        setfirstcoursename(name);


        setfirstcourseId(id);
        setisfirstlist(!isfirstlist);
        setisSecondlist(!isSecondlist);
    }

    const [showLoginPopUp, setShowLoginPopUp] = useState(false);

    const [secondcoursename, setsecondcoursename] = useState('');
    const [secondcourseId, setsecondcourseId] = useState('');
    const [isfourthlist, setisfourthlist] = useState(false);



    const [specializationname, setspecializationname] = useState('');
    const [specializationId, setspecializationId] = useState('');
    const [isfivthlist, setfivthlist] = useState(false);


    const secondmethod = (name, id) => {
        setsecondcoursename(name);


        setsecondcourseId(id);
        setisthirdlist(!isthirdlist);

        setisfourthlist(!isfourthlist);

    }


    const thirdmethod = (name, id) => {
        setspecializationname(name);

        setspecializationId(id);
        setisfourthlist(!isfourthlist);
        setfivthlist(!isfivthlist);

    }
    const [isthirdlist, setisthirdlist] = useState(false);


    const data = [
        {
            id: "pgCourses",
            name: "PG Courses",
        },
        {
            id: "ugCourses",
            name: "UG Courses",
        },
        {
            id: "executiveEducation",
            name: "Executive Eductaion",
            addOns: "Working Professionals & CXOs",
        },


        {
            id: "advancedDiploma",
            name: "Advanced Diploma",
        }
    ]

    const dispatch = useDispatch();
    const specializationlist = useSelector(getSpecializationlistDetail);
    const universityspecialization = useSelector(getUniversitySpecializationlistDetail);


    useEffect(() => {
        if (specializationlist.length == 0 || specializationlist == undefined) {
            dispatch(getSpecializationList());
        }
        if (universityspecialization.length == 0 || universityspecialization == undefined) {
            dispatch(getUniversityListBySpecialization());

        }
    }, [dispatch]);







    const SetKrYr = () => {


        setShowLoginPopUp(!showLoginPopUp);


    }


    return <section className='fixed   left-0 top-0 h-full min-h-screen w-full bg-black/80 flex justify-center items-center z-30' style={{ overflowY: 'hidden', overflowX: 'hidden' }}>

        <motion.div initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='rounded-lg  bg-white   requires-no-scroll ' >

            <div className="p-slidemenu  p-component p-slidemenu-overlay MobileMenu_mobilemenu_dialog__Iz4om w-100 p-connected-overlay-enter-done" style={{ zIndex: '100px', transformOrigin: 'center bottom', top: 0, left: 0, overflowY: 'scroll' }}>
                <div className="p-slidemenu-wrapper h-full" style={{ height: '40rem' }}>
                    <div className="p-slidemenu-content">
                        {
                            isfirstlist ?
                                (
                                    <ul className="p-slidemenu-rootlist p-active-submenu ull" >
                                        <li className="p-menuitem">
                                            <a className="p-menuitem-link">
                                                <span className="p-menuitem-text">
                                                    <div className="d-flex align-items-center justify-content-between w-100 sticky-top ">
                                                        <div>
                                                            <span className="fs-13">
                                                                <p className="m-0 fs-12">#IMTS</p>
                                                            </span>
                                                        </div>
                                                        <div className="d-flex gap-3 align-items-center">

                                                            <div onClick={() => close()}>
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="currentColor"
                                                                    strokeWidth="0"
                                                                    viewBox="0 0 16 16"
                                                                    fontSize="32"
                                                                    className="shadow-sm rounded"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">Explore More</span>
                                            </a>
                                        </li>
                                        {
                                            data.map((b, k) =>
                                            (
                                                <li key={k} className="p-menuitem" onClick={(e) => {
                                                    firstmethod(b.name, b.id);
                                                }
                                                }>
                                                    <a className="p-menuitem-link"><span className="p-menuitem-text">{b.name}</span>

                                                        <i className="fas fa-chevron-right pt-2"></i>
                                                    </a>
                                                </li>
                                            ))
                                        }



                                        <li className="p-menuitem" onClick={(e) => {
                                            setisthirdlist(!isthirdlist);
                                            setisfirstlist(!isfirstlist);

                                        }
                                        }>
                                            <a className="p-menuitem-link"><span className="p-menuitem-text">
                                                Top University
                                            </span>

                                                <i className="fas fa-chevron-right pt-2"></i>
                                            </a>
                                        </li>







                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">More Resources</span>
                                            </a>
                                        </li>
                                        <li className="p-menuitem">

                                            <p onClick={() => Redirection("/Video-Conselling")} className="p-menuitem-link"><span className="p-menuitem-text">
                                                Video Counselling
                                            </span>

                                                <i className="fas fa-chevron-right pt-2"></i>
                                            </p>
                                        </li>
                                        <li className="p-menuitem">
                                            <p onClick={() => Redirection("/Verify-University")} className="p-menuitem-link"><span className="p-menuitem-text">
                                                Verify University
                                            </span>

                                                <i className="fas fa-chevron-right pt-2"></i>
                                            </p>
                                        </li>




                                        <li className="p-menuitem">
                                            <p onClick={() => Redirection("/experts")} className="p-menuitem-link"><span className="p-menuitem-text">
                                                What it  Become  Experts!
                                            </span>

                                                <i className="fas fa-chevron-right pt-2"></i>
                                            </p>
                                        </li>
                                        <li className="p-menuitem">
                                            <p onClick={() => Redirection("/blog")} className="p-menuitem-link"><span className="p-menuitem-text">
                                                Blogs & Web Stories
                                            </span>

                                                <i className="fas fa-chevron-right pt-2"></i>
                                            </p>
                                        </li>
                                        <li className="p-menuitem">
                                            <p onClick={() => Redirection("/list-yourself")} className="p-menuitem-link"><span className="p-menuitem-text">
                                                List Your University
                                            </span>

                                                <i className="fas fa-chevron-right pt-2"></i>
                                            </p>
                                        </li>
                                        <li className="p-menuitem">
                                            <p onClick={() => Redirection("/Career")} className="p-menuitem-link"><span className="p-menuitem-text">
                                                Career
                                            </span>

                                                <i className="fas fa-chevron-right pt-2"></i>
                                            </p>
                                        </li>

                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">Account</span>
                                            </a>
                                        </li>
                                        <li className="p-menuitem" onClick={(p) => SetKrYr()}>
                                            <a className="p-menuitem-link">
                                                <span className="p-menuitem-text">
                                                    <div>
                                                        <span className="m-0 rounded py-2 px-3 bg-grey">
                                                            <svg stroke="currentColor" fill="currentColor" className='d-inline-block' stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></svg> Sign In</span></div></span></a></li>
                                        <AnimatePresence>{showLoginPopUp ? <AuthPopUp close={() => setShowLoginPopUp(!showLoginPopUp)} name="Education Dunia" logo='IMTS.png' /> : ""}</AnimatePresence>


                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">Find Us</span>
                                            </a>
                                        </li>
                                        {/* <li className="p-menuitem">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                version="1"
                                                                viewBox="0 0 48 48"
                                                                enableBackground="new 0 0 48 48"
                                                                fontSize="18"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fill="#2196F3"
                                                                    d="M26.4,33.9c0,0,4-2.6,4.8-3c0.8-0.4,1.7-0.6,2.2-0.2c0.8,0.5,7.5,4.9,8.1,5.3c0.6,0.4,0.8,1.5,0.1,2.6 c-0.8,1.1-4.3,5.5-5.8,5.4c-1.5,0-8.4,0.4-20.3-11.4C3.6,20.7,4,13.8,4,12.3c0-1.5,4.3-5.1,5.4-5.8c1.1-0.8,2.2-0.5,2.6,0.1 c0.4,0.6,4.8,7.3,5.3,8.1c0.3,0.5,0.2,1.4-0.2,2.2c-0.4,0.8-3,4.8-3,4.8s0.7,2.8,5,7.2C23.5,33.2,26.4,33.9,26.4,33.9z"
                                                                ></path>
                                                                <g fill="#3F51B5">
                                                                    <path
                                                                        d="M35,9H25v4h10c1.1,0,2,0.9,2,2v10h4V15C41,11.7,38.3,9,35,9z"
                                                                    ></path>
                                                                    <polygon
                                                                        points="28,16 21.3,11 28,6"
                                                                    ></polygon>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span className="me-1">New Student : 18004205757</span>
                                                    </div>
                                                </span>
                                            </a>
                                        </li> */}
                                        <li className="p-menuitem">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                fontSize="20"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                        <span className="me-1">Visit Us (10 AM to 7 PM)</span>
                                                    </div>
                                                </span>
                                            </a>
                                        </li>



                                    </ul>
                                ) : ''
                        }
                        {
                            isSecondlist ?
                                (
                                    <ul className="p-slidemenu-rootlist p-active-submenu ull" >
                                        <li className="p-menuitem">
                                            <a href="#" className="p-menuitem-link">


                                                <div className="shadow-1 px-2 py-2 rounded"

                                                    onClick={() => {
                                                        setisSecondlist(!isSecondlist);
                                                        setisfirstlist(!isfirstlist);
                                                    }
                                                    }
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 16 16"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                        ></path>
                                                    </svg>

                                                </div>
                                                <span className="fs-16">
                                                    <p className="m-0 fs-16 font-bold text-dark mx-2">#IMTS</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">{firstcoursename}  </span>
                                            </a>
                                        </li>
                                        {
                                            courselisting && (
                                                courselisting.map((b, k) =>
                                                (


                                                    b.categorie == firstcourseId ?
                                                        (
                                                            <li key={k} className="p-menuitem" >
                                                                <a href={`/courses/${b.urlname}`} className="p-menuitem-link"><span className="p-menuitem-text">{b.course}</span>

                                                                    <i className="fas fa-chevron-right pt-2"></i>
                                                                </a>
                                                            </li>
                                                        ) : ''
                                                )
                                                )
                                            )
                                        }



                                    </ul>
                                ) : ''
                        }
                        {
                            isthirdlist ?
                                (
                                    <ul className="p-slidemenu-rootlist p-active-submenu ull" >
                                        <li className="p-menuitem">
                                            <a href="#" className="p-menuitem-link">


                                                <div className="shadow-1 px-2 py-2 rounded"

                                                    onClick={() => {

                                                        setisthirdlist(!isthirdlist)
                                                        setisfirstlist(!isfirstlist);
                                                    }
                                                    }
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 16 16"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                        ></path>
                                                    </svg>

                                                </div>
                                                <span className="fs-16">
                                                    <p className="m-0 fs-16 font-bold text-dark mx-2">#IMTS</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">Top University Courses</span>
                                            </a>
                                        </li>
                                        {
                                            courselist &&
                                            (
                                                courselist.map((e, k) =>
                                                (
                                                    <li key={k} className="p-menuitem" onClick={(v) => secondmethod(e.courename, e.id)}>
                                                        <a className="p-menuitem-link"><span className="p-menuitem-text">
                                                            {e.courename}
                                                        </span>

                                                            <i className="fas fa-chevron-right pt-2"></i>
                                                        </a>
                                                    </li>
                                                ))
                                            )
                                        }





















                                    </ul>
                                ) : ''
                        }
                        {
                            isfourthlist ?
                                (
                                    <ul className="p-slidemenu-rootlist p-active-submenu ull" >
                                        <li className="p-menuitem">
                                            <a href="#" className="p-menuitem-link">


                                                <div className="shadow-1 px-2 py-2 rounded"

                                                    onClick={() => {
                                                        setisthirdlist(!isthirdlist);
                                                        setisfourthlist(!isfourthlist);
                                                    }
                                                    }
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 16 16"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                        ></path>
                                                    </svg>

                                                </div>
                                                <span className="fs-16">
                                                    <p className="m-0 fs-16 font-bold text-dark mx-2">#IMTS</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">{secondcoursename}  Specialization</span>
                                            </a>
                                        </li>
                                        {
                                            specializationlist &&
                                            (
                                                specializationlist.map((q, k) =>
                                                (
                                                    q.courseid == secondcourseId ?
                                                        (
                                                            <li key={k} className="p-menuitem" onClick={(v) => thirdmethod(q.specialization, q.id)}>
                                                                <a className="p-menuitem-link"><span className="p-menuitem-text">
                                                                    {q.specialization}

                                                                </span>

                                                                    <i className="fas fa-chevron-right pt-2"></i>
                                                                </a>
                                                            </li>
                                                        ) : ''
                                                ))
                                            )
                                        }

                                    </ul>
                                ) : ''
                        }



                        {
                            isfivthlist ?
                                (
                                    <ul className="p-slidemenu-rootlist p-active-submenu ull" >
                                        <li className="p-menuitem">
                                            <a href="#" className="p-menuitem-link">


                                                <div className="shadow-1 px-2 py-2 rounded"

                                                    onClick={() => {

                                                        setisfourthlist(!isfourthlist);
                                                        setfivthlist(!isfivthlist);
                                                    }
                                                    }
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 16 16"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                        ></path>
                                                    </svg>

                                                </div>
                                                <span className="fs-16">
                                                    <p className="m-0 fs-16 font-bold text-dark mx-2">#IMTS</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-menuitem mobile_label_tag">
                                            <a href="#" className="p-menuitem-link">
                                                <span className="p-menuitem-text">Universities For {specializationname}  </span>
                                            </a>
                                        </li>
                                        {
                                            universityspecialization &&
                                            (
                                                universityspecialization.map((q, k) =>
                                                (
                                                    q.spid == specializationId ?
                                                        (
                                                            <li key={k} className="p-menuitem" onClick={(v) => thirdmethod(q.specialization, q.id)}>
                                                                <a href={`/universities/${q.urlname}`} className="p-menuitem-link"><span className="p-menuitem-text">
                                                                    {q.uname}

                                                                </span>

                                                                    <i className="fas fa-chevron-right pt-2"></i>
                                                                </a>
                                                            </li>
                                                        ) : ''
                                                ))
                                            )
                                        }

                                    </ul>
                                ) : ''
                        }

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}



export default MobileHeader;
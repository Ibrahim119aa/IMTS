"use client"
// import '@/app/gloabals.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { format } from 'date-fns';
import { AnimatePresence } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { getHomePage, getHomePage1, getHomePageDetail, setAuthorId } from '../../_redux/itemSlice';

import Image from 'next/image';
const UniversityApply = dynamic(() => import('@/app/components/ApplyUniversity/UniversityApply'), { ssr: false })

const Course = ({ Ids }) => {
    let apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const Id = Ids;

    const [c, setc] = useState([]);
    const [temp, settemp] = useState([]);

    const [stringArray, setStringArray] = useState([]);

    let x = Id.split('&')[0];
    let y = (Id.split('&')[1]);
    const extractHtmlContentBetweenHeadings = (htmlContent) => {

        console.log("THis is Extract");
        console.log(htmlContent);
        let isContent = false;
        let a = ``;

        htmlContent.forEach(element => {
            if (element.urlname == Id.split('&')[0]) {
                a = element.detailcoursedescription;
                isContent = true;

            }
        });

        if (isContent) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(a, 'text/html');
            const headings = doc.querySelectorAll('h1, h2, h3, h4, h5,h6');
            const newArray = [];

            headings.forEach((heading) => {
                let content = '';


                for (let node = heading.nextSibling; node && !['H1', 'H2', 'H3', 'H4', 'H5'].includes(node.tagName); node = node.nextSibling) {
                    content += node.outerHTML || node.textContent;
                }


                content = heading.outerHTML + content;


                newArray.push(content);



                setStringArray(newArray);

            });





        }
        return stringArray;
    };






    const [universityList, setuniversityList] = useState([]);
    const [specializationlist, setspecializationlist] = useState([]);

    const [subjectlist, setsubjectlist] = useState([]);
    const subjectsBySemester = {
        1: [],
        2: []
    };
    const [Year, setYear] = useState('');

    const [booklist, setbooklist] = useState([]);

    // const a = y==undefined?useSelector(getHomePageDetail):useSelector(getHomePageDetail1);
    const a = useSelector(getHomePageDetail);

    const courseDetail = a === undefined ? [] : a.coursepage;
    const auth = a === undefined ? [] : a.courseauthor;
    const coursespecialization = a === undefined ? [] : a.coursespecialization;
    const book = a === undefined ? [] : a.coursebook;
    const subj = a === undefined ? [] : a.coursesubject;








    const [author, setauthor] = useState([]);



    const MyData = (data) => {
        const sp = [];
        const b = [];
        const sub = [];
        console.log(Id.split('&')[0]);
        data.forEach((e) => {
            if (e.urlname == Id.split('&')[0]) {
                auth.forEach((f) => {

                    if (f.courseid == e.id) {
                        setauthor([f]);


                    }
                })
                coursespecialization.forEach((g) => {
                    if (g.courename == e.courename) {
                        sp.push(g);
                    }
                })
                book.forEach((h) => {
                    if (h.courename == e.courename) {
                        b.push(h);

                    }
                })
                subj.forEach((i) => {
                    if (i.courename == e.courename) {
                        sub.push(i);
                    }
                })

            }
        })
        setspecializationlist(sp);
        setbooklist(b);
        setsubjectlist(sub);


    }



    const dispatch = useDispatch();
    useEffect(() => {


        if (Id.split('&').length == 1) {


            if (a == undefined || a.length == 0) {
                dispatch(getHomePage());
            }





        }
        else {
            dispatch(getHomePage1());

        }

        scrollToSection('d');

    }, [dispatch]);

    useEffect(() => {
        if (!(courseDetail === undefined)) {
            extractHtmlContentBetweenHeadings(courseDetail);
            MyData(courseDetail);
            console.log("This is COurse");
            console.log(courseDetail);



        }
    }, [courseDetail])


    const isTablet = "dfsdf";


    const scrollToSection = (sectionId) => {


        const section = document.getElementById(sectionId);


        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [ApplyUniversity, setApplyUniversity] = useState(false);


    useEffect(() => {

        const timer = setTimeout(() => {
            setApplyUniversity(!ApplyUniversity);

        }, 30000);

        return () => clearTimeout(timer);
    }, []);
    const [scrollPercentage, setScrollPercentage] = useState(0);


    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const totalScroll = documentHeight - windowHeight;
        const scrollPercentage = (scrollTop / totalScroll) * 100;

        setScrollPercentage(scrollPercentage);
    };
    console.log(courseDetail);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div id='d' >
            <AnimatePresence>{ApplyUniversity ? <UniversityApply close={() => setApplyUniversity(!ApplyUniversity)} uniId={"0"} /> : ""}</AnimatePresence>

            {
                courseDetail && (
                    courseDetail.map((e, x) =>
                    (
                        e.urlname == Id.split('&')[0] ?
                            (
                                <div key={x}>
                                    <div className='lg:gap-8 lg:grid lg:pt-5 lg:pl-7 lg:pr-10 lg:pb-2 tablet:grid tablet:grid-cols-4 tablet:pl-3 tablet:pt-4 tablet:pb-3 tablet:pr-3 tablet:gap-5 lg:grid-cols-4
                                    mobile:grid mobile:grid-cols-4 mobile:pl-4 mobile:pt-4 mobile:pb-3 mobile:pr-3 mobile:gap-4
                                     mobile-small:grid mobile-small:grid-cols-4 mobile-small:pl-4 mobile-small:pt-4 mobile-small:pb-3 mobile-small:pr-2  mobile-small:gap-4
                                       mobile-extra-small:grid mobile-extra-small:grid-cols-4 mobile-extra-small:pl-4 mobile-extra-small:pt-4 mobile-extra-small:pr-2 mobile-extra-small:pb-3  mobile-extra-small:gap-4
                                    '>

                                        <div className='lg:col-span-1 tablet:col-span-1 mobile:col-span-1 mobile-extra-small:col-span-3 mobile-small:col-span-3'>
                                            {
                                                e.image != null ?
                                                    (
                                                        <Image width={350} height={250} alt={`${e.image}`} priority src={`${apiUrl}images/${e.image}`} className='rounded lg:h-48' />
                                                    ) : <Image width={350} height={250} priority alt='samplecourse.png' src={`/samplecourse.png`} className='rounded lg:h-48' />
                                            }
                                        </div>
                                        <div className='lg:col-span-3 tablet:col-span-3 mobile:col-span-3 mobile-small:col-span-4 mobile-extra-small:col-span-4'>
                                            <div className='flex lg:pt-4 table:pt-3 mobile:pt-1 flex-col'>
                                                <div>
                                                    <h1 className='font-bold text-[1.7rem] text-[#212529]'>
                                                        {e.courename}
                                                    </h1>
                                                </div>
                                                <div>
                                                    <span className='text-justify  text-[0.9rem] text-[#212529] '>
                                                        {e.coursedescription}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid lg:pr-8  mobile:my-5 mobile-small:my-5 mobile-extra-small:my-5 lg:pb-6 lg:w-full grid-cols-4 gap-4 ">

                                        <div className="lg:col-span-1 whitespace-nowrap tablet:col-span-4 mobile-small:col-span-4 mobile-extra-small:col-span-4 mobile:col-span-4 lg:pl-9 lg:pt-4 pr-1 sticky top-2 lg:h-[43rem] lg:border-r lg:border-[rgba(43,42,41,0.1)] lg:bg-[rgba(228,231,233,0.2)]">
                                            <h2 className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden font-bold text-[1.4rem] mx-3 text-lg">Table Of Contents</h2>


                                            <div className="tablet:m-3 tablet:border-r-4 tablet:border-r-[#1c4980] tablet:border-l-4 tablet:border-l-[#f75d34] tablet:rounded-lg  tablet:overflow-x-auto lg:overflow-visible   
                                            mobile:m-2 mobile:border-r-4 mobile:border-r-[#1c4980] mobile:border-l-4 mobile:border-l-[#f75d34] mobile:rounded-lg  mobile:overflow-x-auto 
                                             mobile-small:m-2 mobile-small:border-r-4 mobile-small:border-r-[#1c4980] mobile-small:border-l-4 mobile-small:border-l-[#f75d34] mobile-small:rounded-lg  mobile-small:overflow-x-auto 
                                              mobile-extra-small:m-2 mobile-extra-small:border-r-4 mobile-extra-small:border-r-[#1c4980] mobile-extra-small:border-l-4 mobile-extra-small:border-l-[#f75d34] mobile-extra-small:rounded-lg  mobile-extra-small:overflow-x-auto 
                                            ">
                                                <div className="flex lg:flex-col tablet:flex-row lg:mt-3 lg:pr-2 tablet:w-[100%] mobile:w-[100%] mobile-small:w-[100%] mobile-extra-small:w-[100%]">

                                                    {(() => {
                                                        let a = 0;
                                                        const toch1Elements = e.toch1 != null ? e.toch1.map((p, q) => (
                                                            <a
                                                                key={q}
                                                                onClick={() => scrollToSection(`section-${q}`)}
                                                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] lg:hover:bg-[#0d6efd]"
                                                            >
                                                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                                                <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                                                            </a>
                                                        )) : '';

                                                        const toch2Elements = e.toch2 != null ? e.toch2.map((p, q) => (
                                                            <a
                                                                key={q}
                                                                onClick={() => scrollToSection(`section-${q}`)}
                                                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                                                            >
                                                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                                                <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                                                            </a>

                                                        )) : '';

                                                        const toch3Elements = e.toch3 != null ? e.toch3.map((p, q) => (
                                                            <a
                                                                key={q}
                                                                onClick={() => scrollToSection(`section-${q}`)}
                                                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                                                            >
                                                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                                                <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                                                            </a>
                                                        )) : '';

                                                        const toch4Elements = e.toch4 != null ? e.toch4.map((p, q) => (
                                                            <a
                                                                key={q}
                                                                onClick={() => scrollToSection(`section-${q}`)}
                                                                className="flex flex-nowrap align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] tablet:p-4 mobile:p-4 mobile-small:p-4 mobile-extra-small:p-3  lg:pt-3 lg:pb-3 lg:pr-3 lg:pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                                                            >
                                                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                                                <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                                                            </a>
                                                        )) : '';

                                                        const toch5Elements = e.toch5 != null ? e.toch5.map((p, q) => (
                                                            <a
                                                                key={q}
                                                                onClick={() => scrollToSection(`section-${q}`)}
                                                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                                                            >
                                                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                                                <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                                                            </a>
                                                        )) : '';

                                                        return [
                                                            ...toch1Elements,
                                                            ...toch2Elements,
                                                            ...toch3Elements,
                                                            ...toch4Elements,
                                                            ...toch5Elements
                                                        ];
                                                    })()}
                                                </div>
                                            </div>
                                        </div>


                                        <div className="lg:col-span-3 tablet:col-span-4 mobile-small:col-span-4 mobile-extra-small:col-span-4 mobile:col-span-4 tablet:px-3 mobile:px-2 mobile-small:px-2 mobile-extra-small:px-2  lg:pb-2 lg:px-4 lg:pr-4 lg:border lg:border-[#a0a3a7] rounded-[6px]">
                                            <div className='tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden  border border-[#0056d2] mb-0 p-3 w-full  rounded relative -top-10   bg-white'>
                                                <div className='lg:grid grid-cols-3 mx-40'>
                                                    <div >
                                                        <div className='flex flex-col '>
                                                            <b className=" fs-12 mb-2 d-flex text-dark justify-content-between flex-wrap gap-2 mt-2">
                                                                <h6 className="h1color font-bold">Course Mode</h6></b>
                                                            <h6 className="h2color font-semibold mx-2 fs-13">{e.mode}</h6>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col'>
                                                            <b className=" fs-12 mb-2 d-flex text-dark justify-content-between flex-wrap gap-2 mt-2">
                                                                <h6 className="h1color font-bold">Duration</h6></b>
                                                            <h6 className="h2color font-semibold mx-0 fs-13">{e.noofmonth}</h6>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col'>
                                                            <b className=" fs-12 mb-2 d-flex text-dark justify-content-between flex-wrap gap-2 mt-2">
                                                                <h6 className=" h1color font-bold">Elligibility</h6></b>
                                                            <h6 className="h2color font-semibold mx-0 fs-13">After 12th</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border border-[#f8f8f8] lg:-mt-4  rounded-[2rem] px-4 pt-3 pb-3'>
                                                {
                                                    author.map((en, i) =>
                                                    (
                                                        <Link key={i} href={`/Author/${en.name}`} onClick={() => {
                                                            dispatch(setAuthorId(en.id))
                                                        }
                                                        } >

                                                            <div key={i} className='grid  grid-cols-12 mobile-extra-small:gap-3'>
                                                                <div className='col-span-1 mobile:col-span-2 mobile-small:col-span-2 mobile-extra-small:col-span-2'>
                                                                    <Image width={50} height={50} alt={en.name} src={`${apiUrl}images/${en.profile}`} className='rounded-[50%]' />
                                                                </div>
                                                                <div className='col-span-11 mobile:col-span-10  mobile:-mx-8 mobile-small:col-span-10 mobile-extra-small:col-span-9'>
                                                                    <div className='flex gap-1 flex-col'>
                                                                        <div className='flex flex-row'>
                                                                            <h6 className="text-[1.2rem] h1color font-bold">{en.name}  </h6>
                                                                        </div>
                                                                        <div className='flex flex-row'>
                                                                            <h6 className="font-semibold h2color">
                                                                                {en.designation}

                                                                            </h6>
                                                                        </div>
                                                                        <div className='flex flex-row'>
                                                                            <div className='flex'>
                                                                                <a className='text-[#316FF6]' target='_blank' href={en.fb}> <i className="fa-brands fa-facebook"></i></a>
                                                                                <a className='text-[#0077B5]' target='_blank' href={en.linkedin}>
                                                                                    <i className=" fa-brands fa-linkedin ml-3" aria-hidden="true"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className='flex flex-row -mt-1'>
                                                                            <h6 className='text-[#212529] font-medium text-[0.8rem]' >
                                                                                Update on
                                                                                &nbsp;

                                                                                {
                                                                                    e.last_modified == null ?
                                                                                        (
                                                                                            format(new Date(e.added_date), 'dd MMM yyyy')
                                                                                        ) :
                                                                                        (
                                                                                            format(new Date(e.last_modified), 'dd MMM yyyy')
                                                                                        )

                                                                                }


                                                                            </h6>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                            <div className='grid grid-cols-1 my-3'>
                                                <div className={` C Cour`}>
                                                    {
                                                        stringArray.map((p, q) =>
                                                        (
                                                            <div
                                                                key={q}
                                                                dangerouslySetInnerHTML={{ __html: p }}

                                                                id={`section-${q}`}
                                                            />
                                                        ))
                                                    }
                                                </div>
                                            </div>




                                        </div>



                                    </div>




                                </div >
                            ) : ''
                    ))
                )
            }
        </div >


    )
}

export default Course;
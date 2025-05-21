"use client";

import { useEffect, useState } from "react"
import Link from 'next/link';
import { useRouter as useNavigate } from "next/navigation";
import { motion } from "framer-motion"
import { apiUrl } from "../utils/api";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getHomePage, getHomePageDetail } from "../../_redux/itemSlice";
import Image from "next/image";


const ExplorePrograms = ({ close }) => {
    const [active, setActive] = useState("pgCourses")
    const a = useSelector(getHomePageDetail);
    const courselist = a == undefined ? [] : a.course;
    const h = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            if (a === undefined || a.length == 0) {
             

                await dispatch(getHomePage()).unwrap();
            }

        }
        fetchData();

    }, []);
    console.log(courselist);



    return (
        <div className='min-h-screen Exp h-full bg-black/50 w-full border-t  border-t-gray-200 z-1000'>
            <motion.div initial={{ y: -800 }} animate={{ y: 0 }} exit={{ y: -800 }} transition={{ duration: 0.5 }} className=' w-full flex justify-center bg-white'>
                <div className='w-full max-w-[1320px] h-[75vh] py-4   requires-no-scroll grid grid-cols-5 '>

                    <div className='w-full flex col-span-1'>
                        <div className=' px-4 flex flex-col gap-2'>
                            <h4 className='text-[#0056D2] text-base font-normal'>Browse by Domains</h4>
                            <button className={`w-full text-sm font-normal flex justify-between items-center px-4 py-2 rounded-md ${active == "pgCourses" ? "bg-primary text-white" : ""}`} onClick={() => setActive("pgCourses")}>
                                <span>PG Courses</span>
                                <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
                                </svg>
                            </button>
                            <button className={`w-full text-sm font-normal flex justify-between items-center px-4 py-2 rounded-md ${active == "ugCourses" ? "bg-primary text-white" : ""}`} onClick={() => setActive("ugCourses")}>
                                <span>UG Courses</span>
                                <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
                                </svg>
                            </button>
                            <button className={`w-full text-sm font-normal flex justify-between items-center px-4 py-2 rounded-md ${active == "executiveEducation" ? "bg-primary text-white" : ""}`} onClick={() => setActive("executiveEducation")}>
                                <span>Executive Education</span>
                                <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
                                </svg>
                            </button>


                            <button className={`w-full text-sm font-normal flex justify-between items-center px-4 py-2 rounded-md ${active == "advancedDiploma" ? "bg-primary text-white" : ""}`} onClick={() => setActive("advancedDiploma")}>
                                <span>Advanced Diploma</span>
                                <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
                                </svg>
                            </button>



                        </div>
                    </div>
                    {/* content section */}
                    <div className='col-span-4 overflow-auto pb-5 container relative no-scro'>
                        <div className=' flex justify-between absolute top-0 right-2'>
                            <i className='fa-solid fa-xmark text-xl cursor-pointer' onClick={() => close()}></i>
                        </div>
                        <div className='flex justify-between items-center mt-8'>
                            <h4 className='text-base font-normal text-[#212529]'>Popular Programs</h4>
                            <div className='text-[#495057] text-sm flex items-center gap-2 search-box-shadow py-0.5 px-3 rounded-full mt-2'>
                                <i class='fa-solid fa-magnifying-glass text-base'></i>
                                <input type='text' name='searchResult' placeholder='Search Course' className='outline-none border-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-4 mt-2'>
                            {
                                courselist && (
                                    courselist.map((n,k) => (
                                        n.categorie == active ?
                                            (
                                                <Link key={k} href={`/courses/${n.urlname}`}

                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        close();

                                                        h.push(`/courses/${n.urlname}`);





                                                    }}

                                                >
                                                    <div className='pt-4 pb-8 pl-4 pr-6 flex flex-col gap-6 search-box-shadow rounded-md'>
                                                        <div className='flex flex-col gap-4'>

                                                            <Image width={10} height={10} priority alt="" src={`${apiUrl}images/${n.categorie == "pgCourses" ? "mba.svg" : n.categorie == "ugCourses" ? "ugsvg.svg" : n.categorie == "executiveEducation" ? "exesvg.svg" : "diplomawebp.webp"}`} className='self-start w-8' />
                                                            {/* <p className='text-sm text-[#212529]'>{n.course}</p> */}

                                                            <div style={{ height: '40px' }}>
                                                                <p className='text-sm text-[#212529]' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                                    {n.course}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col gap-4'>
                                                            <p className='bg-primary/5 w-[35%] text-[#4783d8] text-xs text-center py-1 font-medium rounded-full'>{n.month}</p>
                                                            <p className='flex items-center gap-1'>
                                                                <i class='fa-solid fa-circle fa-beat-fade text-[#0056d2] text-[10px]'></i>
                                                                <span className='text-xs font-bold'>
                                                                    Compare <span className='text-[#0056d2]'>{n.total}</span> Universities
                                                                </span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            ) : ''
                                    ))
                                )
                            }



                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ExplorePrograms

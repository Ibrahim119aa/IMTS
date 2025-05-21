"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {Link,useRouter as useNavigate} from "next/navigation";
import { apiUrl } from "../utils/api";
import axios from "axios";
import AccordionItem from '../App1';
import App1 from "../App1";
import TopUniSidebar from "./TopUniSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityListBySpecialization, getUniversitySpecializationlistDetail } from "../../_redux/itemSlice";
import Image from "next/image";
const TopUniPopUp = ({ close }) => {

    const h = useNavigate();

    const [courselist, setcourselist] = useState([]);



    const [active, setActive] = useState('');



    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    const getCourse = async () => {
        let a = await axios.get(`${apiUrl}get-Course`);
        setcourselist(a.data);











    }

    const universityList = useSelector(getUniversitySpecializationlistDetail);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await getCourse();




        }
        fetchData();

        if (universityList == undefined || universityList.length == 0) {
            dispatch(getUniversityListBySpecialization());
        }




    }, [dispatch])
    const spId = useSelector((i => i.items.specializationid));
    const SpecializationName=useSelector((i => i.items.specializationame));

    console.log(universityList);
    console.log(spId);


    return (
        <div className={"min-h-screen z-index-2000 w-full bg-black/50 flex justify-center"}>
            <motion.div initial={{ y: -50 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} exit={{ y: -50, opacity: 0 }} className='w-[70%] bg-white h-[75vh] mt-0.5 rounded-lg flex requires-no-scroll'>
                <div className='w-[35%] pt-4 pl-2'>
                    <h4 className='text-[#212529] text-base font-bold'>Discover Top Universities</h4>
                    <div className='w-full flex bg-primary items-center text-sm text-white p-2 rounded-lg mt-4'>
                        <input type='text' name='search' placeholder='Search...' className='bg-inherit outline-none text-sm w-full text-white placeholder:text-white' />
                        <i class='fa-solid fa-magnifying-glass self-end text-base'></i>
                    </div>
                    <div className='mt-2 overflow-auto' style={{ maxHeight: '300px' }}>
                        {/* {courselist.map((tab, i) => (
                            <button key={tab.courename} className={`w-full border-b border-b-gray-300 flex justify-between mt-2 px-2 py-2 ${active === tab.courename ? "border-l-4 border-l-[#0056D2] bg-primary/10" : ""}`} onClick={() => setActive(tab.courename)}>
                                <span className='flex flex-col items-center'>

                                    <div onClick={(e) => setActive(tab.courename)} style={{ height: '40px' }} >
                                        <p className='text-sm' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            <center>
                                                {tab.courename}
                                            </center>

                                        </p>
                                    </div>

                                </span>
                                <svg className='mt-1' stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
                                </svg>
                            </button>
                            <div onClick={() => setActive(tab.courename)} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                                <div className={`accordion-title ${isOpen ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion} style={{ padding: '1rem', fontWeight: '600 !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p className="m-0 d-flex gap-1" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '18px' }}>
                                        <span>⭐</span> {tab.courename} ?
                                    </p>
                                    <span>
                                        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </span>
                                </div>
                                {isOpen && (
                                    <div className="accordion-content ml-2">
                                        <p className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                            {tab.courename}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <TopUniSidebar a={f} />
                        ))} */}
                        <TopUniSidebar a={courselist} />
                    </div>
                </div>
                <div className='w-[65%] bg-[#fafbfc] px-4 pt-5 rounded-lg'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h4 className='flex items-center gap-1 flex-wrap'>
                            <span className='text-[#6C757D] text-xs'>Top Universities</span>
                            <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' font-size='10' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
                            </svg>
                            <span className='text-[#0056D2] text-sm font-bold'>{SpecializationName}</span>
                            <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' font-size='10' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
                            </svg>
                            <span className='text-[#0056D2] text-sm font-bold'>Specialisations</span>
                        </h4>
                        <i className='fa-solid fa-xmark text-xl cursor-pointer' onClick={() => close()}></i>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-3 h-[60vh] overflow-auto pb-4'>
                        {
                            universityList.map((v) =>
                            (
                               v.spid==spId?
                               (
                                <Link href={`/universities/${v.urlname}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    close();

                                    h.push(`/universities/${v.urlname}`);





                                }}
                                key={v.id}>
                                <div className='search-box-shadow flex flex-col py-4 px-4 gap-8 rounded-md'>
                                    <span className='flex flex-col gap-3'>
                                        <Image width={40} height={40} priority src={`${apiUrl}images/pg-icon.webp`} alt='pg-icon' className='w-5' />
                                        <p className='text-sm text-[#212529]'>{v.uname}


                                        </p>
                                    </span>
                                    <p className='flex items-center gap-1'>
                                        <i class='fa-solid fa-circle fa-beat-fade text-[#0056d2] text-[10px]'></i>
                                        <span className='text-xs font-bold'>
                                            Compare <span className='text-[#0056d2]'>{v.total}</span> Universities
                                        </span>
                                    </p>
                                </div>
                            </Link>
                               ):''
                            ))
                        }
                       



                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default TopUniPopUp

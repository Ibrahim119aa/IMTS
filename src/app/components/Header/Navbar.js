"use client"



import { useEffect, useState } from "react"
import { useRouter as useNavigate } from "next/navigation";
import Link from 'next/link';
import { AnimatePresence } from "framer-motion"// setShowLoginPopUp(!showLoginPopUp)
import ExplorePrograms from "./ExplorePrograms"
import TopUniPopUp from "./TopUniPopUp"
import SearchPopUp from "./SearchPopUp";
import AuthPopUp from "./AuthPopUp"
import ResourcesPopUp from "./ResourcesPopUp"
import axios from "axios";
import MorePopUp from "./MorePopUp"


import { useDispatch, useSelector } from "react-redux"
import { getLatestHeader, getLatestHeaderDetail } from "@/app/_redux/itemSlice"
import '@/app/globals.css';
import MobileHeader from "./MobileHeader"
import { CardMedia, Skeleton } from "@mui/material";

import Image from "next/image";

const Navbar = () => {

    let apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [ApplyUniversity, setApplyUniversity] = useState(false);

    const [isLogin, setLogin] = useState('');
    const [user, setuser] = useState('');
    const [fname, setfname] = useState('');


    const checkLogin = async () => {
        let a = await axios.get(`${apiUrl}dashboard`,
            {
                withCredentials: true
            });




        setLogin(a.data.Status);
        setuser(a.data.username);
        setfname(a.data.fname);


    }


    const [loading, setloading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getLatestHeader()).unwrap();  // This ensures the action resolves
            } catch (error) {
                console.error('Error fetching header:', error);
            }
            finally {
                setloading(false);

            }
        };

        fetchData();
    }, [dispatch]);

    const headerlist = useSelector(getLatestHeaderDetail);
    const [explorePopUp, setExplorePopUp] = useState(false)
    const [topUniversitiesPopUp, setTopUniversitiesPopUp] = useState(false)
    const [searchPopUp, setSearchPopUp] = useState(false)
    const [showLoginPopUp, setShowLoginPopUp] = useState(false)
    const [showResourcesPopUp, setShowResourcesPopUp] = useState(false)

    const [ShowMorePopUp, setShowMorePopUp] = useState(false);




    const TopUn = () => {

        setExplorePopUp(false);
        setTopUniversitiesPopUp((prevValue) => !prevValue);


    }
    const ExploreMore = () => {
        setTopUniversitiesPopUp(false);

        setExplorePopUp((prevValue) => !prevValue)
    }
    const MorePop = () => {
        setTopUniversitiesPopUp(false);

        setExplorePopUp(false);
        setShowMorePopUp(true);
    }
    const [suggest, setsuggest] = useState(false);

    const Suggest = () => {
        setTopUniversitiesPopUp(false);

        setExplorePopUp(false);
        setShowMorePopUp(false);
        setsuggest(true);

    }
    const Closeup = () => {
        close();

    }
    console.log(headerlist);


    return (
        <>


            <header className="th-header header-layout1">
                <div className="header-top">
                    <div className="container-fluid ">
                        <div className="row   gy-2">
                            <div className="col-auto ml-44 d-none d-lg-block">
                                <div className="header-links flex gap-x-20">
                                    <ul>
                                        <li><i className="far fa-phone"></i><a href="tel:+91 9999999999">+91 9999999999</a></li>
                                        <li className="d-none d-xl-inline-block"><i className="far fa-envelope"></i><a href="#">support@IMTS.AC.IN</a></li>
                                        <li><i className="far fa-clock"></i>Mon - Sat: 8:00 - 18:00</li>
                                    </ul>
                                    <div className="header-social mt-1">
                                        <span className="social-title">Follow Us:</span>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                        <a href="#"><i className="fab fa-skype"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="sticky-wrapper ">

                    <div className="menu-area ">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo ml-14">

                                        {headerlist.map((v, k) =>
                                        (
                                            <Link key={k} href='/' >

                                                <div className="flex gap-1">
                                                    <Image width={50} height={55} priority src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-16 my-lg' style={{ height: '60px' }} />
                                                    <p className='leading-none text-dark   text-lg' >
                                                        {/* <strong className="text-dark mt-16" >{v.name}</strong> */}
                                                    </p>

                                                </div>


                                            </Link>


                                        ))
                                        }

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="col-auto">
                                            <nav className="main-menu d-none d-lg-inline-block">
                                                <ul>

                                                    <li className="menu-item-has-children text-dark cursor-pointer">
                                                        <a onClick={() => ExploreMore()}>Explore Program</a>

                                                    </li>
                                                    <li className="menu-item-has-children text-dark cursor-pointer">
                                                        <a onClick={() => TopUn()}>Top Universities</a>

                                                    </li>
                                                    <li onClick={() => MorePop()} onMouseLeave={() => setShowMorePopUp(false)} className="menu-item-has-children text-dark cursor-pointer">
                                                        <a >More


                                                            {ShowMorePopUp ? <MorePopUp leave={() => setShowResourcesPopUp(false)} hov={() => setShowResourcesPopUp(true)} /> : ""}
                                                        </a>

                                                    </li>







                                                    <li className="d-none d-lg-inline-block text-dark cursor-pointer">
                                                        <a href="#" onClick={() => {
                                                            setShowLoginPopUp(!showLoginPopUp);

                                                        }}><i className="far fa-user"></i> Login </a>
                                                    </li>
                                                    <li className="d-none d-lg-inline-block text-dark cursor-pointer ">
                                                        <Link href={'/Video-Conselling'}  ><i className="far fa-user"></i> Suggest in 2 min </Link>
                                                    </li>
                                                    <li onClick={() => setSearchPopUp(!searchPopUp)}>

                                                        <div className="input-group">
                                                            <input type="text" className="form-control " placeholder="Search" />
                                                            <div className="input-group-btn">
                                                                <button className="btn btn-default" type="submit" >
                                                                    <i className="glyphicon glyphicon-search"></i>
                                                                </button>
                                                            </div>
                                                        </div>



                                                    </li>
                                                </ul>
                                            </nav>
                                            <button onClick={() => setApplyUniversity(true)} type="button" className="th-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i></button>
                                        </div>
                                        <AnimatePresence>
                                            {ApplyUniversity && (
                                                <div className="fixed top-0 left-0 w-full h-full z-50">
                                                    <MobileHeader close={() => setApplyUniversity(!ApplyUniversity)} />
                                                </div>
                                            )}
                                            {explorePopUp && (
                                                <div className="fixed top-28  left-0 w-full h-full z-50">
                                                    <ExplorePrograms close={() => setExplorePopUp(!explorePopUp)} />
                                                </div>
                                            )}
                                            {topUniversitiesPopUp && (
                                                <div className="fixed top-28  left-0 w-full h-full z-50">
                                                    <TopUniPopUp close={() => setTopUniversitiesPopUp(!topUniversitiesPopUp)} />
                                                </div>
                                            )}
                                            {showLoginPopUp && (
                                                <div className="fixed top-5 left-0 w-full h-full z-50">
                                                    <AuthPopUp close={() => setShowLoginPopUp(!showLoginPopUp)} name={"IMTS"} logo={headerlist[0].image} />
                                                </div>
                                            )}
                                            {searchPopUp && (
                                                <div className="fixed top-0 left-0 w-full h-full z-50">
                                                    <SearchPopUp close={() => setSearchPopUp(!searchPopUp)} />
                                                </div>
                                            )}
                                        </AnimatePresence>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AnimatePresence>{ApplyUniversity ? <MobileHeader close={() => setApplyUniversity(!ApplyUniversity)} /> : ""}</AnimatePresence>

            </header>
        </>
        // <div className="Nav pt-3 pb-3 lg:px-5 tablet::px-5 mobile:px-3 mobile-small:px-3 mobile-extra-small:px-4">
        //     <div className={`lg:grid hidden  lg:grid-cols-12`}>
        //         <div className="lg:col-span-1">
        //             {
        //                 loading ?
        //                     (
        //                         <>

        //                             <Skeleton sx={{ height: '40px' }} className="rounded  col-lg-1 mx-2" animation="wave" variant="rectangle" />
        //                         </>
        //                     ) : headerlist.map((v, k) =>
        //                     (
        //                         <Link key={k} href='/' >

        //                             <div className="flex gap-1">
        //                                 <Image width={35} height={35} priority  src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-12 my-lg' />
        //                                 <p className='leading-none text-dark mt-3  text-lg' >
        //                                     <strong className="text-dark " >{v.name}</strong>
        //                                 </p>

        //                             </div>


        //                         </Link>


        //                     ))
        //             }
        //         </div>
        //         <div className="lg:col-span-2"></div>
        //         <div className="lg:col-span-2">
        //             <button className='bg-primary text-white font-bold text-sm p-2 mt-2 flex gap-1 items-center rounded-md' onClick={() => ExploreMore()}>
        //                 <span>Explore Programs</span>
        //                 <i className='fa-solid fa-angle-down mt-0.5'></i>
        //             </button>
        //         </div>
        //         <div className="lg:col-span-2">
        //             <button className='text-[#0056D2] text-sm p-2 mt-2 flex gap-1 items-center' onClick={() => TopUn()}>
        //                 <span>Top Universities</span>
        //                 <i className='fa-solid fa-angle-down mt-0.5'></i>
        //             </button>
        //         </div>
        //         <div className="lg:col-span-1">
        //             <button onClick={() => MorePop()} onMouseLeave={() => setShowMorePopUp(false)} className=' hover:text-[#0056D2] mt-2  flex gap-1 items-center relative  text-[#0056D2] text-sm p-2 rounded-md'>
        //                 More
        //                 <i className='fa-solid fa-angle-down mt-0.5'></i>
        //                 {ShowMorePopUp ? <MorePopUp leave={() => setShowResourcesPopUp(false)} hov={() => setShowResourcesPopUp(true)} /> : ""}
        //             </button>


        //         </div>
        //         <div className="lg:col-span-1">


        //             {
        //                 isLogin ? (
        //                     <button onClick={() => setShowResourcesPopUp(true)} onMouseLeave={() => setShowResourcesPopUp(false)} className=' hover:text-[#0056D2] mt-2 flex gap-1 items-center relative border border-[#0056D2] text-[#0056D2] text-sm p-2 rounded-md'>
        //                         {fname}
        //                         <i className='fa-solid fa-angle-down mt-0.5'></i>
        //                         {showResourcesPopUp ? <ResourcesPopUp leave={() => setShowResourcesPopUp(false)} hov={() => setShowResourcesPopUp(true)} /> : ""}
        //                     </button>
        //                 ) : (
        //                     <button onClick={() => {
        //                         setShowLoginPopUp(!showLoginPopUp);

        //                     }} className='mt-2 border border-[#0056D2] text-[#0056D2] text-sm p-2 rounded-md'>
        //                         Sign in
        //                     </button>
        //                 )
        //             }
        //         </div>
        //         <div className="lg:col-span-2">
        //             <button className="  mt-2 rounded-lg  relative" onClick={Suggest}>
        //                 <Link className="" href={'/Video-Conselling'} >
        //                     <span className="flex p-1  items-center gap-0.5  bg-[#f0f8ff]  rounded-lg">
        //                         <p className="text-xs px-1  ">Suggest me in 2 mins</p>
        //                     </span>
        //                     <span className="badge absolute top-1 bgsecondary  translate-middle shadow-sm"

        //                     >
        //                         <svg

        //                             stroke="currentColor"
        //                             fill="currentColor"
        //                             strokeWidth="0"
        //                             viewBox="0 0 16 16"
        //                             color="#fff"
        //                             style={{ color: '#fff', display: 'inline-block' }}
        //                             height="1em"
        //                             width="1em"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                         >
        //                             <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
        //                         </svg>
        //                         AI-Powered
        //                     </span>
        //                 </Link>
        //             </button>


        //         </div>
        //         <div className="lg:col-span-1">


        //             <button className='mt-3 bg-primary/5 text-[#0056D2] text-sm  flex   items-center rounded-md' onClick={() => setSearchPopUp(!searchPopUp)} >
        //                 <span>Search |</span>
        //                 <i className='fa-solid fa-magnifying-glass mt-0.5'></i>
        //             </button>
        //         </div>

        //     </div>
        //     <AnimatePresence>
        //         {ApplyUniversity && (
        //             <div className="fixed top-0 left-0 w-full h-full z-50">
        //                 <MobileHeader close={() => setApplyUniversity(!ApplyUniversity)} />
        //             </div>
        //         )}
        //         {explorePopUp && (
        //             <div className="fixed top-20  left-0 w-full h-full z-50">
        //                 <ExplorePrograms close={() => setExplorePopUp(!explorePopUp)} />
        //             </div>
        //         )}
        //         {topUniversitiesPopUp && (
        //             <div className="fixed top-20  left-0 w-full h-full z-50">
        //                 <TopUniPopUp close={() => setTopUniversitiesPopUp(!topUniversitiesPopUp)} />
        //             </div>
        //         )}
        //         {showLoginPopUp && (
        //             <div className="fixed top-0 left-0 w-full h-full z-50">
        //                 <AuthPopUp close={() => setShowLoginPopUp(!showLoginPopUp)} name={"IMTS"} logo={headerlist[0].image} />
        //             </div>
        //         )}
        //         {searchPopUp && (
        //             <div className="fixed top-0 left-0 w-full h-full z-50">
        //                 <SearchPopUp close={() => setSearchPopUp(!searchPopUp)} />
        //             </div>
        //         )}
        //     </AnimatePresence>
        //     <div className="lg:hidden grid grid-cols-12">
        //         <div className="col-span-6 flex items-center">
        //             <i
        //                 className="fa-solid fa-bars  mobile-extra-small:fa-1xl mobile-small:fa-1xl mobile:fa-2xl tablet:fa-2xl"
        //                 onClick={(e) => setApplyUniversity(!ApplyUniversity)}
        //             ></i>
        //             <Link href="/" onClick={(e) => setApplyUniversity(false)}>
        //                 <Image
        //                     width={200}
        //                     height={200}
        //                     priority

        //                     src={`${apiUrl}images/IMTS.png`}
        //                     className="w-1/4 ml-2"
        //                     alt="uni-icon"
        //                 />
        //             </Link>

        //         </div>
        //         <div className="col-span-6  flex justify-end">
        //             <button className="  mt-2 rounded-lg  relative" onClick={Suggest}>
        //                 <Link className="" href={'/Video-Conselling'} >
        //                     <span className="flex p-1  items-center gap-0.5  bg-[#f0f8ff]  rounded-lg">
        //                         <p className="text-xs px-1  ">Suggest me in 2 mins</p>
        //                     </span>
        //                     <span className="badge absolute tablet:top-4 mobile:top-2 mobile-small:top-1 mobile-extra-small:top-1 bgsecondary  translate-middle shadow-sm"

        //                     >
        //                         <svg

        //                             stroke="currentColor"
        //                             fill="currentColor"
        //                             strokeWidth="0"
        //                             viewBox="0 0 16 16"
        //                             color="#fff"
        //                             style={{ color: '#fff', display: 'inline-block' }}
        //                             height="1em"
        //                             width="1em"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                         >
        //                             <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
        //                         </svg>
        //                         AI-Powered
        //                     </span>
        //                 </Link>
        //             </button>
        //         </div>

        //     </div>






        // </div>
    )
}

export default Navbar


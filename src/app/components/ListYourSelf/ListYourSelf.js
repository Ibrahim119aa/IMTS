"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import "../../globals.css"
// import ListYouUniversity from './ListYouUniversity';
import { AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic';
const ListYourUniversityinWebsite=dynamic(()=>import('@/app/components/ListYourSelf/ListYourUniversityinWebsite'),{ssr:false})
import { useDispatch, useSelector } from 'react-redux';
import {  getUniversityListeningStepPageDetail, getUniversityListeningBenefitDetail, getUniversityListeningBenefit, getUniversityListeningStep } from '../../_redux/itemSlice';

import { useMediaQuery } from 'react-responsive';

const ListYourSelf = () => {
    let apiUrl=process.env.NEXT_PUBLIC_API_URL;
    const name = "IMTS"
    const [ListUni, setListUni] = useState(false);
    const handleButtonClick = () => {
        setListUni(!ListUni);
    };

    const universitylisteningstep = useSelector(getUniversityListeningStepPageDetail);
    const universitylisteningbenefit = useSelector(getUniversityListeningBenefitDetail);
    const dispatch = useDispatch();

    const isMobileExtraSmall = useMediaQuery({ query: '(max-width: 549px)' });
    const isMobileSmall = useMediaQuery({ query: '(min-width: 550px) and (max-width: 638px)' });
    const isMobile = useMediaQuery({ query: '(min-width: 639px) and (max-width: 767px)' });

    const isTablet = useMediaQuery({ query: '(min-width:768px) and (max-width: 1023px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        if (universitylisteningstep == undefined || universitylisteningstep.length == 0) {
            dispatch(getUniversityListeningStep());
            dispatch(getUniversityListeningBenefit());


        }

    }, [dispatch]);



    return <div>

        <div className='bg-[#02081b] '>
            <div className={`grid grid-cols-2 p-16 gap-6`}>
                <div >

                    <h1 className="mb-4 h1 LisyYourSelfH1 ">India Trusted  IMTS Portal!</h1>
                    <div className=" align-items-center d-flex  justify-content-center justify-content-md-start p-1 p-sm-2" style={{ background: '#fff', borderRadius: '15px', color: '#333', width: 'max-content' }}>
                        <div className="px-1 px-md-2 px-lg-4">
                            <h5 className="fw-normal mb-0">Compare</h5>
                        </div>
                        <div className="px-1 px-md-2 px-lg-4" style={{ borderLeft: '2px solid #999', borderRight: '2px solid #999' }}>
                            <h5 className="fw-normal mb-0">Consult</h5>
                        </div>
                        <div className="px-1 px-md-2 px-lg-4">
                            <h5 className="fw-normal mb-0">Connect</h5>
                        </div>
                    </div>

                </div>
                <div >
                    <img src="bglist.avif" className='rounded  ' alt="" />

                </div>
            </div>
        </div>

        <center className='mt-4'>
            <h2 className=" mb-4 mb-lg-5 position-relative font-bold headingSec text-dark">How to List your University/College <span className="d-block HeadingSec">on <Link href={""} className="text-primary ps-1" >{name}</Link ></span></h2>

        </center>

        <div className={``}>

            {
                universitylisteningstep && (
                    universitylisteningstep.map((v,k) =>
                    (
                        <div key={k} className={`grid ${isMobile ? 'grid-cols-2 gap-6' : ''} ${isMobileSmall ? 'grid-cols-2 gap-6' : ''} ${isMobileExtraSmall ? 'grid-cols-1 gap-6' : ''} ${isTablet ? 'grid-cols-2 gap-6' : ''} ${isLarge ? 'grid-cols-4 gap-6' : ''} px-12`}>
                            <div >
                                <div className={` ${isLarge ? 'max-h-96 h-96' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} px-3 pt-4 pb-2 Home_stepCard__v13kj text-dark  text-center`} >

                                    <img src={`${apiUrl}images/step1.png`} width="50" height="50" className='m-auto' />

                                    <div>
                                        <h6 className=" fw-bold mt-3 mt-md-4 mb-2 text-uppercase">Step - 1</h6><p className='p p1'> {v.step1}</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className={` ${isLarge ? 'max-h-96 h-96' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} px-3 pt-4 pb-2 Home_stepCard__v13kj text-dark  text-center`}>

                                    <img src={`${apiUrl}images/step1.png`} width="50" height="50" className='m-auto' />

                                    <div>
                                        <h6 className=" fw-bold mt-3 mt-md-4 mb-2 text-uppercase">Step - 2</h6><p className='p p1'> {v.step2}</p></div></div>
                            </div>
                            <div >
                                <div className={` ${isLarge ? 'max-h-96 h-96' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} px-3 pt-4 pb-2 Home_stepCard__v13kj text-dark  text-center`}>

                                    <img src={`${apiUrl}images/step1.png`} width="50" height="50" className='m-auto' />

                                    <div>
                                        <h6 className=" fw-bold mt-3 mt-md-4 mb-2 text-uppercase">Step - 3</h6><p className='p p1'> {v.step3}</p></div></div>
                            </div>
                            <div >
                                <div className={` ${isLarge ? 'max-h-96 h-96' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} px-3 pt-4 pb-2 Home_stepCard__v13kj text-dark  text-center`}>

                                    <img src={`${apiUrl}images/step1.png`} width="50" height="50" className='m-auto' />

                                    <div>
                                        <h6 className=" fw-bold mt-3 mt-md-4 mb-2 text-uppercase">Step - 4</h6><p className='p p1'> {v.step4}</p></div></div>
                            </div>
                        </div>

                    ))
                )
            }

        </div>


        <center className='mt-5 mb-3'>
            <button onClick={handleButtonClick} className='btn btn-primary rounded'>List Yourself</button>
        </center>
        <AnimatePresence>{ListUni ? <ListYourUniversityinWebsite close={() => setListUni(!ListUni)} /> : ""}</AnimatePresence>

        <div className={`bg-[aliceblue] pt-3 mt-5 pb-10`}>
            <center className='py-3 pb-3'>
                <h2 className="text-dark  position-relative font-bold headingSec">Why do Universities Love Listing<span className="d-block HeadingSec">on<a target="_blank" className="text-primary ps-1" >{name}</a></span></h2>

            </center>
            {
                universitylisteningbenefit && (
                    universitylisteningbenefit.map((v,k) =>
                    (
                        <div key={k} className={`grid ${isMobile ? 'grid-cols-2 gap-6' : ''} ${isMobileSmall ? 'grid-cols-2 gap-6' : ''} ${isMobileExtraSmall ? 'grid-cols-1 gap-6' : ''} ${isTablet ? 'grid-cols-2 gap-6' : ''} ${isLarge ? 'grid-cols-4 gap-3 my-4' : ''} px-5`}>

                            <div className={` ${isLarge ? 'max-h-96 h-80' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} text-dark  text-center`} >

                                <div className={`Card bg-white ${isLarge ? 'max-h-96 h-80 px-3  pb-2' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} `}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path></svg>
                                    <br />
                                    <div className='mt-3 text-dark mt-sm-4 mt-md-3 YourSelfCardtext'>
                                        <p class="mb-0 mt-5 p2">{v.step1}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${isLarge ? 'max-h-96 h-80' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} text-dark  text-center`} >

                                <div className={`Card bg-white ${isLarge ? 'max-h-96 h-80 px-3  pb-2' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} `}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path></svg>
                                    <br />
                                    <div className='mt-3 text-dark mt-sm-4 mt-md-3 YourSelfCardtext'>
                                        <p class="mb-0 mt-5 p2">{v.step2}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${isLarge ? 'max-h-96 h-80' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} text-dark  text-center`} >

                                <div className={`Card bg-white ${isLarge ? 'max-h-96 h-80 px-3  pb-2' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} `}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path></svg>
                                    <br />
                                    <div className='mt-3 text-dark mt-sm-4 mt-md-3 YourSelfCardtext'>
                                        <p class="mb-0 mt-5 p2">{v.step3}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${isLarge ? 'max-h-96 h-80' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} text-dark  text-center`} >

                                <div className={`Card bg-white ${isLarge ? 'max-h-96 h-80 px-3  pb-2' : ''} ${isMobile ? ' h-80 max-h-96 ' : ''} ${isMobileExtraSmall ? 'max-h-96 h-80 bg-pink-50' : ''} ${isMobileSmall ? 'max-h-96 h-96' : ''} `}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path></svg>
                                    <br />
                                    <div className='mt-3 text-dark mt-sm-4 mt-md-3 YourSelfCardtext'>
                                        <p class="mb-0 mt-5 p2">{v.step4}</p>
                                    </div>
                                </div>
                            </div>
                            


                           
                        </div>

                    ))
                )
            }

        </div>


    </div>;
}



export default ListYourSelf;
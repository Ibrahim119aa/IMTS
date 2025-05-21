"use client";

import styles from '@/app/components/Footer/Footer.module.css';
import Link from "next/link";
import '@/app/globals.css';

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFooter, getFooterDetail } from '@/app/_redux/itemSlice';
import Image from 'next/image';
const Footer = () => {

    let apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const logo = "IMTS.png";


    let dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {

            await dispatch(getFooter()).unwrap();

        }
        fetchData();

    }, [dispatch]);

    const f = useSelector(getFooterDetail);






    return (
        (
            f && (
                <>
                    <footer className="footer-wrapper footer-layout1" data-bg-src="">



                        <div className="footer-wrap" style={{ background: 'transparent' }}>
                            <div className="widget-area">
                                <div className="container">
                                    <div className="row justify-content-between">
                                        <div className="col-md-4">
                                            <div className="widget footer-widget" style={{ background: ' #ffde3e', padding: '15px' }}>
                                                <div className="th-widget-about">
                                                    <div className="about-logo flex">
                                                        <Image src={`${apiUrl}images/${logo}`} width={80} height={50} alt="logo" style={{ height: '70px' }} />  <span className='mt-4 text-[2rem] font-semibold  text-[#212529]' >IMTS</span>
                                                    </div>
                                                    {
                                                        f.map((x, y) =>
                                                        (

                                                            <div className='-mt-4' key={y}>
                                                                <span className="text-uppercase  font-semibold text-[1rem] text-[#212529]  " >Choose the Right Course, Shine in the Future
                                                                   

                                                                </span>
                                                            </div>
                                                        ))

                                                    }
                                                    <div className="th-social">
                                                        <h6 className="title mb-3 block text-white">FOLLOW US ON:</h6>

                                                        {
                                                            f.map((v, k) =>
                                                            (
                                                                <>


                                                                    <a href={v.facebook}><i className="fab fa-facebook-f"></i></a>
                                                                    <a href={v.twitter}><i className="fab fa-twitter"></i></a>
                                                                    <a href={v.linkedin}><i className="fab fa-linkedin-in"></i></a>
                                                                    <a href={v.youtube}><i className="fab fa-youtube"></i></a>
                                                                    <a href={v.instagram}><i className="fab fa-instagram"></i></a>


                                                                </>
                                                            ))
                                                        }





                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                            <span className='text-[1.3rem] text-white ml-1 font-semibold'>G 38, 2nd Floor, Block G, Noida Sector 3, Noida, Uttar Pradesh 201301, India</span>
                                            </div>
                                        </div>

                                        {f.map((a, b) => (
                                            < >


                                                <div className={`col-md-2  ${styles.linkh} ${styles.linkp}`} dangerouslySetInnerHTML={{ __html: a.distancemba }}></div>
                                                <div className={`col-md-2 ${styles.linkh} ${styles.linkp}`} dangerouslySetInnerHTML={{ __html: a.ugcourse }}></div>
                                                <div className={`col-md-2 ${styles.linkh} ${styles.linkp}`} dangerouslySetInnerHTML={{ __html: a.bestcollege }}></div>

                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="copyright-wrap">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-md-6">
                                            <p className="copyright-text tex text-dark">Copyright © 2023 <a href="index.html">BSRAI Edutech</a> All Rights Reserved.</p>
                                        </div>
                                        <div className="col-md-6 text-end d-none d-md-block">
                                            <div className="footer-links">
                                                <ul>
                                                    <li><a className='text-dark'>Privacy Policy</a></li>
                                                    <li><a className='text-dark'>Terms & Condition</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>




                    {/* <footer className={`${styles.Footer} -mt-3 `}>
                        <div className={`grid lg:grid-cols-4 p-8 tablet:grid-cols-4 mobile:grid-cols-2 mobile-small:grid-cols-2  gap-4`}>
                            <div className="lg:mx-9">
                                <a className="border-0">
                                    <Image  src={`${apiUrl}images/${logo}`} width={100} height={50}  alt="logo" style={{ objectFit: 'contain' }} />
                                </a>
                                {
                                    f.map((x, y) =>
                                    (

                                        <h2 key={y} className="text-uppercase  text-[1.2rem] text-[#fff]  " >Choose the Right Course, Shine in the Future</h2>
                                    ))

                                }
                                {
                                    f.map((v, k) =>
                                    (
                                        <>
                                            <p className={`font-semibold text-[#989eb6] text-[1rem] `} >Contact Us</p>
                                            <div className="mt-2">
                                                <a className=" text-[#989eb6] Footer_link  text-decoration-none" href={`mailto:${v.contactus}`}>{v.contactus}</a>
                                            </div>


                                            <ul className="list-unstyled d-flex mt-3">
                                                <li className="me-2">
                                                    <a target="_blank" href={v.facebook} className="text-[#4267B2]">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="Footer_link_text__Iro1E text-decoration-none h4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="me-2 my-2">
                                                    <a target="_blank" href={v.twitter} className="text-[#1DA1F2] my-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x Footer_link_text__Iro1E text-decoration-none" viewBox="0 0 16 16">
                                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="me-2">
                                                    <a target="_blank" href={v.linkedin} className="text-[#0077B5]">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="Footer_link_text__Iro1E text-decoration-none h4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="me-2">
                                                    <a target="_blank" href={v.youtube} className="text-[#f10707]">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="Footer_link_text__Iro1E text-decoration-none h4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href={v.instagram} className="text-[#fccc63]">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="Footer_link_text__Iro1E text-decoration-none h4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="mt-3">
                                                <a className="position-relative border rounded text-white px-4 pt-3 pb-2 mt-1 d-inline-block" href={v.tollno}><small className="position-absolute top-0 translate-middle bgprimary text-white rounded fs-10 px-2 ms-3 myshine"><i className="fa fa-phone"></i></small> {v.tollno}</a>
                                            </div>
                                        </>
                                    ))
                                }

                            </div>
                            {f.map((a, b) => (
                                < >


                                    <div className={`${styles.linkh}  ${styles.linkp}`} dangerouslySetInnerHTML={{ __html: a.distancemba }}></div>
                                    <div className={`${styles.linkh} ${styles.linkp}`} dangerouslySetInnerHTML={{ __html: a.ugcourse }}></div>
                                    <div className={`${styles.linkh} ${styles.linkp}`} dangerouslySetInnerHTML={{ __html: a.bestcollege }}></div>

                                </>
                            ))}
                        </div>

                        <div className={`flex flex-row flex-wrap mobile-extra-small:gap-3 mobile-extra-small:mx-2 lg:justify-center md:justify-center lg:gap-12  tablet:gap-7 mobile-small:gap-3 mobile:gap-3`}>
                            <div>  <Link href={'/About'} className="Footer_link hover:text-primary text-decoration-none   footerlinkitem" > About us</Link>
                            </div>
                            <div>              <Link href={'/sitemap'} className="Footer_link text-decoration-none footerlinkitem" > Sitemap</Link>
                            </div>
                            <div>         <Link className="Footer_link text-decoration-none footerlinkitem" href={'/experts'} >IMTS Experts</Link>
                            </div>
                            <div>        <a target="blank" href="https://login.imtsinstitute.com/pay" className="Footer_link text-decoration-none footerlinkitem" >Pay Fee</a>
                            </div>
                            <div>       <Link href={'/Contact'} className="Footer_link text-decoration-none footerlinkitem" >  Contact us</Link>
                            </div>
                            <div> <Link className="Footer_link text-decoration-none footerlinkitem" href={'/checklist'}>

                                IMTS Checklist</Link></div>
                            <div>        <Link href={'/Career'} className="Footer_link text-decoration-none footerlinkitem" > IMTS Careers</Link>
                            </div>

                        </div>




                        <hr className="bg-[#fff]  lg:ml-16 lg:mr-16 font-bold" />

                        {

                            f.map((v, q) =>
                            (
                                <div className="grid grid-cols-1" key={q}>
                                    <div className="flex flex-row flex-wrap gap-3 justify-center">
                                        <div>
                                            <a className="Footer_link text-decoration-none" style={{ color: '#989eb6' }} > Disclaimer</a>
                                        </div>
                                        <div>
                                            <a className="Footer_link text-decoration-none" style={{ color: '#989eb6' }}> / Terms & Conditions</a>

                                        </div>
                                        <div>
                                            <a className="Footer_link text-decoration-none" style={{ color: '#989eb6' }}> / Refund Policy</a>
                                        </div>
                                        <div>
                                            <a className="Footer_link text-decoration-none" style={{ color: '#989eb6' }}> / Our Policy</a>
                                        </div>
                                    </div>

                                    <div className="flex flex-row flex-wrap  justify-center ">
                                        <p className="text-center lg:mx-16 text-[#989eb6]" dangerouslySetInnerHTML={{ __html: v.reserved }}></p>

                                    </div>
                                </div>
                            )
                            )

                        }
                    </footer > */}

                </>
            )
        )
    );
};

export default Footer;

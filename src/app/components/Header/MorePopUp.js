
import React, { useEffect, useState } from "react"
import { useRouter as useNavigate } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import '@/app/globals.css';


import { apiUrl } from "../utils/api";
const MorePopUp = ({ hov, leave }) => {

    let [MoreResource, setMoreResource] = useState([]);

    const getMoreResource = async () => {
        let a = await axios.get(`${apiUrl}get-More-Resource`);
        setMoreResource(a.data);

    }
    const a1 = useNavigate();


    const logout = async (e) => {
        let a = await axios.post(`${apiUrl}logout`, {}, {
            withCredentials: true
        });

        alert(a.data);
        window.location.href = "/";

    }
    useEffect(() => {
        const fetchData = async () => {
            await getMoreResource();
        }
        fetchData();
    }, []);

    return (


        <section onMouseOver={hov} onMouseLeave={leave} className='absolute top-5 left-0 py-4 text-black w-[250px] z-10'>


            <div className="container-fluid border bg-white rounded-md" style={{ marginTop: '1.5rem', marginLeft: '0.1rem' }}>
                <div className="row">
                    {
                        MoreResource.length > 0 ?
                            (
                                <div className="col-lg-10" >
                                    <div >
                                        <p className="fw-bold textprimary">More Resource</p>

                                        <p className="fs-14 text-dark  mt-1" style={{ marginLeft: '-0.3rem' }}>
                                            <Link href={'/Video-Conselling'}>
                                                <p className="fs-14 text-dark mb-2 d-inline-block">{MoreResource[0].button1} </p></Link>


                                        </p>
                                        <p className="fs-14 text-dark  " style={{ marginTop: '-0.3rem', marginLeft: '1.5rem' }}>
                                            <Link href={'/Verify-University'}>
                                                <p className="fs-14 text-dark d-inline-block">{MoreResource[0].button2}</p>
                                            </Link>


                                        </p>
                                        <p className="fs-14 text-dark mt-1" style={{ marginTop: '-0.1rem', marginLeft: '3rem' }}>
                                            <Link href={'/cv-experts'}>
                                                <p className="fs-14 text-dark d-inline-block">
                                                    {MoreResource[0].button3}
                                                </p>
                                            </Link>


                                        </p>

                                        <p className="fs-14 text-dark mt-1" style={{ marginTop: '-0.1rem', marginLeft: '1.5rem' }}>

                                            <Link href={'/blog'}>
                                                <p className="fs-14 text-dark d-inline-block">

                                                    {MoreResource[0].button4}
                                                </p>
                                            </Link>


                                        </p>
                                        <p className="fs-14 text-dark mt-1" style={{ marginTop: '-0.1rem', marginLeft: '0.9rem' }}>

                                            <Link href={'/list-yourself'}>
                                                <p className="fs-14 text-dark d-inline-block">
                                                    {MoreResource[0].button5}

                                                </p>
                                            </Link>


                                        </p>

                                        <p className="fs-14 mb-3 text-dark mt-1" style={{ marginTop: '-0.1rem', marginLeft: '-4rem' }}>

                                            <Link href={'/Career'}>
                                                <p className="fs-14 text-dark d-inline-block">
                                                    {MoreResource[0].button6}

                                                </p>
                                            </Link>


                                        </p>
                                        <p className="fw-bold textprimary" style={{ marginLeft: '-3rem' }}>Find Us</p>

                                        <ul className="list-unstyled mb-5">
                                            <li className="mt-2">
                                                <span role="button" className="fs-14 ml-3  text-dark mb-2 d-inline-flex gap-1">
                                                    <span>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="d-flex flex-column" style={{ marginLeft: '-1rem' }}>
                                                        <span className="text-secondary fs-12">New Student</span>
                                                        <span>{MoreResource[0].newstudent}</span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li className="mt-2">
                                                <span role="button" className="fs-14 ml-3  text-dark mb-2 d-inline-flex gap-1">
                                                    <span>
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"></path></svg>
                                                    </span>
                                                    <span className="d-flex flex-column" style={{ marginLeft: '-0.5rem' }}>
                                                        <span className="text-secondary fs-12">Visit Us</span>
                                                        <span>({MoreResource[0].visitus})</span>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            ) :
                            (
                                <div className="col-lg-10 p-3" >
                                    <div >
                                        <p className="fw-bold textprimary" >More Resource</p>

                                        
                                            <Link   href={'/Video-Conselling'}

                                            >
                                              Video Conselling </Link>


                                      
                                        
                                            <Link className="fs-14  mt-1" href={'/Verify-University'}>
                                            Verify Your University 
                                            </Link>


                                        
                                       
                                            <Link className="fs-14 mt-1  text-dark" href={'/experts'}>
                                               Consult IMTS  Experts!
                                               
                                            </Link>


                                        

                                       

                                            <Link className="fs-14 mt-1 text-dark" href={'/blog'}>
                                                
                                                    Blogs & Web Stories
                                              
                                            </Link>


                                       
                                        

                                            <Link className="fs-14 mt-1 text-dark" href={'/list-yourself'}>
                                                   List your Univserity

                                               
                                            </Link>


                                       

                                       

                                            <Link className="fs-14 mt-1 text-dark" href={'/Career'}>
                                                    Career

                                               
                                            </Link>


                                        
                                        <p className="fw-bold textprimary mt-2" >Find Us</p>

                                        <ul className="list-unstyled">
                                            <li className="">
                                                <span role="button" className="fs-14   text-dark mb-2 d-inline-flex gap-1">
                                                    <span>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="d-flex flex-column -mt-3" >
                                                        <span className="text-secondary fs-12">New Student</span>
                                                        <span> 1800-420-5757</span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li >
                                                <span role="button" className="fs-14   text-dark mb-2 d-inline-flex gap-1">
                                                    <span>
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"></path></svg>
                                                    </span>
                                                    <span className="d-flex flex-column -mt-3" >
                                                        <span className="text-secondary fs-12">Visit Us</span>
                                                        <span>(10AM to 7PM)</span>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            )
                    }

                </div>
            </div >
        </section >
    )
}

export default MorePopUp

"use client";
import "../../globals.css";
import React, { useEffect } from 'react';
import { useState } from 'react';
import dynamic from "next/dynamic";
const ApplyJob=dynamic(()=>import('@/app/components/ApplyJob/ApplyJob'),{ssr:false});

import { AnimatePresence } from "framer-motion"

import axios from 'axios';

const JobDetail = ({Ids}) => {

    let apiUrl=process.env.NEXT_PUBLIC_API_URL;
    const [apply, setapply] = useState(false);


    const  Id  = Ids;

    const [joblist, setjoblist] = useState([]);

    const getSingleJob = async () => {
        let a = await axios.post(`${apiUrl}get-Single-Job1`, {
            Id: Id
        });
        setjoblist(a.data);

    }
    useEffect(() => {
        const fetchData = async () => {
            await getSingleJob();

        }
        fetchData();
    }, [joblist]);


    const handleButtonClick = async () => {


        setapply(!apply);



    };
    return <div>
        {
            joblist.map((v) =>
            (
                <>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="bgprimary py-4 sticky-top shadow-sm" style={{ zIndex: 1 }}>
                                    <div className="container">
                                        <div className="col-12 col-lg-9 mx-auto col">
                                            <div className="row">
                                                <div className="col mx-auto col">
                                                    <p className="text-white h3 fw-bold">{v.jobtype}</p>
                                                    <p className="text-white m-0 fs-14">Department : B2C/ODL-OL/Sales/CV3</p>
                                                    <p className="text-white m-0 fs-14">Work Type : {v.jobmode} </p>
                                                </div>
                                                <div className="d-flex align-items-center col-12 col-lg-4 col">
                                                    <button onClick={handleButtonClick} className="bg-white textprimary rounded px-4 py-2 shadow d-block mt-3 fw-bold"
                                                        style={{ width: 'max-content' }}>

                                                        <span>Apply Now</span>
                                                    </button>
                                                    <AnimatePresence>{apply ? <ApplyJob close={() => setapply(!apply)} uniId={v.jobtype} /> : ""}</AnimatePresence>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="my-3 container">
                                <div className="row">
                                    <div className="col-12 col-lg-9 mx-auto col">
                                        <span>
                                            <h2 className='h2 bgdark'>Job Role &amp; Responsibilities</h2>
                                            <div className='C'><div className='' dangerouslySetInnerHTML={{ __html: v.responsilibity }} style={{ fontSize: '16px', wordSpacing: '1px', fontWeight: '900 !important' }}>
                                               
                                               </div></div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))
        }
    </div>;
}



export default JobDetail;
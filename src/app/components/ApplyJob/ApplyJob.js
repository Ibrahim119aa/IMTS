"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import LoginForm from "../Header/LoginForm"
import RegisterForm from "../Header/RegisterForm"
import ForgotForm from "../Header/ForgetForm"
import axios from "axios"

import { apiUrl, SaveImage } from "../utils/api"

const ApplyJob = ({ close, uniId }) => {

    const [jobreferenceList, setjobreference] = useState([]);

    const getJobReferenceList = async () => {
        let a = await axios.get(`${apiUrl}get-Job-Reference`);
        setjobreference(a.data);

    }
    const handleRadioChange = (e) => {
        formData.handledUG = e.target.value;

    };
    const [resumed, setresumed] = useState('');

    const handleResumeChange = (e) => {
        setresumed(e.target.files[0]);
    };



    const [formData, setFormData] = useState(
        {
            jobtype: uniId,
            fname: '',
            email: '',
            phone: '',
            reference: '',
            resume: '',
            experience: '',
            handledUG: '',
            hqualification: '',
            currentctc: '',
            yearsexp: '',

        }
    );
    const handleInputChange1 = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const addJobResponse = async (e) => {
        e.preventDefault();





        const SendImage = new FormData();
        SendImage.append("image", resumed);
        SaveImage(SendImage, "Image Successfully Store", apiUrl, "Save-Images")




        formData.resume = resumed != null ? resumed.name : '';

        console.log(formData);
        let a = await axios.post(`${apiUrl}Add-Job-Response`, formData);
        if (a.data.Status == true) {
            alert("Your Response Successfully Recorded");
            close()
        }
        else {

        }




    }
    useEffect(() => {

        const fetchData = async () => {
            await getJobReferenceList();
        }
        fetchData();

    }, [])

    const [experience, setExperience] = useState('');

    const handleInputChange2 = (e) => {
        setExperience(e.target.value);

    };
    const [selectedOption, setSelectedOption] = useState('');




    return (
        <>
            <style jsx>
                {
                    `
            @media (min-width: 250px) and  ( max-width: 639px) {
                .LeftCol
                {

                    
                    margin-left:-1.5rem;
                    margin-bottom:1rem;
                }
                .LeftCol img
                {
                    margin-top:150px;
                    margin-left
                    :-2rem;
                  width:300px;
                  height:150px;
                }
                .RightCol
                {
                   
                    margin-left:-2.2rem;
                    
                }
                .RightCol input
                {
                   
                    margin-left:-0.6rem;
                }
                .Closeup {
                   display:none;
                }
                .Show  {
                 
                
               display:block;
                 position: absolute;
                 width:20px;
                 height:20px;
                 top: 200px;
                 left:330px;
                
                }

                .RightCol textarea
                {
                   
                 
                    margin-left:-0.6rem;
                }
                .RightCol button
                {
                   
                 
                    margin-left:-0.6rem;
                }
                .RightCol select
                {
                   
                 
                    margin-left:-0.6rem;
                }
                
                .col-lg-4 {
                    width: 100%;
                    max-width: 100%;
                }
                .col-lg-8 {
                    width: 100%;
                    max-width: 100%;
                }
            }
            
           
            
            @media only screen and (min-width: 769px) and (max-width: 992px) {
                .col-lg-4 {
                    width: 40%;
                    max-width: 40%;
                }
                .col-lg-8 {
                    width: 60%;
                    max-width: 50%;
                }
            }
            `
                }

            </style>
            <section style={{ overflowX: 'hidden', overflowY: 'scroll', maxHeight: '100%', height: '100%' }} className='fixed overflow-y-scroll z-10 h-[200px]  left-0 top-0 h-full min-h-screen w-full bg-black/80 flex justify-center items-center z-10'>

                <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-[1000px] min-h-fit bg-white flex flex-col gap-6 justify-start mt-5 my-5 requires-no-scroll relative' style={{ overflowX: 'hidden', overflowY: 'scroll', maxHeight: '100%', height: '100%' }}>

                    <div className="container-fluid" style={{ overflowX: 'hidden', overflowY: 'scroll', maxHeight: '100%', height: '100%' }}>

                        <div className="row">


                            <div className="col-lg-12 RightCol col-md-7 col-sm-12">
                                <label for="small" className="fs-14 ml-5 fw-bold lab Heading">Apply For {uniId} </label>
                                <div className="Closeup CloseupLarge1"  >
                                    <i className='fa-solid fa-xmark text-xl cursor-pointer' onClick={() => close()}></i>
                                </div>
                                <form className="mt-1" onSubmit={addJobResponse}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">

                                                <div className='row mt-2'>


                                                    <div className='col-lg-6 mt-4 col-md-12  col-sm-12 '>

                                                        <label for="name">Full Name</label>
                                                        <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} placeholder="Your Full Name" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>
                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 '>

                                                        <label for="name">Email </label>
                                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>

                                                </div>
                                                <div className='row mt-3'>


                                                    <div className='col-lg-6 col-md-12   col-sm-12 '>
                                                        <label for="name">Mobile Number</label>
                                                        <PhoneInput
                                                            countryCodeEditable={false}
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={(value) => handleInputChange1("phone", value)}
                                                            country={"in"}
                                                        />


                                                    </div>
                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 RFullNameCol'>
                                                        <select name="reference" value={formData.reference} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
                                                            <option>
                                                                Select Reference
                                                            </option>
                                                            {jobreferenceList.map((n,k) => (
                                                                <option key={k} value={n.id}>
                                                                    {n.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <label for="name">Reference/Source</label>

                                                    </div>

                                                </div>
                                                <div className="mt-3 row">
                                                    <div className="col-12 col-md-6 col">
                                                        <div>
                                                            <label className="form-label">
                                                                Resume<span style={{ color: 'red' }}>*</span>
                                                            </label>
                                                            <input
                                                                accept="application/pdf"
                                                                id="resume-file"
                                                                type="file"
                                                                className="d-none"
                                                                name="resume"
                                                                onChange={handleResumeChange}
                                                            />
                                                            <div>
                                                                <button
                                                                    type="button"
                                                                    className="p-button p-component bgprimary border-0"
                                                                    onClick={() => document.getElementById('resume-file').click()}
                                                                >
                                                                    <span className="p-button-icon p-c p-button-icon-left pi pi-add">{resumed.name}</span>
                                                                    <span className="p-button-label p-c"> {resumed == '' ? 'Select Resume' : ''}  </span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row '>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <label for="small" className="fs-14  fw-bold lab Heading">Applications Questions </label>

                                                    </div>

                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div>
                                                            <label className="form-label">
                                                                How many years of Experience do you have in EdTech?
                                                                <span style={{ color: 'red' }}>*</span>
                                                            </label>
                                                            <div>
                                                                <input

                                                                    placeholder="Write Here..."
                                                                    name="experience"
                                                                    className={`p-inputtext p-component w-100 `}
                                                                    value={formData.experience}
                                                                    onChange={handleInputChange}

                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 col-lg-6">
                                                        <div>
                                                            <label className="form-label">
                                                                Have you handled UG &amp; PG Courses previously?
                                                                <span style={{ color: 'red' }}>*</span>
                                                            </label>
                                                            <div>
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="flexRadioDefault"
                                                                        value={"Yes"}

                                                                        onChange={handleRadioChange}
                                                                    />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                        Yes
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="flexRadioDefault"
                                                                        value={"No"}

                                                                        onChange={handleRadioChange}
                                                                    />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                        No
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div>
                                                            <label className="form-label">
                                                                What is Your Highest Qualification
                                                                <span style={{ color: 'red' }}>*</span>
                                                            </label>
                                                            <div>
                                                                <input
                                                                    name="hqualification"
                                                                    placeholder="Write Here..."
                                                                    className={`p-inputtext p-component w-100 `}
                                                                    value={formData.hqualification}
                                                                    onChange={handleInputChange}
                                                                    tp-global-watched="true"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-12  col-sm-12'>
                                                        <label className="form-label">
                                                            What is Your Current CTC
                                                            <span style={{ color: 'red' }}>*</span>
                                                        </label>
                                                        <textarea placeholder="Enter Message Here" name="currentctc" value={formData.currentctc} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">

                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>


                                                    <div className='col-lg-6 mt-4 col-md-12  col-sm-12 '>

                                                        <label for="name">How Many years of Experience you have in this role?</label>
                                                        <input type="text" name="yearsexp" value={formData.yearsexp} onChange={handleInputChange} placeholder="Write Here" className="p-inputtext mt-2 p-component p-filled w-100 form-control" />

                                                    </div>


                                                </div>

                                                <div className='row mt-3'>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 RFullNameCol'>
                                                        <button type="submit" class="btn mt-4 w-100 btn-primary">Submit</button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </motion.div>
            </section>
        </>


    )
}

export default ApplyJob;

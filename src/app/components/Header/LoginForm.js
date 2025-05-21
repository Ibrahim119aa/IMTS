"use client";
import React, { useState } from "react"

import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import {useRouter as useNavigate} from "next/navigation";
import Link from 'next/link';
import { apiUrl } from "../utils/api"
import Image from "next/image";
import axios from "axios";


const LoginForm = ({ setReg, close, name, logo }) => {
   const [otpOp, setOtpOp] = useState(false)
    const [otp, setOtp] = useState(0)
    const [status, setStatus] = useState(0)
    const navigate = useNavigate()


    const handleInputChange = (e) => {
        const { name, value } = e.target;




        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };







    const [formData, setFormData] = useState(
        {

            email: '',

            password: ''
        }
    );


    const userLogin = async (e) => {
        e.preventDefault();


        let a = await axios.post(`${apiUrl}User-Login`, formData, {
            withCredentials: true
        });




        if (a.data.Status == true) {


            alert("Your Successfully Login");

            window.location.href = "/Dashboard";

        }
        else {
            alert("Incorrect Email or Password");
        }


    }

    return (
        <>

            <>
                <div className='container-fluid mt-lg-5  '>
                    <div className="row">
                        <div className="col-lg-2 col2sm  col-sm-4 col-md-2">
                            <Image priority width={50} height={50}   src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-20' />



                        </div>
                        <div className="col-lg-2 col6sm col-sm-6 col-lg-md-2">
                            <p className="mt-3" style={{ marginLeft: '-1rem', fontSize: '16px' }}>
                            <strong className="text-dark" style={{ fontWeight: '200 !important' }}>IMTS</strong>


                            </p>
                        </div>
                        <div className="col-lg-7 col0sm col-sm-0">

                        </div>
                        <div className="col-lg-1 col1sm  mt-4">

                            <svg style={{ marginLeft: '1rem', opacity: '0.9', fontSize: '1.2em', fontWeight: '800 !important', cursor: 'pointer', color: '#1c4980' }} onClick={() => close()} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" font-size="18" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>

                        </div>
                    </div>




                </div>
                <h4 className='font-bold '>Sign in to get started</h4>
                <h6>
                    New User?{" "}
                    <button onClick={() => setReg()} className='text-primary'>
                        Sign Up
                    </button>
                </h6>
                <form onSubmit={userLogin} className='flex flex-col gap-6 '>
                    <PhoneInput className='w-full' placeholder='enter your phone number' countryCodeEditable={false} country={"in"} />
                    <p className='text-sm font-medium text-center'>OR</p>
                    <div className='row '>
                        <div className='col-lg-12 col-sm-12 RFullNameCol'>


                            <input type='email' name="email" value={formData.email} onChange={handleInputChange} className='RFullName'></input>
                            <label for="name">Email*</label>

                        </div>

                    </div>
                    <div className='row '>
                        <div className='col-lg-12 col-sm-12 RFullNameCol'>


                            <input type='password' name="password" value={formData.password} onChange={handleInputChange







                            } className='RFullName' ></input>
                            <label for="name">Password*</label>

                        </div>

                    </div>
                    <div className='row my-1'>
                        <div className='col-lg-12 col-sm-12 '>
                            <button aria-label="Find Best University" type="submit" className="p-button mt-0 py-3 border-0 bgprimary w-100"><span class="p-button-icon p-c p-button-icon-right pi pi-arrow-right"></span><span class="p-button-label p-c">Submit</span></button>

                        </div>

                    </div>
                </form>
            </>


        </>
    )
}

export default LoginForm

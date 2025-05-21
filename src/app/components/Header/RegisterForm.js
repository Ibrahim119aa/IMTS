"use client";
import React, { useEffect, useState } from "react"

import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import { apiUrl } from "../utils/api";
import axios from "axios";
import {Link,useRouter as useNavigate} from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getStateList, getStateListCache } from "../../_redux/itemSlice";
import Image from "next/image";

const RegisterForm = ({ setLog, close, name, logo }) => {

    const n = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;




        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };


    const [phone, setPhone] = useState(
        {
            phone: ''
        }
    );

    const handleInputChange1 = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const [formData, setFormData] = useState(
        {
            Name: '',
            email: '',
            phone: '',
            city: '',
            dob: '',
            state: '',
            country: 'india',
            gender: 'male',
            password: ''
        }
    );

    const [courseList, setcourseList] = useState([]);

    const getCourseList = async () => {
        let a = await axios.get(`${apiUrl}get-Course`);

        setcourseList(a.data);
    }
    const addUser = async (e) => {


        e.preventDefault();

        console.log(formData);


        let a = await axios.post(`${apiUrl}Add-User`, formData,
            {
                withCredentials: true
            });
        console.log(a.data.Status);

        console.log(a.data.username);


        alert("Your Successfully Registered");





        window.location.href = "/Dashboard";








    }
    const state=useSelector(getStateListCache);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getStateList());
        getCourseList();

    }, [courseList,dispatch]);


    return (
        <>


            <form className='flex flex-col   register'  onSubmit={addUser}>
                <div className='container-fluid mt-2  '>
                    <div className="row">
                        <div className="col-lg-2 col-sm-2 col2sm col-md-2">
                            <Image width={50} height={50} priority src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-20' />



                        </div>
                        <div className="col-lg-2 col-sm-6 col6sm col-lg-md-2">
                       
                            <p className="mt-lg-3" style={{ marginLeft: '-1rem', fontSize: '16px' }}>
                            <strong className="text-dark" style={{ fontWeight: '200 !important' }}>IMTS</strong>
                            </p>
                        </div>
                        <div className="col-lg-7 col-sm-0 col0sm">

                        </div>
                        <div className="col-lg-1 col-sm-1 col1sm mt-3 ">
                            <svg style={{ marginLeft: '1rem', opacity: '0.9', fontSize: '1.2em', fontWeight: '800 !important', cursor: 'pointer', color: '#1c4980' }} onClick={() => close()} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" font-size="18" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        </div>
                    </div>




                </div>
                <div className="row">
                    <h4 className='font-bold text-dark mt-3'>Sign up to get started</h4>
                    <h6 className="text-dark mt-3 ">
                        Already Registered?{" "}
                        <button onClick={() => setLog()} className='text-primary'>
                            Sign In
                        </button>
                    </h6>
                </div>

                <div className='row mt-4 '>
                    <div className='col-lg-12 col-sm-12 RFullNameCol'>


                        <input type='text' name="Name" value={formData.Name} onChange={handleInputChange} className='RFullName'></input>
                        <label for="name">Full Name*</label>

                    </div>

                </div>
                <div className='row mt-2'>
                    <div className='col-lg-12 col-sm-12 RFullNameCol'>


                        <input type='email' name="email" value={formData.email} onChange={handleInputChange} className='RFullName'></input>
                        <label for="name">Email*</label>

                    </div>

                </div>
                <div className='row mt-2'>
                    <div className='col-lg-12 col-sm-12 RFullNameCol'>


                        <input type='password' name="password" value={formData.password} onChange={handleInputChange







                        } className='RFullName' ></input>
                        <label for="name">Password*</label>

                    </div>

                </div>
                <div className='row mt-2'>
                    <div className='col-lg-12 col-sm-12 RFullNameCol'>

                        <PhoneInput
                            countryCodeEditable={false}
                            name="phone"
                            value={phone.phone}
                            onChange={(value) => handleInputChange1("phone", value)}
                            country={"in"}
                        />
                        <label for="name">Mobile Number*</label>

                    </div>

                </div>
                <div className='row mt-2'>
                    <div className='col-lg-12 col-sm-12 RFullNameCol'>


                        <input type='date' name="dob" value={formData.dob} onChange={handleInputChange} className='RFullName px-4'></input>
                        <label for="name">Date Of Birth*</label>

                    </div>

                </div>


                <div className='row mt-2'>
                    <div className='col-lg-12 col-sm-12 RFullNameCol'>


                        <select name="state" value={formData.state} onChange={handleInputChange} className='RFullName px-4'>
                            <option>
                                Select Course
                            </option>
                            {
                                courseList.map((n,k) =>
                                (
                                    <option key={k} value={n.id}>
                                        {n.courename}
                                    </option>
                                ))
                            }


                        </select>
                        <label for="name">Select Course*</label>

                    </div>

                </div>

                <div className='row mt-2'>
                    <div className='col-lg-12 col-sm-12 RFullNameCol'>



                        <select name="city" value={formData.city} onChange={handleInputChange} className='RFullName px-4'>
                            <option>
                                Select State
                            </option>
                           {
                            state.map((r,k)=>
                            (
                                <option key={k} value={r.id}>{r.name}</option>
                            ))
                           }

                        </select>
                        <label for="name">Select State*</label>
                    </div>

                </div>

                <div className='row my-1'>
                    <div className='col-lg-12 col-sm-12 '>
                        <button aria-label="Find Best University" type="submit" className="p-button mt-0 py-3 border-0 bgprimary w-100"><span class="p-button-icon p-c p-button-icon-right pi pi-arrow-right"></span><span class="p-button-label p-c">Submit</span></button>

                    </div>

                </div>


            </form>

        </>
    )
}

export default RegisterForm

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"


import axios from "axios"

import { apiUrl } from "../../_utils/api"
import { useDispatch, useSelector } from "react-redux"
import { getCityList, getCityListCache, getCourse, getCourseListDetail, getHomePage, getHomePageDetail, getStateList, getStateListCache } from "../../_redux/itemSlice"

const UniversityApply1 = ({ close, uniId }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [isForgot, setIsForgot] = useState(false)









    const [formData, setFormData] = useState(
        {
            id: uniId,
            fname: '',
            email: '',
            phone: '',
            course: '',
            city: '',
            message: '',

        }
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;




        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };
    const addLead = async (e) => {
        e.preventDefault();




        let a = await axios.post(`${apiUrl}Add-Leads`, formData);
        if (a.data.Status == true) {
            alert("Your Response Successfully Recorded");
            close()
        }
        else {

        }




    }
    const dispatch = useDispatch();
    useEffect(() => {



        const fetchData = async () => {
            await dispatch(getHomePage()).unwrap();
            await dispatch(getStateList()).unwrap();


        }
        fetchData();



    }, [])


    courseList
    const a = useSelector(getHomePageDetail);
    const courseList = (a == undefined || a.length == 0) ? [] : a.course;

    const statelist = useSelector(getStateListCache);
    const citylist = useSelector(getCityListCache);

    const getCityListHere = async (id) => {
        await dispatch(getCityList(id)).unwrap();

    }
    return (

        <section className='fixed  left-0 top-0 h-full min-h-screen w-full bg-black/80 flex justify-center items-center ' style={{ overflowX: 'hidden', zIndex: '1000' }}>

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
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-full min-h-fit bg-white flex flex-col gap-6 justify-start mt-5 my-5 requires-no-scroll relative' >

                <div className="container-fluid" style={{ overflowX: 'hidden' }}>

                    <div className="row">


                        <div className="col-lg-12 RightCol col-md-7 col-sm-12">
                            <div className="row leadformrow1">
                                <div className=" col-lg-12 col-md-12 col-sm-12">
                                    <label for="small" className="fs-14 ml-5 fw-bold lab Heading">Please Enter Your Detail </label>
                                    <svg className="float-right" style={{ opacity: '0.9', fontSize: '1.2em', fontWeight: '800 !important', cursor: 'pointer', color: '#1c4980' }} onClick={() => close()} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" font-size="18" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>

                                    <p className="text-primary fs-14 ml-5 font-bold Para">Please  register to get more information</p>

                                </div>


                            </div>



                            <div className="row">
                                <form className="mt-1" onSubmit={addLead}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">

                                                <div className='row mt-2'>


                                                    <div className='col-lg-6 mt-4 col-md-12  col-sm-12 '>


                                                        <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} placeholder="Your Full Name" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>
                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 '>


                                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>

                                                </div>
                                                <div className='row'>


                                                    <div className='col-lg-6 col-md-12 mt-4  col-sm-12 '>


                                                        <input type="number" name="phone" onChange={handleInputChange} value={formData.phone} placeholder="Your Mobile Number" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>
                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 RFullNameCol'>
                                                        <select name="course" value={formData.course} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
                                                            <option>
                                                                Select Course
                                                            </option>
                                                            {courseList.map((n,k) => (
                                                                <option key={k} value={n.id}>
                                                                    {n.course}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                </div>

                                                <div className='row '>
                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 RFullNameCol'>
                                                        <select name="state" className="p-inputtext p-component p-filled w-100 form-control" onChange={(e) => getCityListHere(e.target.value)}>
                                                            <option value=''>
                                                                Select State
                                                            </option>
                                                            {statelist.map((e) => (
                                                                <option key={e.id} value={e.id}>
                                                                    {e.name}
                                                                </option>
                                                            ))}


                                                        </select>
                                                    </div>


                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 RFullNameCol'>
                                                        <select name="city" value={formData.city} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
                                                            <option value=''>
                                                                Select City
                                                            </option>
                                                            {
                                                                citylist.map((e,k) =>
                                                                (
                                                                    <option key={k} value={e.id}>
                                                                        {e.name}
                                                                    </option>
                                                                ))
                                                            }

                                                        </select>
                                                    </div>

                                                </div>
                                                <div className='row '>

                                                    <div className='col-lg-12 col-md-12 mt-4 col-sm-12 RFullNameCol'>
                                                        <textarea placeholder="Enter Message Here" name="message" value={formData.message} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">

                                                        </textarea>
                                                    </div>

                                                </div>
                                                <div className='row mt-1'>

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
                </div>

            </motion.div>
        </section>


    )
}

export default UniversityApply1;

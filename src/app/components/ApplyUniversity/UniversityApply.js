"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

import axios from "axios"
import { useMediaQuery } from "react-responsive";
import { apiUrl } from "../utils/api"


import { useDispatch, useSelector } from "react-redux"
import { getCityList, getCityListCache, getCourse, getCourseListDetail, getStateList, getStateListCache, getHomePageDetail } from "../../_redux/itemSlice"
import { useRouter as useNavigate } from "next/navigation"



const UniversityApply = ({ close, uniId }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [isForgot, setIsForgot] = useState(false)


    const a = useSelector(getHomePageDetail);
    const courseList = (a == undefined || a.length == 0) ? [] : a.universitypage.course;





    const [universityList, setuniversityList] = useState([]);

    const getUniversity = async () => {
        let a = await axios.post(`${apiUrl}get-Single-University1`, { Id: uniId });








        if (a.data.length > 0) {
            setuniversityList(a.data);

        }

    }


    const [formData, setFormData] = useState(
        {
            id: uniId,
            fname: '',
            email: '',
            phone: '',
            course: '',
            city: '',
            state: '',
            message: '',

        }
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;




        if (name == "city") {
            getCityListHere(value);

        }
        else {

        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };

    const dispatch = useDispatch();
    const n = useNavigate();
    const CloseUp = () => {
        if (uniId == "1") {
            n.push("/");
        }
        else {
            close();
        }
    }
    useEffect(() => {



        const fetchData = async () => {

            await dispatch(getStateList()).unwrap();

            await getUniversity();
        }
        fetchData();



    }, [dispatch])

    const statelist = useSelector(getStateListCache);
    const citylist = useSelector(getCityListCache);

    const getCityListHere = async (id) => {
        await dispatch(getCityList(id)).unwrap();

    }
    const [checkNull, setcheckNull] = useState(false);
    const addLead = async (e) => {
        e.preventDefault();






        if (!checkNull) {
            let a = await axios.post(`${apiUrl}Add-Leads`, formData);
            if (a.data.Status == true) {
                alert("Your Response Successfully Recorded");
                close()
            }
            else {

            }

        }



    }
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <section className={`fixed smse1  left-0 top-0 h-full min-h-screen w-full bg-black/80 flex ${isMobile ? '' : 'justify-center'}  items-center `} style={{ overflowX: 'hidden', zIndex: '200' }}>

            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }}
                id="leadformwidth" className='p-sm-1  smse rounded  min-h-fit bg-white flex flex-col  justify-start  requires-no-scroll relative' >

                <div className="container-fluid leadform1" style={{ overflowX: 'hidden' }}>

                    <div className="row">
                        <div className="col-lg-5 col-md-5 leadformleft smd">
                            <h3 className="h4  h3color mx-4">How We Can Help You in Education</h3>

                            <div className="container-fluid">
                                <div className="row mt-3">
                                    <div className="col-lg-6  ">
                                        <div className="jsx-117800939 card card-body p-4  text-center  flex-fill">
                                            <span className="jsx-117800939 icon icon-lead mb-2">
                                                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 79.5 56.8" xmlSpace="preserve">
                                                    <style>
                                                        {`
          .stlead1 { fill: #fff; }
          .stlead11 { fill: #ea6a00; }
          .stlead23 { fill: none; stroke: #444; stroke-linecap: round; stroke-miterlimit: 10; }
        `}
                                                    </style>
                                                    <path id="Path_3_1_" d="M70.3 36.9c0 6.9-2.1 13.7-6.1 19.4H8.6C-2.1 41 1.6 19.9 17 9.1s36.5-7 47.2 8.4c4 5.7 6.1 12.5 6.1 19.4z" style={{ fill: 'rgb(255, 249, 244)' }}></path>
                                                    <path id="Path_5_1_" className="stlead1" d="M54.1 42.4h-3v-3l3 3z"></path>
                                                    <path id="Rectangle_7_1_" transform="rotate(-45.001 66.634 27.246)" className="stlead1" d="M64.8 25.1h3.7v4.2h-3.7z"></path>
                                                    <g id="Group_9_1_" transform="rotate(-169 54.88 54.48)">
                                                        <path id="Path_74-2_1_" className="stlead11" d="M85.1 104c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zm0-9.9c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5c0-2.4-2-4.5-4.5-4.5z"></path>
                                                    </g>
                                                    <g id="Group_13_1_" transform="rotate(-169 75.957 57.72)">
                                                        <circle id="Ellipse_7-2_1_" className="stlead11" cx="81.6" cy="95.2" r="1.8"></circle>
                                                    </g>
                                                    <g id="Group_30_1_" transform="translate(61 163.052)">
                                                        <path id="Line_20_1_" className="stlead23" d="M11.3-106.9h-61.6"></path>
                                                        <path id="Line_21_1_" className="stlead23" d="M-52.6-106.9h-7.9"></path>
                                                    </g>
                                                    <path d="m54.1 999.7-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4 1-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm20.4-5.9-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4-1-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0-6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm20.4-2.9-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm-19.9 10.7-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0-6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm20.4-2.9-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm.5 4.8-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0 4.9-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4-19.6-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0 6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0 6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0 6.9-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm20.4-1-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0-4.9-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0-17.6-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm.5-12.8-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm.5 4.8-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0 4.9-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4 1-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0-6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm-9.9-6.9 9.8 1c.3.1.6-.2.6-.4 0-.3-.2-.6-.5-.5l-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.3.4.5.4zm35.8-9.2h-.1l-20.5 2-20.5-2c-.3 0-.5.2-.5.5v37.2c0 .2.2.5.4.5l20.5-.1 20.6.1c.2 0 .4-.2.4-.5v-37.2c.1-.3-.1-.5-.3-.5zm-21.1 37L19 1006v-34.2l19.5 1.9v34.2zm20.5.2-19.5-.1v-34.2l19.5-1.9v36.2zm-14.6-16.3 9.8-1c.2 0 .4-.2.4-.5v-12.7c0-.2-.2-.5-.5-.5l-9.8 1c-.2 0-.5.2-.5.5v12.7c.1.3.3.6.6.5zm.5-12.7 8.8-.9V990l-8.8.9v-11.8zm-.5 17.6 9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.5-.5-.5l-9.8 1c-.3 0-.5.3-.5.5 0 .4.3.6.6.5zm0 4.9 9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.5-.5-.5l-9.8 1c-.3 0-.5.2-.5.5 0 .4.3.6.6.5zm-20.6-1 9.8 1c.3.1.6-.1.6-.4 0-.3-.2-.5-.5-.5l-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.3.4.5.4zm0-6.8 9.8 1c.3.1.6-.2.6-.4 0-.3-.2-.5-.5-.5l-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.3.4.5.4zm0-6.8 9.8 1c.3.1.6-.1.6-.4 0-.3-.2-.5-.5-.5l-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .1.3.4.5.4zm0-6.9 9.8 1c.3.1.6-.2.6-.4 0-.3-.2-.6-.5-.5l-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.3.4.5.4zm9.9 0-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0 6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0 6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0 6.9-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm20.4-1-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0-4.9-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0-17.6-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm.5-12.8-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm.5 4.8-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0 4.9-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4 1-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0-6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6z" transform="translate(0 -952.362)" style={{ fill: 'rgb(68, 68, 68)' }}></path>
                                                    <path d="m54.1 999.7-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4 1-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm20.4-5.9-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4-1-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0-6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm20.4-2.9-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm-19.9 10.7-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0-6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0-6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm20.4-2.9-9.8 1c-.2 0-.5.2-.5.5v12.7c0 .3.3.5.5.5l9.8-1c.2 0 .4-.2.4-.5v-12.7c.1-.2-.1-.5-.4-.5zm-.5 12.8-8.8.9v-11.7l8.8-.9V990zm.5 4.8-9.8 1c-.3 0-.5.3-.5.5 0 .3.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm0 4.9-9.8 1c-.3 0-.5.2-.5.5s.3.5.6.4l9.8-1c.2 0 .4-.2.4-.5 0-.2-.2-.4-.5-.4zm-20.4-19.6-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0 6.9-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.6-.5-.6zm0 6.8-9.8-1h-.1c-.3 0-.5.2-.5.5s.2.5.5.5l9.8 1c.3.1.6-.2.6-.4 0-.3-.3-.6-.5-.6zm0 6.9-9.8-1h-.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5l9.8 1c.3.1.6-.1.6-.4 0-.4-.3-.7-.5-.6z"></path>
                                                </svg>
                                                <p className="fs-12  mb-0  font-bold h3color">Step 1</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="jsx-117800939 card card-body p-4  text-center flex-fill">
                                            <span className="jsx-117800939 icon icon-lead mb-2">
                                                <svg
                                                    id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0"
                                                    y="0"
                                                    viewBox="0 0 72.9 54.3"
                                                    xmlSpace="preserve"
                                                >
                                                    <style>
                                                        {`
          .stcheck1 { fill: #fff; }
          .stcheck7 { fill: #a0e6ff; }
          .stcheck23 { fill: none; stroke: #444; stroke-linecap: round; stroke-miterlimit: 10; }
        `}
                                                    </style>
                                                    <path
                                                        id="Path_2_1_"
                                                        d="M70.3 34.3c0 6.9-2.1 13.7-6.1 19.4H8.7C-2.1 38.4 1.7 17.3 17 6.6 32.3-4.1 53.5-.4 64.2 15c4 5.6 6.1 12.4 6.1 19.3z"
                                                        style={{ fill: 'rgb(237, 250, 255)' }}
                                                    ></path>
                                                    <g id="Group_1_1_" transform="translate(236 158.717)">
                                                        <path id="Line_18_1_" className="stcheck23" d="M-163.7-105h-61.5"></path>
                                                        <path id="Line_19_1_" className="stcheck23" d="M-227.5-105h-7.9"></path>
                                                    </g>
                                                    <g id="Group_17_1_" transform="rotate(180 152.226 63.87)">
                                                        <path
                                                            id="Path_74_1_"
                                                            className="stcheck7"
                                                            d="M238.9 119.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3c0 3-2.4 5.3-5.3 5.3zm0-9.8c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"
                                                        ></path>
                                                    </g>
                                                    <g id="Group_18_1_" transform="rotate(180 136.236 55.468)">
                                                        <circle
                                                            id="Ellipse_7_1_"
                                                            className="stcheck7"
                                                            cx="235.4"
                                                            cy="110.8"
                                                            r="1.8"
                                                        ></circle>
                                                    </g>
                                                    <path
                                                        d="m38.3 15.2-24 12.3 3.8 2v20.7h1.1V30l5.3 2.7v15.6c0 1.1.7 2.2 2 3 2.4 1.7 6.8 2.8 11.9 2.8 7.8 0 13.9-2.6 13.9-5.9V32.8l10.2-5.2-24.2-12.4zm12.8 33.1c0 2.3-5.1 4.8-12.8 4.8-5.1 0-9.1-1.1-11.2-2.5-1-.7-1.6-1.5-1.6-2.3v-15l12.8 6.5 12.8-6.5v15zm0-16.2-12.8 6.5-12.8-6.5-9-4.6 21.8-11.1 21.8 11.1-9 4.6z"
                                                        style={{ fill: 'rgb(68, 68, 68)' }}
                                                    ></path>
                                                    <path
                                                        className="stcheck1"
                                                        d="M51.1 33.3v15c0 2.3-5.1 4.8-12.8 4.8-5.1 0-9.1-1.1-11.2-2.5 1-1.3 1.6-2.9 1.6-4.7 0-2.6-1.3-4.9-3.2-6.2v-6.4l12.8 6.5 12.8-6.5z"
                                                    ></path>
                                                    <path
                                                        className="stcheck1"
                                                        d="m60.1 27.5-9 4.6-12.8 6.6-12.7-6.6-9-4.6 21.7-11.1z"
                                                    ></path>
                                                    <path
                                                        d="M28.8 45.9c0 1.8-.6 3.4-1.6 4.7-.2.3-.5.5-.7.8-1.4 1.3-3.3 2.2-5.3 2.2-4.2 0-7.7-3.4-7.7-7.7 0-3.2 1.9-5.9 4.6-7 .3-.1.7-.3 1.1-.4.6-.2 1.3-.2 2-.2 1.2 0 2.4.3 3.4.8.4.2.7.4 1.1.6 1.8 1.3 3.1 3.6 3.1 6.2z"
                                                        style={{
                                                            fill: 'rgb(160, 230, 255)',
                                                            stroke: 'rgb(68, 68, 68)',
                                                            strokeMiterlimit: 10,
                                                        }}
                                                    ></path>
                                                    <path
                                                        className="stcheck1"
                                                        d="M21.4 43v1.6-.1c0 .2-.1.3-.1.4v-.1c-.1.1-.1.3-.2.4 0 0 0-.1.1-.1l-.3.3s.1 0 .1-.1c-.1.1-.2.2-.4.2h.1c-.1.1-.3.1-.4.1h.1-1.2c-.2 0-.4.2-.4.4v.1c0 .1 0 .2.1.3l.1.1.3.3.9.9.9.9.4.4c.2.2.4.2.6 0 .2-.2.2-.4 0-.6l-.4-.4-.9-.9-.9-.9-.4-.4c0 .1.1.2.1.3V46l-.4.4h1c.4 0 .8-.1 1.1-.4.3-.2.6-.5.7-.8.1-.2.1-.4.2-.5V43c0-.2-.2-.4-.4-.4s-.4.2-.4.4z"
                                                    ></path>
                                                    <path
                                                        className="stcheck1"
                                                        d="M19.1 43.4H23c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H19.1c-.2 0-.4.2-.4.4s.2.4.4.4zM23.1 44.1H19.2c-.2 0-.4.2-.4.4s.2.4.4.4H23.1c.2 0 .4-.2.4-.4s-.2-.4-.4-.4z"
                                                    ></path>
                                                </svg>
                                                <p className="fs-12  mb-0  font-bold h2color">Step 2</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-6  ">
                                        <div className="jsx-117800939 card card-body p-4  text-center  flex-fill">
                                            <span className="jsx-117800939 icon icon-lead mb-2">
                                                <svg
                                                    id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0"
                                                    y="0"
                                                    viewBox="0 0 72.9 57.8"
                                                    xmlSpace="preserve"
                                                >
                                                    <style>
                                                        {`
        .stshortlist4{fill:#444}
        .stshortlist1short3{fill:#fc9684}
        .stshortlist2short3{fill:none;stroke:#444;stroke-linecap:round;stroke-miterlimit:10}
      `}
                                                    </style>
                                                    <g id="Group_4_2_" transform="translate(432.564 51.441)">
                                                        <path
                                                            id="Path_40_2_"
                                                            d="M-362.3-14.3c0 6.9-2.1 13.7-6.1 19.4h-55.5c-10.7-15.3-7-36.4 8.3-47.1s36.4-7 47.1 8.3c4.1 5.7 6.2 12.4 6.2 19.4z"
                                                            style={{ fill: "rgb(255, 245, 244)" }}
                                                        />
                                                        <g id="Group_56_2_" transform="translate(0 53.801)">
                                                            <path
                                                                id="Line_22_2_"
                                                                className="stshortlist2short3"
                                                                d="M-360.3-48.2h-61.5"
                                                            />
                                                            <path
                                                                id="Line_23_2_"
                                                                className="stshortlist2short3"
                                                                d="M-424.1-48.2h-7.9"
                                                            />
                                                        </g>
                                                    </g>
                                                    <g id="Group_8_2_" transform="translate(471.703 48.244)">
                                                        <path
                                                            id="Path_74-3_2_"
                                                            className="stshortlist1short3"
                                                            d="M-426.7-37.6c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zm0-9.8c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"
                                                        />
                                                    </g>
                                                    <g id="Group_19_2_" transform="translate(490.649 59.794)">
                                                        <circle
                                                            id="Ellipse_7-3_2_"
                                                            className="stshortlist1short3"
                                                            cx="-430.2"
                                                            cy="-46.4"
                                                            r="1.8"
                                                        />
                                                    </g>
                                                    <path
                                                        className="stshortlist4"
                                                        d="M55.5 18.4H17.4c-.2 0-.5.2-.5.5v5.9c0 .1 0 .2.1.3L32 42v14.9c0 .2.1.3.2.4.1 0 .2.1.2.1.1 0 .2 0 .2-.1l7.9-4.6c.1-.1.2-.2.2-.4V42l15-16.9c.1-.1.1-.2.1-.3v-5.9c.1-.3-.1-.5-.3-.5zm-.5 6.2L40 41.5c-.1.1-.1.2-.1.3V52l-7 4.1V41.8c0-.1 0-.2-.1-.3l-15-16.9v-5.3H55v5.3z"
                                                    />
                                                    <path
                                                        d="M55 19.3v5.3L40 41.5c-.1.1-.1.2-.1.3V52l-7 4.1V41.8c0-.1 0-.2-.1-.3l-15-16.9v-5.3H55z"
                                                        style={{ fill: "rgb(255, 255, 255)" }}
                                                    />
                                                    <path
                                                        className="stshortlist4"
                                                        d="M17.4 25.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h13.8c.3 0 .5.2.5.5s-.2.5-.5.5H17.4zM37.1 42.3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.3c.3 0 .5.2.5.5s-.2.5-.5.5h-3.3zM48.9 25.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6.6c.3 0 .5.2.5.5s-.2.5-.5.5h-6.6zM37.7 25.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H41c.3 0 .5.2.5.5s-.2.5-.5.5h-3.3z"
                                                    />
                                                    <path
                                                        className="stshortlist1short3"
                                                        d="M17.8 19.3H55v5H17.8z"
                                                    />
                                                </svg>
                                                <p className="fs-12  mb-0  font-bold h3color">Step 3</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="jsx-117800939 card card-body p-4  text-center flex-fill">
                                            <span className="jsx-117800939 icon icon-lead mb-2">
                                                <svg
                                                    id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0"
                                                    y="0"
                                                    viewBox="0 0 72.5 54.3"
                                                    xmlSpace="preserve"
                                                >
                                                    <style>
                                                        {`.st1support{fill:#fff;}
          .st1support6{fill:#8baffa;}
          .st2supprot3supprot{fill:none;stroke:#444;stroke-linecap:round;stroke-miterlimit:10;}`}
                                                    </style>
                                                    <path
                                                        id="Path_11_1_"
                                                        d="M70 33.8c0 6.9-2.1 13.7-6.1 19.3H8.6c-10.7-15.3-7-36.3 8.3-47s36.3-7 47 8.3c4 5.7 6.1 12.5 6.1 19.4z"
                                                        fill="#f4f7ff"
                                                    />
                                                    <g id="Group_5_1_" transform="translate(236.082 248.661)">
                                                        <path id="Line_24_1_" className="st2supprot3supprot" d="M-164.1-195h-61.3" />
                                                        <path id="Line_25_1_" className="st2supprot3supprot" d="M-227.7-195h-7.9" />
                                                    </g>
                                                    <g id="Group_10_1_" transform="rotate(-169 161.895 92.77)">
                                                        <path
                                                            id="Path_74-4_1_"
                                                            className="st1support6"
                                                            d="M273.8 157.1c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zm0-9.9c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5c0-2.4-2-4.5-4.5-4.5z"
                                                        />
                                                    </g>
                                                    <g id="Group_14_1_" transform="rotate(-169 131.473 107.682)">
                                                        <circle id="Ellipse_7-4_1_" className="st1support6" cx="270.3" cy="148.3" r="1.8" />
                                                    </g>
                                                    <path
                                                        d="m53.3 39.4-3.9-6.8c-.4-2.5-1.2-6.1-3.2-9-1.9-2.8-4.8-4.5-8.5-5.1l-.4-.1V14c0-.3-.2-.5-.5-.5h-4.4c-.2 0-.5.3-.5.5v4.4h-.4c-4.1.5-7.3 2.3-9.4 5-1.9 2.5-2.9 6-2.9 9.9 0 4.6 2.1 8.9 5.7 11.7l.2.2v8.5c0 .3.3.5.5.5h13.1c.3 0 .5-.3.5-.5v-2.9H46c.3 0 .5-.3.5-.5v-8.8l6.4-1.3c.1 0 .3-.2.3-.3.1-.2.1-.4.1-.5zM32.9 14.5h3.3v12H32.9v-12zm1.6 12.8c1.6 0 3.1.7 4.2 2 1.4 1.7 1.6 3.8.7 5.7-.9 2-3 3.3-5.1 3.3-2.6 0-5-2.5-5.3-5.3.1-3.7 2.9-5.7 5.5-5.7zm11.4 13.3c-.2 0-.4.3-.4.5v8.7h-6.8c-.2 0-.5.3-.5.5v2.9H26.1V45c0-.2-.1-.3-.2-.4-3.5-2.5-5.6-6.8-5.6-11.2 0-3.7.9-6.9 2.7-9.3 1.9-2.5 4.7-4.1 8.4-4.6l.5-.1v7.4l-.2.1c-2.4 1.2-3.7 3.3-3.7 6 .1 3.1 3 6.1 6.4 6.3 3.6 0 6.8-3 6.8-6.3 0-2.5-1.4-4.8-3.6-5.8l-.3-.1v-7.4l.5.1c3.3.6 5.8 2.1 7.5 4.6 1.5 2.1 2.5 5 3.1 8.8 0 .1 0 .1.1.2l3.5 6.1-6.1 1.2z"
                                                        fill="#444"
                                                    />
                                                    <path className="st1support" d="M36.2 14.5v12H32.9v-12h3.3z" />
                                                    <path
                                                        className="st1support"
                                                        d="m52 39.3-6.1 1.3c-.2 0-.4.3-.4.5v8.7h-6.8c-.2 0-.5.3-.5.5v2.9H26.1V45c0-.2-.1-.3-.2-.4-3.5-2.5-5.6-6.8-5.6-11.2 0-3.7.9-6.9 2.7-9.3 1.9-2.5 4.7-4.1 8.4-4.6l.5-.1v7.9h5.4v-7.8l.5.1c3.3.6 5.8 2.1 7.5 4.6 1.5 2.1 2.5 5 3.1 8.8 0 .1 0 .1.1.2l3.5 6.1z"
                                                    />
                                                    <circle cx="35" cy="30.8" r="7.4" fill="#bad0ff" stroke="#444" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className="fs-12  mb-0  font-bold h2color">Step 4</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-6  ">
                                        <div className="jsx-117800939 card card-body p-4  text-center  flex-fill">
                                            <span className="jsx-117800939 icon icon-lead mb-2">
                                                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72.7 54.1" xmlSpace="preserve">
                                                    <style>
                                                        {`.st1scholarship{fill:#fff;}.st1scholarship9{fill:#bbebc6;}.st2scholarship3{fill:none;stroke:#444;stroke-linecap:round;stroke-miterlimit:10;}`}
                                                    </style>
                                                    <path id="Path_19_1_" d="M69.7 33.7c0 6.9-2.1 13.6-6.1 19.3H8.5C-2.1 37.7 1.6 16.8 16.8 6.2s36.2-7 46.8 8.3c4 5.6 6.1 12.3 6.1 19.2z" style={{ fill: 'rgb(244, 255, 246)' }} />
                                                    <g id="Group_6_1_" transform="translate(433.262 224.289)">
                                                        <path id="Line_26_1_" className="st2scholarship3" d="M-361.6-170.8h-61" />
                                                        <path id="Line_27_1_" className="st2scholarship3" d="M-424.9-170.8h-7.9" />
                                                    </g>
                                                    <path id="Path_20-2_1_" className="st1scholarship" d="M38.8 41.8v5.5l-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.5-.2z" />
                                                    <path id="Rectangle_13-2_1_" className="st1scholarship" d="M27.2 14.2h23v40h-23z" />
                                                    <path id="Rectangle_14-2_1_" className="st1scholarship9" d="M21.8 14.8h5.6v39h-5.6z" />
                                                    <path id="Path_21-2_1_" d="M46.2 19H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.2H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.1H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-10.1 4.1c-3.1 0-5.5 2.5-5.5 5.5 0 1.5.6 2.9 1.7 4l.1.1v7.4c0 .2.1.4.3.4h.2c.1 0 .2 0 .3-.1l2.9-2.5 2.9 2.5c.1.1.2.1.3.1h.2c.2-.1.3-.3.3-.4V41l.1-.1c1.1-1 1.7-2.5 1.7-4 0-3-2.5-5.5-5.5-5.5zm2.7 16-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.6-.2-.1 5.5zm-2.7-5.9c-2.5 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c2.5 0 4.6 2 4.6 4.6-.1 2.6-2.1 4.6-4.6 4.6zM46.2 19H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.2H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.1H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-10.1 4.1c-3.1 0-5.5 2.5-5.5 5.5 0 1.5.6 2.9 1.7 4l.1.1v7.4c0 .2.1.4.3.4h.2c.1 0 .2 0 .3-.1l2.9-2.5 2.9 2.5c.1.1.2.1.3.1h.2c.2-.1.3-.3.3-.4V41l.1-.1c1.1-1 1.7-2.5 1.7-4 0-3-2.5-5.5-5.5-5.5zm2.7 16-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.6-.2v5.5zm-2.7-5.9c-2.5 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c2.5 0 4.6 2 4.6 4.6-.1 2.6-2.1 4.6-4.6 4.6zm0-10.1c-3.1 0-5.5 2.5-5.5 5.5 0 1.5.6 2.9 1.7 4l.1.1v7.4c0 .2.1.4.3.4h.2c.1 0 .2 0 .3-.1l2.9-2.5 2.9 2.5c.1.1.2.1.3.1h.2c.2-.1.3-.3.3-.4V41l.1-.1c1.1-1 1.7-2.5 1.7-4 0-3-2.5-5.5-5.5-5.5zm2.7 16-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.6-.2v5.5zm-2.7-5.9c-2.5 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c2.5 0 4.6 2 4.6 4.6-.1 2.6-2.1 4.6-4.6 4.6zm10.1-14.2H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0-4.1H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" />
                                                    <path id="Path_23-2_1_" className="st1scholarship" d="M38.8 41.8v5.5l-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.5-.2z" />
                                                    <path id="Rectangle_15-2_1_" className="st1scholarship" d="M27.2 14.2h23v40h-23z" />
                                                    <path id="Rectangle_16-2_1_" className="st1scholarship9" d="M21.8 14.8h5.6v39h-5.6z" />
                                                    <path id="Path_24-2_1_" d="M46.2 19H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.2H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.1H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-10.1 4.1c-3.1 0-5.5 2.5-5.5 5.5 0 1.5.6 2.9 1.7 4l.1.1v7.4c0 .2.1.4.3.4h.2c.1 0 .2 0 .3-.1l2.9-2.5 2.9 2.5c.1.1.2.1.3.1h.2c.2-.1.3-.3.3-.4V41l.1-.1c1.1-1 1.7-2.5 1.7-4 0-3-2.5-5.5-5.5-5.5zm2.7 16-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.6-.2-.1 5.5zm-2.7-5.9c-2.5 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c2.5 0 4.6 2 4.6 4.6-.1 2.6-2.1 4.6-4.6 4.6zM46.2 19H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.2H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4.1H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-10.1 4.1c-3.1 0-5.5 2.5-5.5 5.5 0 1.5.6 2.9 1.7 4l.1.1v7.4c0 .2.1.4.3.4h.2c.1 0 .2 0 .3-.1l2.9-2.5 2.9 2.5c.1.1.2.1.3.1h.2c.2-.1.3-.3.3-.4V41l.1-.1c1.1-1 1.7-2.5 1.7-4 0-3-2.5-5.5-5.5-5.5zm2.7 16-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.6-.2v5.5zm-2.7-5.9c-2.5 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c2.5 0 4.6 2 4.6 4.6-.1 2.6-2.1 4.6-4.6 4.6zm0-10.1c-3.1 0-5.5 2.5-5.5 5.5 0 1.5.6 2.9 1.7 4l.1.1v7.4c0 .2.1.4.3.4h.2c.1 0 .2 0 .3-.1l2.9-2.5 2.9 2.5c.1.1.2.1.3.1h.2c.2-.1.3-.3.3-.4V41l.1-.1c1.1-1 1.7-2.5 1.7-4 0-3-2.5-5.5-5.5-5.5zm2.7 16-2.4-2c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.4 2v-5.5l.6.2c1.4.6 2.9.6 4.3 0l.6-.2v5.5zm-2.7-5.9c-2.5 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c2.5 0 4.6 2 4.6 4.6-.1 2.6-2.1 4.6-4.6 4.6zm10.1-14.2H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0-4.1H26c-.3 0-.5.2-.5.5s.2.5.5.5h20.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" />
                                                </svg>
                                                <p className="fs-12  mb-0  font-bold h4color">Step 5</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="jsx-117800939 card card-body p-4  text-center flex-fill">
                                            <span className="jsx-117800939 icon icon-lead mb-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 69.9 58.3"
                                                    xmlSpace="preserve"
                                                    className="leaddeadline-icon"
                                                >
                                                    <style>
                                                        {`
        .st1leaddeadline { fill: #fff; }
        .st4leaddeadline { fill: #444; }
        .st2leaddeadline1 { fill: #fea400; }
        .st2leaddeadline2 { fill: #fde2af; }
        .st2leaddeadline3 { fill: none; stroke: #444; stroke-linecap: round; stroke-miterlimit: 10; }
      `}
                                                    </style>
                                                    <g transform="translate(238.718 309.378)">
                                                        <path
                                                            d="M-169.2-271.3c0 6.9-2.1 13.6-6 19.2h-55c-10.6-15.2-6.9-36.1 8.3-46.7s36.1-6.9 46.7 8.3c3.9 5.6 6 12.3 6 19.2z"
                                                            className="st1leaddeadline"
                                                        />
                                                        <g transform="translate(0 53.277)">
                                                            <path className="st2leaddeadline3" d="M-167.2-304.9h-60.9" />
                                                            <path className="st2leaddeadline3" d="M-230.4-304.9h-7.8" />
                                                        </g>
                                                    </g>
                                                    <g transform="rotate(-169 158.96 144.37)">
                                                        <path
                                                            className="st2leaddeadline1"
                                                            d="M297.3 264.4c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zm0-9.8c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"
                                                        />
                                                    </g>
                                                    <g transform="rotate(-169 169.859 152.458)">
                                                        <circle className="st2leaddeadline1" cx="293.8" cy="255.6" r="1.8" />
                                                    </g>
                                                    <path
                                                        className="st4leaddeadline"
                                                        d="M54.6 30.2H17.4c-.3 0-.5.2-.5.5v25.2c0 1.3 1.1 2.4 2.5 2.4h33.2c1.4 0 2.5-1.1 2.5-2.4V30.7c0-.3-.2-.5-.5-.5zm-.4 25.7c0 .8-.7 1.5-1.5 1.5H19.4c-.9 0-1.5-.7-1.5-1.5V31.1h36.3v24.8z"
                                                    />
                                                    <path
                                                        className="st1leaddeadline"
                                                        d="M17.9 31.1v24.8c0 .8.7 1.5 1.5 1.5h33.2c.9 0 1.5-.7 1.5-1.5V31.1H17.9zM36 54.2c-5.5 0-10-4.5-10-9.9 0-5.5 4.5-10 10-10s10 4.5 10 10c0 5.4-4.5 9.9-10 9.9z"
                                                    />
                                                    <path
                                                        className="st4leaddeadline"
                                                        d="M25.9 18.1c-1.3 0-2.3 1-2.3 2.3v3.2c0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3v-3.2c0-1.3-1-2.3-2.3-2.3zm1.4 5.6c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-3.2c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4v3.2z"
                                                    />
                                                    <path className="st2leaddeadline2" d="M27.3 20.4v3.2c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-3.2c0-.8.6-1.4 1.4-1.4s1.4.7 1.4 1.4z" />
                                                    <path
                                                        className="st4leaddeadline"
                                                        d="M46.1 18.1c-1.3 0-2.3 1-2.3 2.3v3.2c0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3v-3.2c0-1.3-1-2.3-2.3-2.3zm1.4 5.6c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-3.2c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4v3.2z"
                                                    />
                                                    <path className="st2leaddeadline2" d="M47.5 20.4v3.2c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-3.2c0-.8.6-1.4 1.4-1.4s1.4.7 1.4 1.4z" />
                                                    <path
                                                        className="st4leaddeadline"
                                                        d="M52.6 21.4H48c-.3 0-.5.2-.5.5v1.8c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-1.8c0-.3-.2-.5-.5-.5H27.8c-.3 0-.5.2-.5.5v1.8c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-1.8c0-.3-.2-.5-.5-.5h-4.7c-1.4 0-2.5 1.1-2.5 2.4v6.8c0 .3.2.5.5.5h37.2c.3 0 .5-.2.5-.5v-6.8c.1-1.3-1-2.4-2.4-2.4zm-34.7 8.8v-6.4c0-.8.7-1.5 1.5-1.5h4.2v1.3c0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3v-1.3h15.6v1.3c0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3v-1.3h4.2c.9 0 1.5.7 1.5 1.5v6.4H17.9z"
                                                    />
                                                    <path
                                                        className="st4leaddeadline"
                                                        d="M27.5 44.8c-1 0-1.8-.8-1.8-1.8v-3.5c0-.6.5-1 1-1h17.6c.6 0 1 .5 1 1v3.5c0 1-.8 1.8-1.8 1.8H27.5zm-5-5.3c0 .5.4 1 .9 1h25.4c.5 0 .9-.5.9-1v-3.5c0-1.1-.9-1.8-1.9-1.8H22.6c-1 0-1.9.7-1.9 1.8v3.5z"
                                                    />
                                                    <path className="st2leaddeadline2" d="M47.4 40.7v3.5c0 1-.8 1.8-1.8 1.8H27.5c-1 0-1.8-.8-1.8-1.8v-3.5z" />
                                                    <path
                                                        className="st4leaddeadline"
                                                        d="M35.5 41.7c-.3 0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 .3-.2.5-.5.5zM39.5 41.7c-.3 0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 .3-.3.5-.5.5zM43.5 41.7c-.3 0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 .3-.3.5-.5.5z"
                                                    />
                                                    <path
                                                        className="st1leaddeadline"
                                                        d="M61.1 16.4H9.5c-1.4 0-2.5 1.1-2.5 2.5v5.1c0 .2.2.4.4.4s.4-.2.4-.4v-5.1c0-.9.7-1.6 1.6-1.6h51.6c.9 0 1.6.7 1.6 1.6v25.3c0 .9-.7 1.6-1.6 1.6H12.9c-.9 0-1.6-.7-1.6-1.6v-2.3c0-.2-.2-.4-.4-.4s-.4.2-.4.4v2.3c0 1.4 1.1 2.5 2.5 2.5h48.6c1.4 0 2.5-1.1 2.5-2.5V18.9c0-1.4-1.1-2.5-2.5-2.5z"
                                                    />
                                                    <path
                                                        className="st1leaddeadline"
                                                        d="M61.1 8.1H9.5c-1.4 0-2.5 1.1-2.5 2.5v5.1c0 .2.2.4.4.4s.4-.2.4-.4v-5.1c0-.9.7-1.6 1.6-1.6h51.6c.9 0 1.6.7 1.6 1.6v25.3c0 .9-.7 1.6-1.6 1.6H12.9c-.9 0-1.6-.7-1.6-1.6V10.6c0-.2-.2-.4-.4-.4s-.4.2-.4.4v23.7c0 1.4 1.1 2.5 2.5 2.5h48.6c1.4 0 2.5-1.1 2.5-2.5V10.6c0-1.4-1.1-2.5-2.5-2.5z"
                                                    />
                                                </svg>
                                                <p className="fs-12  mb-0  font-bold h3color">Step 6</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12  Col7">
                            <div className="container-fluid leadform ">
                                {
                                    (uniId == "0" || uniId == "1") ?
                                        (

                                            <div className="row ">

                                                <div className="col-lg-8 col6 col-md-6 col-sm-6">

                                                    <h1 className="h3color font-bold leadformheading">Register Now For Apply</h1>

                                                </div>
                                                <div className="col-lg-1  col-sm-1">
                                                    <div className="Io  " onClick={CloseUp}>✕</div>
                                                </div>
                                            </div>

                                        ) : <>
                                            {
                                                universityList.map((n) =>
                                                (
                                                    <>
                                                        <div className="row mt-3">
                                                            <div className="col-lg-3 col3  col-md-4 col-sm-4">
                                                                <div className="logocontainer">
                                                                    <img src={`${apiUrl}images/${n.logourl}`} srcSet={`${apiUrl}images/${n.logourl}`} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col6 col-md-6 col-sm-6">

                                                                <h1 className="h3color font-bold leadformheading">Register Now to Apply</h1>
                                                                <h3 className="leadformsubheading text-dark">{n.uname}</h3>
                                                            </div>
                                                            <div className="col-lg-1 col-sm-1">
                                                                <div className="Io  " onClick={() => close()}>✕</div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </>
                                                ))
                                            }
                                        </>
                                }

                            </div>
                            <div className="row">
                                <form onSubmit={addLead} >
                                    <div className="container-fluid">
                                        <div className="row leadformrowsm" >
                                            <div className="col-lg-12 col-md-12 col-sm-12">

                                                <div className='row '>


                                                    <div className='col-lg-6 mt-4  col-md-12  col-sm-12 '>


                                                        <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} placeholder="Your Full Name" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>
                                                    <div className='col-lg-6 mt-4 col-md-12 col-sm-12 '>


                                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>

                                                </div>
                                                <div className='row '>


                                                    <div className='col-lg-6 col-md-12  mt-4 col-sm-12 '>


                                                        <input type="number" name="phone" onChange={handleInputChange} value={formData.phone} placeholder="Your Mobile Number" className="p-inputtext p-component p-filled w-100 form-control" />

                                                    </div>
                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 RFullNameCol'>
                                                        <select onBlur={() => {
                                                            if (formData.course == '') {
                                                                setcheckNull(true)
                                                            }
                                                            else {
                                                                setcheckNull(false)
                                                            }
                                                        }
                                                        } name="course" value={formData.course} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
                                                            <option>
                                                                Select Course
                                                            </option>
                                                            {courseList.map((n, k) => (
                                                                <option key={k} value={n.id}>
                                                                    {n.courename}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {
                                                            (
                                                                checkNull ?
                                                                    (
                                                                        <span className="text-danger">This is Required*</span>
                                                                    ) : ''
                                                            )

                                                        }
                                                    </div>

                                                </div>

                                                <div className='row '>
                                                    <div className='col-lg-6 col-md-12 mt-4 col-sm-12 RFullNameCol'>
                                                        <select name="city" value={formData.city} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
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
                                                        <select name="state" value={formData.state} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
                                                            <option value=''>
                                                                Select City
                                                            </option>
                                                            {
                                                                citylist.map((e, k) =>
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
                                                        <button type="submit" class="btn mt-4 w-100 btn-secondary">Submit</button>
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

export default UniversityApply;

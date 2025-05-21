"use client";
import React, { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
// import JoditEditor from 'jodit-react';
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import "../../globals.css";
import axios from "axios"

import { apiUrl, SaveImage } from "../utils/api"
import { useDispatch, useSelector } from "react-redux"
import { getCityList, getCityListCache, getCourse, getCourseListDetail, getEsblishedList, getEstablishListDetail, getStateList, getStateListCache } from "../../_redux/itemSlice"

const ListYourUniversityinWebsite = ({ close }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [isForgot, setIsForgot] = useState(false)



    const [content, setContent] = useState('');

    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: 'Start typing...',
            style: {
                color: 'black',

            }
        }),
        []
    );


    const [studymodelist, setstudymodelist] = useState([]);



    const [formData, setFormData] = useState(

        {
            Role: 'Add',
            Name: '',
            Established: '',
            about: '',
            fact: '',
            emi: '',
            admission: '',
            officeMailId: '',
            approvedBy: '0',
            courseType: '0',
            stream: '0',
            zone: '0',
            studyMode: '0',
            UniversityType: '0',
            WebsiteUrl: '',
            state: '0',
            city: '0',



            fbLink: '',
            twitterLink: '',
            linkedin: '',
            instagram: '',
            nip: '',
            smode: '',
            feature: false,
            toc: false,
            urlname: '',
            active: false,
            logo: '',
            prospectus: '',
            image: [],
            video: [],

            quesition: [],
            answer: [],
            TOCcontent: [],
            TOCH1: [],
            TOCH2: [],
            TOCH3: [],
            TOCH4: [],
            TOCH5: [],

            FAQ: [],
            h: '',
            seotitle: '',
            seodescription: '',

        }


    );
    const [editorContent, setEditorContent] = useState('');


    const handleInputChange = (e) => {
        const { name, value } = e.target;



        if (name == "state") {
            getCityListHere(value);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };
    const StringArr = [];

    const [h1Heading, seth1Heading] = useState([]);
    const [h2Heading, seth2Heading] = useState([]);
    const [h3Heading, seth3Heading] = useState([]);
    const [h4Heading, seth4Heading] = useState([]);
    const [h5Heading, seth5Heading] = useState([]);


    const ch1Heading = [];
    const ch2Heading = [];
    const ch3Heading = [];
    const ch4Heading = [];
    const ch5Heading = [];

    const extractHeadings1 = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const headings = doc.querySelectorAll('h1');

        headings.forEach((heading) => {
            const tagName = heading.tagName.toLowerCase();
            const headingContent = heading.outerHTML;

            switch (tagName) {
                case 'h1':
                    seth1Heading(prevState => [...prevState, headingContent]);
                    ch1Heading.push(headingContent);
                    break;

                default:
                    break;
            }
        });
    };


    const extractHeadings2 = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const headings = doc.querySelectorAll('h2');

        headings.forEach((heading) => {
            const tagName = heading.tagName.toLowerCase();
            const headingContent = heading.outerHTML;

            switch (tagName) {

                case 'h2':
                    seth2Heading(prevState => [...prevState, headingContent]);
                    ch2Heading.push(headingContent);
                    break;

                default:
                    break;
            }
        });
    };



    const extractHeadings3 = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const headings = doc.querySelectorAll('h3');

        headings.forEach((heading) => {
            const tagName = heading.tagName.toLowerCase();
            const headingContent = heading.outerHTML;

            switch (tagName) {

                case 'h3':
                    seth3Heading(prevState => [...prevState, headingContent]);
                    ch3Heading.push(headingContent);
                    break;

                default:
                    break;
            }
        });
    };

    const extractHeadings4 = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const headings = doc.querySelectorAll('h4');

        headings.forEach((heading) => {
            const tagName = heading.tagName.toLowerCase();
            const headingContent = heading.outerHTML;

            switch (tagName) {

                case 'h4':
                    seth4Heading(prevState => [...prevState, headingContent]);
                    ch4Heading.push(headingContent);
                    break;

                default:
                    break;
            }
        });
    };
    const extractHeadings5 = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const headings = doc.querySelectorAll('h5');

        headings.forEach((heading) => {
            const tagName = heading.tagName.toLowerCase();
            const headingContent = heading.outerHTML;

            switch (tagName) {

                case 'h5':
                    seth5Heading(prevState => [...prevState, headingContent]);
                    ch5Heading.push(headingContent);
                    break;

                default:
                    break;
            }
        });
    };
    const [image, setImage] = useState([]);
    const [logo, setlogo] = useState('');


    const [prospectus, setprospectus] = useState('');


    const handleProspectusChange = (e) => {
        setprospectus(e.target.files[0]);

    };

    const handleImageChange = (e) => {
        setImage(e.target.files);
    };

    const handleLogoChange = (e) => {
        setlogo(e.target.files[0]);
    };
    const addUniversityResponse = async (e) => {
        e.preventDefault();




        const parser = new DOMParser();
        const doc = parser.parseFromString(editorContent, 'text/html');
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5,h6');
        const newArray = [];
        headings.forEach((heading) => {
            let content = '';
            for (let node = heading.nextSibling; node && !['H1', 'H2', 'H3', 'H4', 'H5'].includes(node.tagName); node = node.nextSibling) {
                content += node.outerHTML || node.textContent;
            }
            content = heading.outerHTML + content;
            newArray.push(content);
            StringArr.push(newArray);
        });

        const sendImage = new FormData();
        for (let i = 0; i < image.length; i++) {
            sendImage.append('image', image[i]);
            sendImage.append("name", "Ibrahim");
        }
        SaveImage(sendImage, "Image Successfully Store", apiUrl, "Save-Images")
        const formData2 = new FormData();
        formData2.append('image', prospectus);
        SaveImage(formData2, "Prospectus Successfully Store", apiUrl, "Save-Images")
        const formData3 = new FormData();
        formData3.append('image', logo);
        SaveImage(formData3, "Prospectus Successfully Store", apiUrl, "Save-Images")

        formData.about = editorContent;
        for (let i = 0; i < image.length; i++) {
            formData.image[`${i}`] = image[i].name;
        }
        formData.logo = logo != null ? logo.name : '';


        StringArr.forEach((tocs, index) => {

            formData.TOCcontent[`${index}`] = tocs;

        });


        extractHeadings1(editorContent);
        ch1Heading.forEach((h1, index) => {
            formData.TOCH1[`${index}`] = h1;

        });
        extractHeadings2(editorContent);
        ch2Heading.forEach((h1, index) => {
            formData.TOCH2[`${index}`] = h1;
        });

        extractHeadings3(editorContent);
        ch3Heading.forEach((h1, index) => {
            formData.TOCH3[`${index}`] = h1;

        });

        extractHeadings4(editorContent);
        ch4Heading.forEach((h1, index) => {
            formData.TOCH4[`${index}`] = h1;

        });

        extractHeadings5(editorContent);
        ch5Heading.forEach((h1, index) => {
            formData.TOCH5[`${index}`] = h1;
        });



        formData.urlname = (formData.urlname).split(' ').join('-');
        formData.urlname = (formData.urlname).split('.').join('-').toLocaleLowerCase();







        let a = await axios.post(`${apiUrl}Add-University`, formData,
            {

                withCredentials: true




            }


        );


        if (a.data.Status == true) {
            alert("Your Response Successfully Record");
            close();
        }




    }
    const [approvedlist, setapprovedlist] = useState([]);
    const [streamlist, setstreamlist] = useState([]);
    const [coursetypelist, setcoursetypelist] = useState([]);
    const [universitytypelist, setuniversitytypelist] = useState([]);
    const [zonelist, setzonelist] = useState([]);

    const getUniversityTypeList = async () => {
        let a = await axios.get(`${apiUrl}get-University-Type`);
        setuniversitytypelist(a.data);
    }

    const getZoneList = async () => {
        let a = await axios.get(`${apiUrl}get-Zone`);
        setzonelist(a.data);
    }
    const getApprovedList = async () => {
        let a = await axios.get(`${apiUrl}get-Approved`);
        setapprovedlist(a.data);
    }
    const getStreamList = async () => {
        let a = await axios.get(`${apiUrl}get-Stream`);
        setstreamlist(a.data);
    }
    const getcourseTypeList = async () => {
        let a = await axios.get(`${apiUrl}get-Course-Type`);
        setcoursetypelist(a.data);
    }
    const getStudyModeList = async () => {
        let a = await axios.get(`${apiUrl}get-Study-Mode`);
        setstudymodelist(a.data);
    }
    const dispatch = useDispatch();

    const [isStep1, setisStep1] = useState(true);


    const establishlist = useSelector(getEstablishListDetail);




    useEffect(() => {


        if (establishlist.length == 0 || establishlist == undefined) {
            dispatch(getEsblishedList());

        }

        const fetchData = async () => {
            await dispatch(getCourse()).unwrap();
            await dispatch(getStateList()).unwrap();
            await getApprovedList();
            await getStreamList();
            await getcourseTypeList();
            await getStudyModeList();
            await getUniversityTypeList();
            await getZoneList();

        }
        fetchData();



    }, [dispatch])
    console.log(establishlist);
    const [isname, setIsname] = useState(false);

    const [isStream, setIsStream] = useState(false);
    const [isCourse, setIsCourse] = useState(false);
    const [isUniversity, setIsUniversity] = useState(false);
    const [isState, setIsState] = useState(false);
    const [isCity, setIsCity] = useState(false);

    const [isStatus, setIsStatus] = useState(false);
    const [isLogo, setIsLogo] = useState(false);

    const courseList = useSelector(getCourseListDetail);
    const statelist = useSelector(getStateListCache);
    const citylist = useSelector(getCityListCache);

    const getCityListHere = async (id) => {
        await dispatch(getCityList(id)).unwrap();

    }

    return (

        <section className='fixed  left-0 top-0 h-full min-h-screen w-full bg-black/80 flex justify-center align-start  ListYourUniversityWebsite1' style={{ overflowX: 'hidden', zIndex: '1000px' }}>

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
               
                width:120%;
                
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
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-full min-h-fit  bg-white flex flex-col gap-6 justify-start mt-5 my-5 requires-no-scroll relative' >

                <div className="container-fluid ListYourUniversityWebsite" style={{ overflowX: 'hidden' }}>

                    <div className="row">


                        <div className="col-lg-12 RightCol col-md-7 col-sm-12">
                            <label for="small" className="fs-14 ml-5 fw-bold lab Heading"> Register your university  </label>
                            <p className="text-primary fs-14 ml-5 mb-2 font-bold Para">Please Enter Your University Detail</p>
                            {/* <div className="Closeup CloseupLarge" >
                    <i className='fa-solid fa-xmark text-xl cursor-pointer' onClick={() => close()}></i>
                </div> */}
                            <div className="Io  " onClick={() => close()}>✕</div>
                            <form className="mt-1" onSubmit={addUniversityResponse}>
                                <div className="container-fluid ListYourUniversityWebsite">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                            {
                                                isStep1 ?
                                                    (
                                                        <>
                                                            <div className='row mt-3'>


                                                                <div className='col-lg-4  col-md-12  col-sm-12 '>

                                                                    <label>University Name </label>
                                                                    <input type='text' name='Name' value={formData.Name} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter University Name' />
                                                                    {
                                                                        isname ?
                                                                            (
                                                                                <span className='text-danger'>
                                                                                    This is Required*
                                                                                </span>
                                                                            ) : ''
                                                                    }



                                                                </div>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>


                                                                    <label>Establised in</label>
                                                                    <select name='Established' value={formData.Established} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">

                                                                        <option value=''>Not Select Yet</option>

                                                                        {
                                                                            establishlist.map((v, k) =>
                                                                            (
                                                                                <option key={k} value={v.name}>{v.name}</option>

                                                                            ))
                                                                        }

                                                                    </select>

                                                                </div>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Official Mail Id </label>
                                                                    <input type='text' name="officeMailId" value={formData.officeMailId} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter Official Mail Id' />


                                                                </div>

                                                            </div>
                                                            <div className='row mt-3'>


                                                                <div className='col-lg-4  col-md-12  col-sm-12 '>

                                                                    <label>Approved By</label>
                                                                    <select name='approvedBy' value={formData.approvedBy} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control"


                                                                    >
                                                                        <option value='0'>Not Selected Yet</option>

                                                                        {
                                                                            approvedlist.map((e, k) =>
                                                                            (
                                                                                <option key={k} value={e.id}>
                                                                                    {e.name}
                                                                                </option>
                                                                            ))
                                                                        }



                                                                    </select>





                                                                </div>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Stream </label>
                                                                    <select name="stream" value={formData.stream} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control"



                                                                    >
                                                                        <option value='0'>
                                                                            Not Selected yet
                                                                        </option>
                                                                        {
                                                                            streamlist.map((e, k) =>
                                                                            (
                                                                                <option key={k} value={e.id}>
                                                                                    {e.name}
                                                                                </option>
                                                                            ))
                                                                        }

                                                                    </select>

                                                                </div>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>NIRF Ranking </label>
                                                                    <input type='text' name="nip" value={formData.nip} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter NIRF Ranking' />



                                                                </div>

                                                            </div>
                                                            <div className='row mt-3'>


                                                                <div className='col-lg-4  col-md-12  col-sm-12 '>
                                                                    <label>Course Type </label>
                                                                    <select name="courseType" className="p-inputtext p-component p-filled w-100 form-control"

                                                                        value={formData.courseType}
                                                                        onChange={
                                                                            handleInputChange

                                                                        }

                                                                    >

                                                                        <option value=''>Not Selected yet</option>
                                                                        {
                                                                            coursetypelist.map((e, k) =>
                                                                            (
                                                                                <option key={k} value={e.id}>
                                                                                    {e.name}
                                                                                </option>
                                                                            ))
                                                                        }
                                                                    </select>






                                                                </div>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Study Mode </label>
                                                                    <select name="studyMode" value={formData.studyMode} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control"


                                                                    >
                                                                        <option value=''>Not Selected yet</option>
                                                                        {
                                                                            studymodelist.map((e, k) =>
                                                                            (
                                                                                <option key={k} value={e.id}>
                                                                                    {e.name}
                                                                                </option>
                                                                            ))
                                                                        }

                                                                    </select>

                                                                </div>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>
                                                                    <label className='mt-1'>University Type </label>
                                                                    <select name="UniversityType" onChange={handleInputChange} value={formData.UniversityType} className="p-inputtext p-component p-filled w-100 form-control"


                                                                    >
                                                                        <option>Not Selected Yet</option>
                                                                        {
                                                                            universitytypelist.map((e, k) =>
                                                                            (
                                                                                <option key={k} value={e.id}>
                                                                                    {e.name}
                                                                                </option>
                                                                            ))
                                                                        }
                                                                    </select>



                                                                </div>

                                                            </div>


                                                            <div className='row mt-3'>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>
                                                                    <label>Select State </label>
                                                                    <select value={formData.state} name="state" className="p-inputtext p-component p-filled w-100 form-control" onChange={handleInputChange}>
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



                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Select City </label>
                                                                    <select name="city" value={formData.city} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control"



                                                                    >
                                                                        <option value=''>
                                                                            Not Select Yet
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
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Select Zone </label>
                                                                    <select name="zone" value={formData.zone} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control" id=""



                                                                    >
                                                                        <option value=''>
                                                                            Not Select Yet
                                                                        </option>
                                                                        {
                                                                            zonelist.map((e, k) =>
                                                                            (
                                                                                <option key={k}
                                                                                    value={e.id}>
                                                                                    {e.name}
                                                                                </option>
                                                                            ))
                                                                        }

                                                                    </select>



                                                                </div>
                                                            </div>

                                                            <div className='row mt-3'>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Upload Prospectus</label>

                                                                    <input type='file' name="prospectus" onChange={handleProspectusChange} accept='application/pdf' className=" form-control" />

                                                                </div>
                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Upload Logo</label>

                                                                    <input type='file' name="logo" onChange={handleLogoChange} accept='application/image' className=" form-control" />

                                                                </div>

                                                                <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                    <label>Upload Image</label>

                                                                    <input type='file' name="image" onChange={handleImageChange} accept='application/image' className=" form-control" />

                                                                </div>


                                                            </div>
                                                            <div className='row mt-1'>

                                                                <div className='col-lg-12 col-md-12 col-sm-12 RFullNameCol'>
                                                                    <button class="btn mt-4 w-100 btn-primary" onClick={(e) => setisStep1(false)}>Next</button>
                                                                </div>

                                                            </div>
                                                        </>
                                                    ) : <>
                                                        <div className='row mt-3'>


                                                            <div className='col-lg-4  col-md-12  col-sm-12 '>


                                                                <label>Facebook </label>
                                                                <input type='text' onChange={handleInputChange} name='fbLink' value={formData.fbLink} className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter Facebook Link' />




                                                            </div>
                                                            <div className='col-lg-4 col-md-12  col-sm-12 '>
                                                                <label>Twitter </label>
                                                                <input type='text' onChange={handleInputChange} name='twitterLink' value={formData.twitterLink} className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter Twitter Link' />





                                                            </div>
                                                            <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                <label>Linkedin </label>
                                                                <input type='text' name='linkedin' onChange={handleInputChange} value={formData.linkedin} className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter Linkedin Link' />



                                                            </div>

                                                        </div>

                                                        <div className='row mt-3'>



                                                            <div className='col-lg-12 col-md-12  col-sm-12 '>

                                                                <label>Content </label>
                                                                <JoditEditor

                                                                    value={content}
                                                                    config={config}
                                                                    tabIndex={1}
                                                                    onBlur={(newContent) => setEditorContent(newContent)}
                                                                    onChange={(newContent1) => {


                                                                    }}
                                                                />


                                                            </div>


                                                        </div>
                                                        <div className='row mt-3'>



                                                            <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                <label>Page Name </label>
                                                                <input type='text' onChange={handleInputChange} value={formData.urlname} name="instagram" className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter Instagram Link' />



                                                            </div>
                                                            <div className='col-lg-4 col-md-12  col-sm-12 '>

                                                                <label>Official Website Url </label>
                                                                <input type='text' value={formData.WebsiteUrl} name="WebsiteUrl" onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control" placeholder='Enter Official Website Link' />



                                                            </div>
                                                            <div className='col-lg-2 col-md-12  col-sm-12 '>




                                                            </div>
                                                            <div className='col-lg-1 col-md-12 mt-3  col-sm-12 '>
                                                                <button type="submit" class="btn mt-4 w-100 btn-primary " >Submit</button>



                                                            </div>
                                                        </div>


                                                    </>
                                            }


                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </motion.div>
        </section>

    )
}

export default ListYourUniversityinWebsite;

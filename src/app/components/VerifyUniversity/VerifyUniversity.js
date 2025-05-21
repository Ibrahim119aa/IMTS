"use client"
import axios from 'axios';
import  { useEffect,useState } from 'react';


import "../../globals.css"
import Link from 'next/link';
import { useRouter as useNavigate } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {  getSecondaryData, getSecondaryDetail } from '../../_redux/itemSlice';
const VerifyUniversity = () => {

let apiUrl=process.env.NEXT_PUBLIC_API_URL;
    const [isOpen, setIsOpen] = useState(false);



    const [Name, setName] = useState('Online');

    const getUniversityListByState = async () => {
        let a = await axios.post(`${apiUrl}get-University-Study-Mode`, {
            Name: Name
        });
        setuniversitylist(a.data);




    }
    const n = useNavigate();
    const Redirect = () => {
        n('/Video-Conselling');
    }
    const [state, setstate] = useState([]);
    const [type, settype] = useState([]);
    const [zone, setzone] = useState([]);


    const getState = async () => {
        let a = await axios.get(`${apiUrl}get-State`);


        setstate(a.data);
    }
    const getZone = async () => {
        let a = await axios.get(`${apiUrl}get-Zone`);


        setzone(a.data);
    }
    const getunivertyType = async () => {
        let a = await axios.get(`${apiUrl}get-University-Type`);
        settype(a.data);

    }



    const getUniversityByName = async (value) => {


        if (value !== '') {

            let uni = [];

            universitylist.forEach(element => {
                if (element.uname == value) {
                    uni.push(element);

                }
            });
            setuniversitylist(uni);



            // let a = await axios.post(`${apiUrl}get-University-By-Name1`,
            //     {
            //         Name: Name,
            //         state: value


            //     }
            // );
            // setuniversitylist(a.data);





        } else {


            setuniversitylist(uni);

        }

    }



    const getUniversityList = async (value) => {
        let a = await axios.post(`${apiUrl}get-University-Study-Mode`, {
            Name: value
        });
        setuniversitylist(a.data);

    }

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen1, setIsOpen1] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const [uniName, setuniName] = useState('');


    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };
    const handleCheckboxChange = async (e, value) => {


        if (e.target.checked) {

            let uni = [];

            universitylist.forEach(element => {
                if (element.statenumber == value) {
                    uni.push(element);

                }
            });
            setuniversitylist(uni);

        } else {


            setuniversitylist(uni);

        }

    }

    const handleCheckboxChange1 = async (e, value) => {


        if (e.target.checked) {


            let uni = [];

            universitylist.forEach(element => {
                if (element.universitytypenumber == value) {
                    uni.push(element);

                }
            });
            setuniversitylist(uni);


        } else {

            setuniversitylist(uni);
        }

    }
    const handleCheckboxChange2 = async (e, value) => {


        if (e.target.checked) {







            let uni = [];

            universitylist.forEach(element => {
                if (element.zonenumber == value) {
                    uni.push(element);

                }
            });
            setuniversitylist(uni);



        } else {

            setuniversitylist(uni);

        }

    }


    const a = useSelector(getSecondaryDetail);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {

            await getState();
            await getunivertyType();
            await getZone();

        }
        fetchData();
    }, [])
    useEffect(() => {
        if (a === undefined || a.length == 0) {
            dispatch(getSecondaryData());

        }

    }, [dispatch]);
    const uni = a == undefined ? [] : a.universitylist;
    const [universitylist, setuniversitylist] = useState(uni);

    const MyData = (data) => {
        setuniversitylist(data);
    }
    useEffect(() => {
        MyData(uni);
    }, [a])






    // useEffect(() => {
    //     const fetchData = async () => {
    //         await getUniversityListByState();
    //         await getState();
    //         await getunivertyType();
    //         await getZone();

    //     }
    //     fetchData();
    // }, [])


    return (
        <div>
            <div className="container-fluid Ver">
                <div className="row">
                    <div className="col-lg-12">
                        <center> <h1 className='verifyunibannerheading1 mt-5' >Cross Check</h1></center>
                        <center> <h1 className='verifyunibannerheading1 mt-4' >Your <span className='text-primary'>University</span> Before applying!</h1></center>

                    </div>
                </div>
                <div className="row mt-5 vusecond">
                    <div className="col-lg-12 ">
                        <div className="container-fluid">
                            <div className="row smd">
                                <div className="col-lg-12">
                                    <nav>
                                        <div class="nav nav-tabs ml-5" id="nav-tab" role="tablist">
                                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={(e) => getUniversityList("Online")}>Online</button>
                                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={(e) => getUniversityList("Distance")}>Distance</button>

                                        </div>

                                    </nav>
                                    <div class="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

                                        </div>
                                        {/* <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                                    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className='vs'>
                                <div className="row mt-4  " >
                                    <div className="col-lg-3 col-md-3">

                                    </div>
                                    <div className="col-lg-9 col-md-9">

                                        <div className="input-group  ">
                                            <input
                                                type="search"
                                                onChange={(e) => setuniName(e.target.value)}
                                                placeholder="Search from Below List"
                                                className="fs-14 rounded-0 py-3 w-75 form-control1  form-control-md"
                                            />
                                            <button type="button" className="bgprimary fs-14 btn btn-primary" onClick={(e) => getUniversityByName(uniName)}>
                                                Search
                                            </button>
                                        </div>


                                        <div className="col-lg-1 mt-3">
                                            <span className="text-nowrap fs-14 w-25 text-end"></span>
                                        </div>

                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-lg-3 col-md-3 smd" style={{ marginTop: '1.5rem' }} >
                                        <div className={`accordion-item ml-5    ${isOpen ? 'open' : ''}`} style={{ marginTop: '-1rem' }}>
                                            <div className={`accordion-title ${isOpen ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion} style={{ padding: '1.2rem', backgroundColor: '#f5f8f9;', fontWeight: '800 !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <p className="ml-2 item-center d-flex gap-1" style={{ letterSpacing: '1px', color: '#212529', wordSpacing: '1px', fontWeight: '1000 !important', fontSize: '18px' }}>
                                                    States
                                                </p>
                                                <span>
                                                    <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                                </span>
                                            </div>

                                            {isOpen && (
                                                <div className="accordion-content ml-2">


                                                    {
                                                        state.map((x,k) =>
                                                        (
                                                            <p key={k} className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                                                <div className="d-flex align-items-center gap-2 mb-2 fs-14 form-check">
                                                                    <input
                                                                        role="button"
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        onChange={(e) => handleCheckboxChange(e, x.id)}


                                                                    />
                                                                    <label title="" className="form-check-label mt-1">
                                                                        {x.name}
                                                                    </label>
                                                                </div>
                                                            </p>
                                                        ))
                                                    }


                                                </div>
                                            )}
                                            <hr />

                                        </div>

                                        <div className={`accordion-item ml-5  ${isOpen1 ? 'open' : ''}`} style={{ marginTop: '-1rem' }}>
                                            <div className={`accordion-title ${isOpen1 ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion1} style={{ padding: '1.2rem', fontWeight: '800 !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <p className="ml-2 item-center d-flex gap-1" style={{ letterSpacing: '1px', color: '#212529', wordSpacing: '1px', fontWeight: '1000 !important', fontSize: '18px' }}>
                                                    Type
                                                </p>
                                                <span>
                                                    <i className={`fas ${isOpen1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                                </span>
                                            </div>
                                            {isOpen1 && (
                                                <div className="accordion-content ml-2">

                                                    {
                                                        type.map((x,k) =>
                                                        (
                                                            <p key={k} className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                                                <div className="d-flex align-items-center gap-2 mb-2 fs-14 form-check">
                                                                    <input
                                                                        role="button"
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        onChange={(e) => handleCheckboxChange1(e, x.id)}
                                                                    />
                                                                    <label title="" className="form-check-label mt-1">
                                                                        {x.name}
                                                                    </label>
                                                                </div>
                                                            </p>
                                                        ))
                                                    }


                                                </div>
                                            )}
                                            <hr />
                                        </div>

                                        <div className={`accordion-item ml-5 ${isOpen2 ? 'open' : ''}`} style={{ marginTop: '-1rem' }}>
                                            <div className={`accordion-title ${isOpen2 ? 'open text-primary acc1' : ''}`} onClick={toggleAccordion2} style={{ padding: '1.2rem', fontWeight: '800 !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <p className="ml-2 item-center d-flex gap-1" style={{ letterSpacing: '1px', color: '#212529', wordSpacing: '1px', fontWeight: '1000 !important', fontSize: '18px' }}>
                                                    Zone
                                                </p>
                                                <span>
                                                    <i className={`fas ${isOpen2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                                </span>
                                            </div>
                                            {isOpen2 && (
                                                <div className="accordion-content ml-2">
                                                    {
                                                        zone.map((x,k) =>
                                                        (
                                                            <p key={k} className="m-2 p-2 d-flex gap-2" style={{ letterSpacing: '1px', wordSpacing: '2px', fontWeight: '600 !important', fontSize: '16px', marginLeft: '1rem' }}>
                                                                <div className="d-flex align-items-center gap-2 mb-2 fs-14 form-check">
                                                                    <input
                                                                        role="button"
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        onChange={(e) => handleCheckboxChange2(e, x.id)}
                                                                    />
                                                                    <label title="" className="form-check-label mt-1">
                                                                        {x.name}
                                                                    </label>
                                                                </div>
                                                            </p>
                                                        ))
                                                    }

                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 verifyuni">

                                        {
                                            universitylist && (
                                                universitylist.length > 0 ? (
                                                    universitylist.map((e,k) =>
                                                    (
                                                        <div key={k} className="container-fluid " style={{ cursor: 'pointer' }} onClick={Redirect}>
                                                            <div id='verifyuniversitycard1' className="row bg-white verifyuniversitycard mb-3 rounded py-3 border mt-2"  >
                                                                <div className="text-center d-flex justify-content-center align-items-start pt-md-3 col-md-3 verifyuniversityimageleft col-sm-12"
                                                                >

                                                                    <img alt="University Image"
                                                                        srcSet={`${apiUrl}images/${e.imageurl}`}
                                                                        src={`${apiUrl}images/${e.imageurl}`}
                                                                        className='verifyuniversityimage'
                                                                    />


                                                                </div>
                                                                <div className="col-lg-9 col-md-9 mt-3">
                                                                    <span className='h4 text-dark font-bold'>{e.uname}</span>
                                                                    <div>
                                                                        <span className="mt-2  badge  bg-info" style={{ fontSize: '12px', cursor: 'pointer' }}>{e.unitype}</span>
                                                                        <span class="mt-3  badge bg-primary ml-3">{e.mode}</span>
                                                                        <span class="mt-3  badge bg-info ml-3">{e.zone}</span>
                                                                    </div>
                                                                    <p className='text-dark'>Established <img src="/established.png" className='d-inline-block customwidth' alt="" /> <span className=''>{e.established}</span></p>
                                                                    <p className='text-dark'>Approved By <img src="/green-approval.png" className='d-inline-block customwidth1' alt="" /><span className='ml-2'> {e.approvedby}</span></p>
                                                                    <p className='text-dark'>State <img src="/state.png" className='d-inline-block customwidth' alt="" /><span className='ml-2' > {e.state}</span></p>
                                                                    <p className='text-dark'>City <img src="/city.png" className='d-inline-block customwidth' alt="" /><span className='ml-2' > {e.city}</span> </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))) : <div>
                                                    <center>
                                                        <h2 className="h2">University does not Available</h2>
                                                    </center>
                                                </div>
                                            )
                                        }

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
        ;
}


export default VerifyUniversity;
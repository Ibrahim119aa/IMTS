"use client"
import  { useState } from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const UniversityApply=dynamic(()=>import('@/app/components/ApplyUniversity/UniversityApply'),{ssr:false})

const ChecklistPage = () => {
    let name = "IMTS";

    const scrollToSection = (sectionClass) => {
        const sections = document.getElementsByClassName(sectionClass);
        if (sections.length > 0) {
            sections[0].scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [ugcnote, setugcnote] = useState(false);

    const [ugcnote1, setugcnote1] = useState(false);
    const [ugcnote2, setugcnote2] = useState(false);

    useEffect(() => {
        scrollToSection("container");

    }, []);
    return <>
        <section>
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <center>
                            <h1 className='checklistbannerheading mt-5 text-dark'>{name} Checklist </h1>
                        </center>

                        <center>
                            <p className='checklistbannersubtext mt-3'>Perfect Course, Ideal University, Promising Career with IMTS. </p>
                        </center>
                        <center>
                            <p className='mx-5 ml-5'>&nbsp;  We have prepared a checklist especially for you to look at before applying for an online course.</p>

                        </center>


                    </div>
                </div>
            </div>
            <div className="container CheckListBody mt-5">
                <center>
                    <h1 className='checklistbodyheading text-dark'>Did You Know? </h1>
                </center>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 CheckListFirstCol mt-5 mx-lg-4">
                                    <h2 class="textprimary fw-bold mt-4 CheckListFirstColH1 ml-5 ">{name}</h2>

                                    <p class="h4 mb-4 CheckListFirstColP1 mt-2 ml-5">Ebooks - University Selection Made Simple</p>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <ul className="mt-4 mb-4 CheckListFirstColUl"><li className="mb-3">Comprehensive Course Information</li><li className="mb-3">Expert Guidance on University Selection</li><li className="mb-3">Complete guidance to the Application Process</li><li className="mb-3">Get Familiar with our 3Cs</li><li className="mb-3">Enriched with Updated and Relevant Content</li></ul>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <Image alt='books' src="/books.png" width={400} height={400} priority />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 CheckListSecondCol mt-5  mx-lg-4">
                                    <h3 className='CheckListSecondColHeading fw-bold mt-4  ml-5'>
                                        <span className="fw-bold " style={{ color: 'rgb(26, 188, 156)' }}>Government</span> Companies Accept Online Degree</h3>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 ">
                                            <Image width={400} height={200}  src="/books.png" className='CheckListSecondColImg w-[80%] h-[300px] ml-4 mt-5' alt="" />
                                        </div>
                                    </div>
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 CheckListThirdCol mt-5 mx-lg-4">
                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">1</span><span className='ml-2 text-dark'>Does Online Degree Hold Any Value? </span></h2>
                                    <p className="CheckListThirdColP ml-5 mt-4">An online degree holds the same value as any other regular degree. The only thing students should look for is the approvals the online university has. If the university lacks the right approvals then the degree provided wont be considered valid.</p>
                                    <a onClick={() => setugcnote(!ugcnote)} className="bg-danger cursor-pointer text-white px-2 mt-4 mx-4 py-1 rounded d-inline-block mb-3">UGC Notice</a>
                                    <AnimatePresence>{ugcnote ? <UniversityApply close={() => setugcnote(!ugcnote)} uniId={"0"} /> : ""}</AnimatePresence>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-12 CheckListFourthCol mt-5 mx-lg-4">
                                    <h2 className=" d-flex align-items-center">
                                        <span class="Checklist_checklistCount__gMsd2 ">2</span>

                                        <span className='mt-4 text-dark'>Do HR of Top MNCs accept Online Degrees  Answer straight from 30+ years experienced HR</span></h2>
                                    <p className='CheckListThirdColP ml-5 mt-4'>
                                        Well if you think that HR’s of top MNC’s don’t accept online degrees then let me tell you that it is a Myth! Now Online Degrees are acceptable in all job sectors, said by 30+ years of experienced HR

                                    </p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-4 col-sm-12 CheckListFivthCol mt-5 mx-lg-4">

                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">3</span><span className='text-dark'>What is the Importance of Approvals and What Are They? </span></h2>
                                    <p className='CheckListThirdColP ml-5 mt-4'>

                                        Approvals are the governments stamp which signifies that the university is valid and the degree provided will be accepted legally. Students should look at UGC-DEB Approval, NAAC Accreditation and AICTE Ranking

                                    </p>

                                </div>
                                <div className="col-lg-5 col-md-7 col-sm-12 CheckListSixCol mt-5  mx-lg-4">
                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">4</span><span className='text-dark'>Is Online University Degree Valid for Government and Private Jobs?</span></h2>
                                    <p className='CheckListThirdColP ml-5 mt-4'>
                                        Degrees offered by online universities are valid and accepted everywhere from government and private sectors to top MNCs.
                                    </p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-4 col-sm-12 CheckListFivthCol mt-5 mx-lg-4">

                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">5</span><span className='text-dark'>What are the Myths of Online Education? </span></h2>

                                    <p className='CheckListThirdColP ml-5 mt-4'>

                                        Since the concept of online university has come into existence, many myths and questions have revolved around it. The most common ones are about its acceptance and quality offered. Online education is the same as regular education, the only difference is in the mode of education provided. Online education has more advantages as it has much more to offer like LMS, experts, recorded lectures, alumni connections, etc.

                                    </p>

                                </div>
                                <div className="col-lg-5 col-md-7 col-sm-12 CheckListSixCol mt-5  mx-lg-4">
                                    <h2 className="d-flex align-items-center mt-4"><span class="Checklist_checklistCount__gMsd2">6</span><span className='text-dark'>Will Online be Mentioned on the Degree ?</span></h2>
                                    <p className='CheckListThirdColP ml-5 mt-4'>
                                        Degrees offered by online universities are valid and accepted everywhere from government and private sectors to top MNCs.
                                    </p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 CheckListSevenCol mt-5 mx-lg-4">

                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">7</span><span className='text-dark'>What are the Approvals Required for Foreign Jobs or Higher Education Abroad?</span></h2>
                                    <p className='CheckListThirdColP ml-5 mt-4'>

                                        The University should be UGC-DEB approved with AIU approval for the candidate to be eligible to apply for jobs or higher education abroad.

                                    </p>

                                </div>
                                <div className="col-lg-7 col-md-8 col-sm-12 CheckListEightCol mt-5  mx-lg-4">

                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">8</span><span className='text-dark'>3 Major Differences Between Online &amp; Distance Education?</span></h2>
                                    <p className='CheckListThirdColP ml-5 mt-4'>
                                        Online and distance education have a lot of differences. The major differentiators are
                                    </p>
                                    <ol className='mx-5 mt-3 '>
                                        <li className='mt-3'>
                                            <span className="fw-bold ">Approvals :</span>
                                            &nbsp; Both online &amp; distance university requires different approvals, online university must have NAAC accreditation and NIRF ranking whereas distance university should have UGC-DEB approvals.
                                        </li>
                                        <li className='mt-3'><span class="fw-bold ">Mode of Education :</span> &nbsp; As the name suggests, the university has a different mode of education. In Online education everything from classes to exams are done through virtual mode, in Distance the students are required to go to centres for examination.
                                        </li>
                                        <li className='mt-3'><span class="fw-bold">LMS :</span> &nbsp; Online universities offer a strong LMS, including different tools like recorded lectures, video links, study material, etc whereas distance universities do not offer the same.</li></ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-4 col-sm-12 CheckListNineCol mt-5 mx-lg-4">


                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">9</span><span className='text-dark'>What is the Registration Process and its procedure ? </span></h2>
                                    <p className='CheckListThirdColP ml-5 mt-4'>

                                        Students can easily register to their preferred online university by visiting their official website and filling the registration form with the right information. The payment will be done there itself.
                                    </p>

                                </div>
                                <div className="col-lg-5 col-md-7 col-sm-12 CheckListTenCol mt-5  mx-lg-4">
                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">10</span><span className='text-dark'>How to find the right website for any university? </span></h2>

                                    <p className='CheckListThirdColP ml-5 mt-4'>
                                        Finding the right and legit website of any university is very difficult due to hundreds of websites with similar names and urls. It is close to impossible to spot the right university which is why we have done the research for you so that you dont get scammed by a fake university.
                                    </p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 CheckListElevenCol mt-5 mx-lg-4">


                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">11</span><span className='text-dark'>Are there any entrance exams for admission to online degree courses?</span></h2>

                                    <p className='CheckListThirdColP ml-5 mt-4'>

                                        NO! There are no entrance exams required for admission to online UG or PG courses. You just need to fill out the application form for the particular course you wish to pursue. You can find this application form on the official website of the university to where you want to get admitted. The university will offer you admission as long as you fulfill the minimum eligibility requirements.
                                    </p>

                                </div>
                                <div className="col-lg-7 col-md-8 col-sm-12 CheckListTwelveCol mt-5  mx-lg-4">

                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">12</span><span className='text-dark'>Which Universities are approved to provide Online Degree Programs?</span></h2>


                                    <p className='CheckListThirdColP ml-5 mt-4'>
                                        It’s a great question. In India, there are 900 + universities which can offer Regular Degree Programs as per UGC but for Online Degree programs only 70 universities are allowed by UGC to offer Online Degree Programs as each university has to meet strict criteria set by UGC. So as of now only 70 universities are allowed. You can download the list.
                                    </p>
                                    <a onClick={() => setugcnote1(!ugcnote1)} className="px-3  py-2 rounded text-white ms-2 mb-3 mt-4 d-inline-block cursor-pointer" style={{ backgroundColor: 'rgb(47, 79, 79)' }}>Download List</a>
                                    <AnimatePresence>{ugcnote1 ? <UniversityApply close={() => setugcnote1(!ugcnote1)} uniId={"0"} /> : ""}</AnimatePresence>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 CheckListThirteenCol mt-5 mx-lg-4">
                                    <center className='mt-5'>
                                        <Image width={300} height={300} priority  src="/checklist.webp" alt="" />
                                    </center>



                                    <p className='CheckListThirdColP ml-5 mt-4'>
                                        &nbsp; #Right Course, Right University, Bright Career Path with IMTS.                                    </p>

                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 CheckListTwelveCol mt-5  mx-lg-4">

                                    <h2 className="d-flex align-items-center mt-4"><span className="Checklist_checklistCount__gMsd2">13</span><span>Verify Your University</span></h2>

                                    <p className='CheckListThirdColP ml-5 mt-4'>


                                        <svg stroke="currentColor" style={{ display: 'inline-block' }} fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-success fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>

                                        <span>
                                            Dont make a decision that you might regret!
                                        </span>


                                    </p>
                                    <p className='CheckListThirdColP ml-5 mt-2'>


                                        <svg stroke="currentColor" style={{ display: 'inline-block' }} fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-success fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                                        <span>How to Verify Your University</span>


                                    </p>


                                    <p className='CheckListThirdColP ml-5 mt-4'>


                                        <span className='ml-3'>How to Verify Your University</span>


                                    </p>





                                    <p>
                                        <a onClick={() => setugcnote2(!ugcnote2)} className="px-3 cursor-pointer py-2 mx-3 mt-3 rounded text-white ms-2 d-inline-block" style={{ backgroundColor: 'rgb(47, 79, 79)' }}>Click to Verify</a>
                                        <AnimatePresence>{ugcnote2 ? <UniversityApply close={() => setugcnote2(!ugcnote2)} uniId={"0"} /> : ""}</AnimatePresence>

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
}


export default ChecklistPage;
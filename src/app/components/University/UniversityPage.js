"use client"
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import '@/app/globals.css';
import { format } from 'date-fns';
import Image from "next/image";
import { setAuthorId } from "../../_redux/itemSlice";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";
import axios from "axios";

// Dynamically import components intended for client-only rendering
const UniversityApply1 = dynamic(() => import('@/app/components/ApplyUniversity/UniversityApply1'), { ssr: false });
const AuthPopUp = dynamic(() => import('@/app/components/Header/AuthPopUp'), { ssr: false });
const RegisterForm = dynamic(() => import("../Header/RegisterForm"), { ssr: false });
const Register2 = dynamic(() => import("./Register2"), { ssr: false });
const UniversityApply = dynamic(() => import("../ApplyUniversity/UniversityApply"), { ssr: false });
const TalkUniversity = dynamic(() => import("../TalkUniversity/TalkUniversity"), { ssr: false });
const AllReview = dynamic(() => import("./AllReview"), { ssr: false });
const LoginForm = dynamic(() => import("../Header/LoginForm"), { ssr: false });
const Faq = dynamic(() => import('@/app/components/Home/Faq'), { ssr: false });
const App1 = dynamic(() => import('@/app/components/App1'), { ssr: false });
const ReviewForm = dynamic(() => import('@/app/components/University/ReviewForm'), { ssr: false });
import { useDispatch, useSelector } from "react-redux";
import { getHomePage, getHomePage1, getHomePageDetail, getUniversityAuthorDetail, getUniversityCourseDetail, getUniversityFaqDetail, getUniversityPageList, getUniversityPageListDetail, getUniversityReview, getUniversityReviewDetail } from "../../_redux/itemSlice";



const UniversityPage = ({ Ids }) => {

  let apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [talkToPopUp, setTalkToPopUp] = useState(false);
  const Id = Ids;
  const [userList, setuserList] = useState('');
  const [Status, setStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [uniId, setuniId] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
  };
  const checkLogin = async (e) => {
    let a = await axios.get(`${apiUrl}dashboard`,
      {
        withCredentials: true
      });

    setuserList(a.data.username);
    setStatus(a.data.Status);

  }

  const [stringArray, setStringArray] = useState([]);


  const extractHtmlContentBetweenHeadings = (htmlContent) => {

    let isContent = false;
    let a = ``;

    htmlContent.forEach(element => {
      if (element.urlname == Id) {
        a = element.about;




        isContent = true;


      }
    });

    if (isContent) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(a, 'text/html');
      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5,h6');
      const newArray = [];

      headings.forEach((heading) => {
        let content = '';


        for (let node = heading.nextSibling; node && !['H1', 'H2', 'H3', 'H4', 'H5'].includes(node.tagName); node = node.nextSibling) {
          content += node.outerHTML || node.textContent;
        }


        content = heading.outerHTML + content;


        newArray.push(content);



        setStringArray(newArray);

      });





    }
    return stringArray;
  };


  const [Prospectus, setProsPectus] = useState('');



  const [showReviewForm, setShowReviewForm] = useState(false);
  const [review, setReview] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [showLoginPopUp, setShowLoginPopUp] = useState(false)

  const [showReview, setShowReview] = useState(false);

  const handleButtonClick = () => {

    setShowLoginPopUp(!showLoginPopUp);

  };
  const handleButtonClick4 = () => {


    setShowReview(!showReview);


  };


  const [isLogin, setLogin] = useState('');
  const [user, setuser] = useState('');
  const [fname, setfname] = useState('');

  const handleButtonClick2 = async () => {

    setApplyUniversity(!ApplyUniversity);

  };

  const [uniTalk, setuniTalk] = useState(false);
  const shareUrl = 'https://www.imts.ac.in'; // Replace with your website URL
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  const handleShare = () => {
    window.open(facebookShareUrl, 'facebook-share-dialog', 'width=800,height=600');
  };

  const handleButtonClick3 = async () => {
    let a = await axios.get(`${apiUrl}dashboard`,
      {
        withCredentials: true
      });
    setLogin(a.data.Status);
    setuser(a.data.username);
    setfname(a.data.fname);
    if (a.data.Status) {
      setuniTalk(!uniTalk);
    }
    else {
      setUserLogin(!UserLogin);
    }
  };


  function createLink(label, key) {
    if (parseInt(key) >= 0) {
      return (
        <a
          key={key}
          onClick={() => scrollToSection(key)}
          className="BTN1 mt-1 mtoc text-dark"
          style={{ fontSize: '14px' }}
          type="button"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      );
    } else {
      return (
        <a
          key={key}
          onClick={() => scrollToSection(key)}
          className="BTN1 mt-1 mtoc"
          style={{ fontSize: '14px' }}
          type="button"
        >
          {label}
        </a>
      );
    }
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);


    console.log(section);


    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };





  const [isFixed, setIsFixed] = useState(false);
  const [UserLogin, setUserLogin] = useState(false);
  const [ApplyUniversity, setApplyUniversity] = useState(false);
  const dispatch = useDispatch();




  const prospectus = useSelector((state) => state.items.prospectus);



  const w = useSelector(getHomePageDetail);
  console.log(w);

  let data1 = {
    university: []
  };
  // const data1=w === (undefined || w.length==0 ) ? [] : w.universitypage;
  let unifaq = [];
  let auth = [];
  let cour = [];
  let rev = [];

  if (!(w == undefined || w.length == 0)) {
    data1 = w.universitypage;

    unifaq = w.universitypage.faq;
    auth = w.universitypage.author;
    cour = w.universitypage.course;
    rev = w.universitypage.review;


  }


  const [author, setauthor] = useState([]);


  const [faq, setfaq] = useState([]);
  const f = [];
  const R = [];
  const [reviews, setreviews] = useState([]);

  const Cour = [];
  const [course, setcourse] = useState([]);


  const MyData = (d) => {
    d.forEach((p) => {
      if (p.urlname == Id.split('&')[0]) {

        unifaq.forEach((x) => {


          if (x.uniid == p.id) {
            f.push(x);
          }
        })
        auth.forEach((q) => {
          if (q.uniid == p.id) {
            setauthor([q]);
          }
        })
        rev.forEach((r) => {


          if (r.uniid == p.id) {
            R.push(r);

          }
        })
        cour.forEach((y) => {
          y.universityid.forEach((j) => {
            if (j == p.id) {

              Cour.push(y);

            }
          })
        })

      }
    })
    setfaq(f);
    setreviews(R);
    setcourse(Cour);



  }

  useEffect(() => {


    if (Id.split('&').length == 1) {


      if (w == undefined || w.length == 0) {
        dispatch(getHomePage());
      }

    }
    else {
      dispatch(getHomePage1());

    }
    scrollToSection('mx-auto');
    checkLogin();


  }, [dispatch]);


  const setting = {
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  const sliderRef = useRef(null);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {

    if (!(data1 === undefined)) {
      if (data1.university.length > 0) {
        extractHtmlContentBetweenHeadings(data1.university);
        MyData(data1.university);

      }
    }



  }, [data1.university]);


  console.log(data1.university);

  const handleDownload = (p) => {

    if (p == '') {
      setApplyUniversity(true);
    }
    else {
      const link = document.createElement('a');

      link.href = `${apiUrl}images/${Prospectus}`;





      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }









  };

  const [isHelpful, setisHelpful] = useState(false);
  const [isReport, setisReport] = useState(false);


  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const totalScroll = documentHeight - windowHeight;
    const scrollPercentage = (scrollTop / totalScroll) * 100;

    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(data1.university);
  console.log(data1);
  return (

    <div >
      {
        data1.university &&
        (
          data1.university.map((v, i) =>
          (
            v.urlname == Id.split('&')[0] ?
              (
                <div key={i}>


                  <div className="grid lg:grid-cols-2 tablet:grid-cols-2  tablet:gap-4 tablet:mt-4 tablet:mb-4 tablet:mx-4
                  mobile:grid-cols-1  mobile:gap-4 mobile:mt-4 mobile:mb-4 mobile:mx-4
                  mobile-small:grid-cols-1  mobile-small:gap-4 mobile-small:mt-4 mobile-small:mb-4 mobile-small:mx-4
                  mobile-extra-small:grid-cols-1  mobile-extra-small:gap-4 mobile-extra-small:mt-4 mobile-extra-small:mb-4 mobile-extra-small:mx-4
                  lg:mt-4 lg:mb-4 lg:mx-24 ">
                    <div className="lg:col-span-1 tablet:col-span-1 mobile:col-span-1 mobile:order-2 mobile-small:col-span-1 mobile-small:order-2 mobile-extra-small:order-2">
                      <div className="w-full flex flex-col">
                        <h1 className="font-bold text-[#212529] text-[2.6rem]">
                          {v.uname}
                        </h1>
                        <p className="font-semibold text-[#212529] mx-2">Accredited with grade A+ by NAAC</p>
                        <div className="flex space-x-1 mt-2 ml-2">
                          <span
                            className="relative overflow-hidden cursor-default float-left text-[#faa51d] text-[16px] half-star"
                            data-index="0"
                            data-forhalf="★"
                          >
                            ★
                          </span>
                          <span
                            className="relative overflow-hidden cursor-default float-left text-[#faa51d] text-[16px] half-star"
                            data-index="1"
                            data-forhalf="★"
                          >
                            ★
                          </span>
                          <span
                            className="relative overflow-hidden cursor-default float-left text-[#faa51d] text-[16px] half-star"
                            data-index="2"
                            data-forhalf="★"
                          >
                            ★
                          </span>
                          <span
                            className="relative overflow-hidden cursor-default float-left text-[#faa51d] text-[16px] half-star"
                            data-index="3"
                            data-forhalf="★"
                          >
                            ★
                          </span>
                          <span
                            className="relative overflow-hidden cursor-default float-left text-[#ddd] text-[16px]"
                            data-index="4"
                            data-forhalf="★"
                          >
                            ★
                          </span>
                          <span className="fs-12 cursor-pointer mt-1 text-[#0056d2] border-b-2 border" >({reviews.length} Reviews)</span>

                        </div>
                        <div className="flex items-center mt-2 gap-2  ">
                          <Image width={50} height={50} src="/aut1.jpg" />
                          <Image width={50} height={50} src="/aut2.jpg" />
                          <Image width={50} height={50} src="/aut3.jpg" />
                          <Image width={50} height={50} src="/img1.png" />
                        </div>

                        <div className="flex gap-2 mt-4">
                          <a target="_blank" onClick={handleButtonClick2} className="bg-primary text-white cursor-pointer text-[10px] md:text-xs flex gap-2 items-center px-4 py-3 rounded-full">
                            <span>Apply to University</span>
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="ms-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </a>
                          <AnimatePresence>{UserLogin ? <Register2 close={() => setUserLogin(!UserLogin)} id={v.id} /> : ""}</AnimatePresence>
                          <AnimatePresence>{ApplyUniversity ? <UniversityApply close={() => setApplyUniversity(!ApplyUniversity)} uniId={v.id} /> : ""}</AnimatePresence>
                          <button onClick={handleButtonClick3} className="border border-primary text-primary text-[10px] md:text-xs flex gap-2 items-center px-4 py-3 rounded-full">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                            </svg>
                            <span>Talk to University</span>
                          </button>


                          <AnimatePresence>{UserLogin ? <Register2 close={() => setUserLogin(!UserLogin)} id={v.id} /> : ""}</AnimatePresence>
                          <AnimatePresence>{uniTalk ? <TalkUniversity close={() => setuniTalk(!uniTalk)} id={v.id} /> : ""}</AnimatePresence>
                        </div>
                        <div className="flex">
                          <button className="bg-[aliceblue] rounded-[50px]   text-primary text-[13px] pt-2 pb-2 pl-3 pr-3  mt-4">
                            + Add to Compare
                          </button>
                          <button onClick={(e) => handleDownload(v.prospectus)} className="ml-2 bg-white  text-primary text-[13px] px-2 py-1 rounded-full mt-4">
                            <span class="textprimary fs-13 cursor-pointer"><svg className="d-inline-block mr-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></svg> Download Prospectus</span>

                          </button>
                        </div>
                        <p className="mt-3 ps-2" style={{ color: '#212529', fontSize: '16px', wordSpacing: '1px' }}>Not sure what you are looking for?</p>
                      </div>


                    </div>
                    <div className="lg:col-span-1 tablet:col-span-1 mobile:col-span-1 mobile:order-1 mobile-small:order-1 mobile-small:col-span-1 mobile-extra-small:order-1">
                      <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner ">
                          {v.imageurl.map((v1, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active border' : 'border'}`}>
                              <Image width={500} height={300} src={`${apiUrl}images/${v1}`} srcSet={`${apiUrl}images/${v1}`} className="w-full lg:h-72 tablet:h-72 mobile:h-80 mobile-small:h-60 mobile-extra-small:h-56 rounded " alt="..." />
                            </div>
                          ))}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>

                  </div>
                  {/* <div className="container-fluid  mx-sm-0 ml-sm-0 mx-xl-5 mx-lg-5">
                    <div className="row mx-xl-5 mx-lg-5 mx-sm-0">
                      <div className="col-xl-5 col-lg-5  my-sm-4 col-md-12 col-sm-12 ">

                        <div className="MobileImg2">
                          <h1>{v.uname}</h1>
                          <TypeAnimation
                            className="text-2xl md:text-5xl   universityheadingsm  text-dark font-bold"
                            sequence={[

                              v.uname,
                              1000,
                              v.uname,
                              1000,
                              v.uname,
                              1000,


                            ]}
                            wrapper="h1"
                            speed={50}
                            style={{ color: 'black' }}
                            repeat={Infinity}
                          />

                          <div className="flex items-center gap-2 mt-4">
                            <p class="my-0  university_tag">Accredited with grade A+ by NAAC</p>

                          </div>
                          <div className="d-flex align-items-center gap-2 mt-4">
                            <div className="d-flex align-items-center">
                              <div className="d-flex gap-1" style={{ overflow: 'hidden', position: 'relative' }}>
                                <style>
                                  {`.react-stars-08989159183853315:before {
            position: absolute;
            overflow: hidden;
            display: block;
            z-index: 1;
            top: 0;
            left: 0;
            width: 50%;
            content: attr(data-forhalf);
            color: #faa51d;
          }`}
                                </style>
                                <span className="" data-index="0" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '16px' }}>★</span>
                                <span className="" data-index="1" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '16px' }}>★</span>
                                <span className="" data-index="2" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '16px' }}>★</span>
                                <span className="" data-index="3" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '16px' }}>★</span>
                                <span className="" data-index="4" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(221, 221, 221)', fontSize: '16px' }}>★</span>
                              </div>
                            </div>
                            <a>
                              <span className="fs-12 cursor-pointer" style={{ color: '#0056d2', borderBottom: '1px dashed' }}>({reviews.length} Reviews)</span>
                            </a>
                          </div>

                          <div className="flex items-center gap-2 mt-4 ">
                            <img src="/aut1.jpg" srcSet="/aut1.jpg" className="auth1" />
                            <img src="/aut2.jpg" srcSet="/aut2.jpg" className="auth1" />
                            <img src="/aut3.jpg" srcSet="/aut3.jpg" className="auth1 ml-2" />
                            <img src="/img1.png" srcSet="/img1.png" className="auth1 ml-2" />
                          </div>

                        </div>
                      </div>



                      <div className=" mt-xl-5 mt-lg-5   col-xl-6 col-lg-7 col-md-12 col-sm-12">
                        <div className="MobileImg1">
                          <div className="flex flex-wrap gap-2 mt-lg-2"></div>
                          <div className="flex gap-2 mt-7">
                            <a target="_blank" onClick={handleButtonClick2} className="bg-primary text-white cursor-pointer text-[10px] md:text-xs flex gap-2 items-center px-4 py-3 rounded-full">
                              <span>Apply to University</span>
                              <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="ms-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </a>
                            <AnimatePresence>{UserLogin ? <Register2 close={() => setUserLogin(!UserLogin)} id={uniId} /> : ""}</AnimatePresence>
                            <AnimatePresence>{ApplyUniversity ? <UniversityApply close={() => setApplyUniversity(!ApplyUniversity)} uniId={uniId} /> : ""}</AnimatePresence>

                            <button onClick={handleButtonClick3} className="border border-primary text-primary text-[10px] md:text-xs flex gap-2 items-center px-4 py-3 rounded-full">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                              </svg>
                              <span>Talk to University</span>
                            </button>


                            <AnimatePresence>{UserLogin ? <Register2 close={() => setUserLogin(!UserLogin)} id={uniId} /> : ""}</AnimatePresence>
                            <AnimatePresence>{uniTalk ? <TalkUniversity close={() => setuniTalk(!uniTalk)} id={uniId} /> : ""}</AnimatePresence>

                          </div>
                          <button className="bg-primary/5  text-primary text-[13px] px-3  py-1 rounded-full mt-4">
                            + Add to Compare
                          </button>
                          <button onClick={(e) => handleDownload(v.prospectus)} className="ml-2 bg-white  text-primary text-[13px] px-2 py-1 rounded-full mt-4">
                            <span class="textprimary fs-13 cursor-pointer"><svg className="d-inline-block mr-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></svg> Download Prospectus</span>

                          </button>
                          <p className="mt-3 ps-2" style={{ color: '#212529', fontSize: '16px', wordSpacing: '1px' }}>Not sure what you are looking for?</p>
                        </div>


                      </div>
                    </div>

                  </div> */}


                  <div className="grid lg:pr-8  mobile:my-5 mobile-small:my-5 mobile-extra-small:my-5 lg:pb-6 lg:w-full grid-cols-6 gap-4 ">

                    <div className="lg:col-span-2 whitespace-nowrap tablet:col-span-6 mobile-small:col-span-6 mobile-extra-small:col-span-6 mobile:col-span-6 lg:pl-24 lg:pt-4 pr-1 sticky top-2 lg:h-[43rem] lg:border-r lg:border-[rgba(43,42,41,0.1)] lg:bg-[rgba(228,231,233,0.2)]">
                      <h2 className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden font-bold text-[1.4rem] mx-3 text-lg">Table Of Contents</h2>


                      <div className="tablet:m-3 tablet:border-r-4 tablet:border-r-[#1c4980] tablet:border-l-4 tablet:border-l-[#f75d34] tablet:rounded-lg  tablet:overflow-x-auto lg:overflow-visible   
    mobile:m-2 mobile:border-r-4 mobile:border-r-[#1c4980] mobile:border-l-4 mobile:border-l-[#f75d34] mobile:rounded-lg  mobile:overflow-x-auto 
     mobile-small:m-2 mobile-small:border-r-4 mobile-small:border-r-[#1c4980] mobile-small:border-l-4 mobile-small:border-l-[#f75d34] mobile-small:rounded-lg  mobile-small:overflow-x-auto 
      mobile-extra-small:m-2 mobile-extra-small:border-r-4 mobile-extra-small:border-r-[#1c4980] mobile-extra-small:border-l-4 mobile-extra-small:border-l-[#f75d34] mobile-extra-small:rounded-lg  mobile-extra-small:overflow-x-auto 
    ">
                        <div className="flex lg:flex-col tablet:flex-row lg:mt-3 lg:pr-2 tablet:w-[100%] mobile:w-[100%] mobile-small:w-[100%] mobile-extra-small:w-[100%]">

                          {(() => {
                            let a = 0;
                            const toch1Elements = v.toch1 != null ? v.toch1.map((p, q) => (
                              <a
                                key={q}
                                onClick={() => scrollToSection(`section-${q}`)}
                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] lg:hover:bg-[#0d6efd]"
                              >
                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                              </a>
                            )) : '';

                            const toch2Elements = v.toch2 != null ? v.toch2.map((p, q) => (
                              <a
                                key={q}
                                onClick={() => scrollToSection(`section-${q}`)}
                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                              >
                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                <i className=" tablet:hidden tablet:text-[#fff] mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                              </a>

                            )) : '';

                            const toch3Elements = v.toch3 != null ? v.toch3.map((p, q) => (
                              <a
                                key={q}
                                onClick={() => scrollToSection(`section-${q}`)}
                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                              >
                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                <i className="tablet:bg-red-50 tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                              </a>
                            )) : '';

                            const toch4Elements = v.toch4 != null ? v.toch4.map((p, q) => (
                              <a
                                key={q}
                                onClick={() => scrollToSection(`section-${q}`)}
                                className="flex flex-nowrap align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] tablet:p-4 mobile:p-4 mobile-small:p-4 mobile-extra-small:p-3  lg:pt-3 lg:pb-3 lg:pr-3 lg:pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                              >
                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                <i className="  tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                              </a>
                            )) : '';

                            const toch5Elements = v.toch5 != null ? v.toch5.map((p, q) => (
                              <a
                                key={q}
                                onClick={() => scrollToSection(`section-${q}`)}
                                className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                              >
                                <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: p }}></span>
                                <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                              </a>
                            )) : '';

                            return [
                              ...toch1Elements,
                              ...toch2Elements,
                              ...toch3Elements,
                              ...toch4Elements,
                              ...toch5Elements
                            ];
                          })()}
                          {
                            faq.length > 0 ?
                              (
                                <a

                                  onClick={() => scrollToSection(`faq`)}
                                  className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                                >
                                  <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: "FAQ" }}></span>
                                  <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                                </a>
                              ) : ''
                          }
                          {
                            reviews.length > 0 ?
                              (
                                <a

                                  onClick={() => scrollToSection(`review`)}
                                  className="d-flex align-items-center font-medium justify-content-between cursor-pointer hover:text-[#fff] pt-3 pb-3 pr-3 pl-4 rounded-[20px] hover:bg-[#0d6efd]"
                                >
                                  <span className="text-[0.9rem] font-[500]" dangerouslySetInnerHTML={{ __html: "Testimonial/Reviews" }}></span>
                                  <i className="tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden fas fa-chevron-right"></i>
                                </a>
                              ) : ''
                          }

                        </div>
                      </div>
                    </div>


                    <div className="lg:col-span-4 tablet:col-span-6 mobile-small:col-span-6 mobile-extra-small:col-span-6 mobile:col-span-6 tablet:px-3 mobile:px-2 mobile-small:px-2 mobile-extra-small:px-2  lg:pb-2 lg:pl-2 lg:pr-16  ">

                      <div className='border border-[#f8f8f8]   rounded-[2rem] px-4 pt-3 pb-3'>
                        {
                          author.map((en, i) =>
                          (
                            <Link key={i} href={`/Author/${en.name}`} onClick={() => {
                              dispatch(setAuthorId(en.id))
                            }
                            } >

                              <div key={i} className='grid  grid-cols-12 mobile-extra-small:gap-3'>
                                <div className='col-span-1 mobile:col-span-2 mobile-small:col-span-2 mobile-extra-small:col-span-2'>
                                  <Image width={50} height={50} alt={en.name} src={`${apiUrl}images/${en.profile}`} className='rounded-[50%]' />
                                </div>
                                <div className='col-span-11 mobile:col-span-10  mobile:-mx-8 mobile-small:col-span-10 mobile-extra-small:col-span-9'>
                                  <div className='flex gap-1 flex-col'>
                                    <div className='flex flex-row'>
                                      <h6 className="text-[1.2rem] h1color font-bold">{en.name}  </h6>
                                    </div>
                                    <div className='flex flex-row'>
                                      <h6 className="font-semibold h2color">
                                        {en.designation}

                                      </h6>
                                    </div>
                                    <div className='flex flex-row'>
                                      <div className='flex'>
                                        <a className='text-[#316FF6]' target='_blank' href={en.fb}> <i className="fa-brands fa-facebook"></i></a>
                                        <a className='text-[#0077B5]' target='_blank' href={en.linkedin}>
                                          <i className=" fa-brands fa-linkedin ml-3" aria-hidden="true"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className='flex flex-row -mt-1'>
                                      <h6 className='text-[#212529] font-medium text-[0.8rem]' >
                                        Update on
                                        &nbsp;

                                        {
                                          v.last_modified == null ?
                                            (
                                              format(new Date(v.added_date), 'dd MMM yyyy')
                                            ) :
                                            (
                                              format(new Date(v.last_modified), 'dd MMM yyyy')
                                            )

                                        }


                                      </h6>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))
                        }
                      </div>
                      <div className='grid grid-cols-1 my-3'>
                        <div className={` C Cour`}>
                          {
                            stringArray.map((p, q) =>
                            (
                              <div
                                key={q}
                                dangerouslySetInnerHTML={{ __html: p }}

                                id={`section-${q}`}
                              />
                            ))
                          }
                        </div>
                        {
                          course.length > 0 ?
                            (
                              <div className="mt-4" id="course">
                                <h2 class="pt-2 mb-4 fw-bold">Courses</h2>




                                <div className='row '>
                                  {
                                    course.map((x, i) =>
                                    (
                                      i < 3 ?
                                        (
                                          <div key={i} className='col-lg-4 ml-2  mt-2  col-md-6 col-sm-12 BatchmateCol rounded' style={{ width: '280px' }}>
                                            <div className='row'>

                                              <div className='col-lg-12 col-sm-12 '>
                                                <img src={`${apiUrl}images/${x.image}`} className="w-full h-[150px]" />
                                              </div>
                                            </div>
                                            <div className='row'>
                                              <p class=" mb-1 h6 textwrap textline_two" >{v.uname}</p>
                                            </div>
                                            <div className='row mt-4'>
                                              <p class="fw-bold mb-1 h6 textwrap textline_two" >{x.courename} </p>
                                            </div>
                                            <div className='row'>
                                              <div className='col-lg-12'>
                                                <p class="fw-bold d-flex  align-items-center text-success mb-2">
                                                  Fee: {x.fee}
                                                </p>
                                              </div>

                                            </div>
                                            <div className='row'>
                                              <div className='col-lg-12'>
                                                <Link href={`${x.urlname}`}>  <p class="bgprimary text-white fw-bold text-center py-2 rounded shadow-1  d-block">More</p>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        ) : ''
                                    ))
                                  }



                                </div>
                              </div>
                            ) : ''
                        }

                        <div className="mt-4 flex flex-col  " id="faq">

                          {
                            faq.length > 0 ?
                              (
                                <h2 class="pt-2 mb-4 fw-bold">Frequently Asked Questions?</h2>
                              ) : ''
                          }


                          <App1 a={faq} />




                        </div>

                        {
                          reviews.length > 0 ?
                            (
                              <div className="mt-4 flex flex-col  " id="review">
                                <h2 class="pt-2 mb-4 fw-bold">Online Reviews</h2>
                                <div className="d-flex mt-4 align-items-start position-relative">
                                  <div className="bg-light d-inline-block py-2 px-3 rounded me-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"></path>
                                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"></path>
                                    </svg>
                                  </div>
                                  <div className="d-flex align-items-center justify-space-between">
                                    <div>
                                      <p className="m-0 fw-bold">Student Reviews</p>
                                      <p className="m-0 fs-12 mb-1">{reviews.length} out of 5</p>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex gap-1" style={{ overflow: 'hidden', position: 'relative' }}>
                                          <span className="" data-index="0" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '15px' }}>★</span>
                                          <span className="" data-index="1" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '15px' }}>★</span>
                                          <span className="" data-index="2" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '15px' }}>★</span>
                                          <span className="" data-index="3" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(250, 165, 29)', fontSize: '15px' }}>★</span>
                                          <span className="" data-index="4" data-forhalf="★" style={{ position: 'relative', overflow: 'hidden', cursor: 'default', display: 'block', float: 'left', color: 'rgb(221, 221, 221)', fontSize: '15px' }}>★</span>
                                        </div>
                                        <span className="fs-12 ms-2">{reviews.length}</span>
                                      </div>
                                    </div>
                                    <div className="position-absolute end-0 top-0"></div>
                                  </div>
                                </div>

                                <p class="m-0 fw-bold">Review this university</p>
                                <p class="fs-12">Share your thoughts with other students</p>

                                {
                                  Status && (
                                    <>
                                      <button onClick={handleButtonClick


                                      }>

                                        <p style={{ padding: '12px 28px', borderRadius: '50px' }} className="bgsecondary w-[200px] mt-4 text-white cursor-pointer d-flex align-items-center gap-2 my-1 fs-14">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                          </svg>
                                          Write a review
                                        </p>

                                      </button>
                                      <AnimatePresence>{showLoginPopUp ? <ReviewForm close={() => setShowLoginPopUp(!showLoginPopUp)} id={v.id} /> : ""}</AnimatePresence>

                                    </>
                                  )
                                }

                                {
                                  showReviewForm && (
                                    <div className="mt-3">
                                      <input
                                        type="text"
                                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                        placeholder="Enter Review"
                                        value={review}
                                        onChange={handleInputChange}
                                      />

                                      <div className="my-2">

                                        {renderStars()}
                                      </div>

                                      <button className="btn bgsecondary my-2" onClick={handleSubmit}>Submit</button>
                                    </div>
                                  )}




                                {
                                  reviews.map((z, k) =>
                                  (
                                    <div key={k} className="review_card mb-2">
                                      <div className="d-flex align-items-center mt-4 mb-2">
                                        <span className="textprimary rounded-circle d-flex align-items-center justify-content-center h6 m-0" style={{ width: '30px', height: '30px', color: '#fff', backgroundColor: '#a9b7b7', fontSize: '14px' }}> {z.name.charAt(0).toUpperCase()} </span>
                                        <p className="m-0 ms-2 text-capitalize fw-bold">{z.name}</p>
                                      </div>
                                      <div className="d-flex gap-2 align-items-center">
                                        <div className="d-flex align-items-center">
                                          <div className="d-flex gap-1" style={{ overflow: 'hidden', position: 'relative' }}>


                                            {[...Array(parseInt(z.rating))].map((_, i) => (
                                              <span
                                                key={i}
                                                style={{ cursor: 'pointer', color: 'orange', opacity: '0.8' }}

                                              >
                                                <i className="fa fa-star"></i>
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                        <span className="fs-14 fw-bold" style={{ color: '#faa51d' }}>Verified</span>
                                      </div>
                                      <p className="fs-12 mt-2 mb-1 text-secondary">Reviewed in India on {new Date(z.added_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                      <p>
                                        {z.detail}
                                      </p>
                                      <div className="d-flex mt-3 align-items-center gap-2">
                                        <p className="m-0" onClick={() => setisHelpful(!isHelpful)}>
                                          <span className="fs-13 border px-2 py-1 rounded" role="button">Helpful</span>
                                        </p>
                                        <p className="m-0 fs-13 border-start px-2 text-dark" role="button" onClick={() => setisHelpful(!isHelpful)}>Report</p>
                                      </div>

                                      <div className="mt-3 d-flex align-items-center">
                                        <p role="button" className="m-0 fw-bold text-primary fs-13 ps-2 ms-auto float-end">
                                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"></path>
                                          </svg>
                                          Reply
                                        </p>
                                      </div>

                                      <AnimatePresence>{isHelpful ? (UserLogin) ? <UniversityApply1 close={() => setisHelpful(!isHelpful)} uniId={v.id} /> : <AuthPopUp close={() => setisHelpful(!isHelpful)} /> : ""}</AnimatePresence>

                                    </div>
                                  ))
                                }


                                <>
                                  <div className="text-center" onClick={handleButtonClick4}>
                                    <p className="textprimary border border-primary cursor-pointer d-inline-flex align-items-center gap-2 my-1 fs-14 px-3 py-2 fw-bold" style={{ backgroundColor: 'aliceblue', borderRadius: '25px' }}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                                      </svg>
                                      All Reviews

                                    </p>
                                  </div>

                                  <AnimatePresence>{showReview ? <AllReview close={() => setShowReview(!showReview)} uniId={data1[0].id} /> : ""}</AnimatePresence>

                                </>

                              </div>
                            ) : ''
                        }

                      </div>




                    </div>



                  </div>
                </div>
              ) : ''
          ))
        )
      }


    </div>

  );
};

export default UniversityPage;

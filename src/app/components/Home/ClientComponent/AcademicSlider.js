"use client"
import Link from "next/link";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AcademicSlider = ({ courselist, data }) => {
    const [active, setActive] = useState("pgCourses")

    const [filterlist, setfilterlist] = useState([]);
    const [isShow, setisShow] = useState(false);


    const ListFilter = () => {


        let c = [];
        for (let i = 0; i < courselist.length; i++) {
            if (courselist[i].categorie == active) {
                c.push(courselist[i]);
            }

        }
        setfilterlist(c);


    }
    useEffect(() => {
        ListFilter();
    }, [active])

    useEffect(() => {
        ListFilter();
    }, [courselist]);

    const sliderRef = useRef(null);
    const nextSlide = () => {

        if (sliderRef.current) {

            sliderRef.current.slickNext();
        }
    };


    const sliderRef1 = useRef(null);
    const nextSlide1 = () => {

        if (sliderRef1.current) {

            sliderRef1.current.slickNext();
        }
    };
    const setting = {
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    const prevSlide1 = () => {

        if (sliderRef1.current) {



            sliderRef1.current.slickPrev();
        }
    };
    const prevSlide = () => {

        if (sliderRef.current) {



            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        dots: false,
        autoplay: true,
        infinite: filterlist.length > 1,  // Dynamic based on the length of ex
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 100,
        slidesToShow: filterlist.length > 2 ? 3 : filterlist.length, // Default value for larger screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 399, // For 'mobile-extra-small' screen size (max width: 399px)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 638, // For 'mobile-small' screen size (400px to 638px)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767, // For 'mobile' screen size (639px to 767px)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1023, // For 'tablet' screen size (768px to 1023px)
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // For 'large' screen size (1024px and above)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                },
            },
        ],
    };
    //    const navigate = useRouter();

    //     const handleClick = (name) => {
    //         navigate.push(`/courses/${name}`);
    //     }
    let apiUrl = process.env.NEXT_PUBLIC_API_URL;

    return (
        <>
            <div className="">
                <div className="w-full  grid grid-cols-4 large:mt-3 tablet:grid-cols-6  tablet:ml-3  tablet:px-2 tablet:pt-3  large:pt-4 large:px-5 large:ml-28">
                    <div className="tablet:hidden mobile-extra-small:hidden mobile:hidden mobile-small:hidden">
                        <div className="title-area mb-25 mb-lg-0 text-xl-start " style={{ paddingTop: '15%' }}>
                            <span className="sub-title"><i className="fal fa-book me-2"></i> Courses Categories</span>

                        </div>
                    </div>
                    <div className="col-span-3  mobile:hidden mobile-small:hidden mobile-extra-small:hidden tablet:col-span-6 mobile-small:w-[200%] mobile:w-[200%] mobile:overflow-scroll mobile:mt-8   mobile:col-span-6 tablet:mt-3 tablet:-ml-3">
                        <ul className="nav nav-tabs mobile:hidden mobile-small:hidden mobile-extra-small:hidden mobile:-ml-12 mobile-small:-ml-8 mobile-small:mt-12  mt-8   flex gap-2 flex-nowrap   tablet:gap-1">
                            {
                                data.map((button, index) =>
                                (
                                    <li key={index} className={`cursor-pointer mobile-small:-ml-4 ${button.id == active ? 'active' : ''}`} onClick={() => setActive(button.id)}><a data-toggle="tab" className="text-dark">{button.name}</a></li>

                                ))
                            }



                        </ul>


                    </div>

                    <div className="grid col-span-6  mobile-extra-small:col-span-6  mobile-extra-small:block mobile-extra-small:h-20 w-full  mobile:block mobile:col-span-6 mobile-small:block mobile-small:col-span-6 large:hidden tablet:hidden">
                        <div className="mt-5">
                            <button onClick={prevSlide1}>
                                <span className="scroll-left position-absolute top-70 ml-3 mt-3 translate-middle-y start-0 d-lg-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                    </svg>
                                </span>
                            </button>

                            <button onClick={nextSlide1}>
                                <span className="scroll-right position-absolute top-70 translate-middle-y mt-3 end-4 d-lg-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                </span>
                            </button>

                            <Slider ref={sliderRef1} className="arrow-small" style={{ marginTop: '-0.2rem' }} {...setting}>
                                {data.map((button) => (
                                    <button
                                        key={button.id}
                                        className={`text-[13px] text-balance font-bold ${active === button.id ? 'text-primary' : 'text-black'}`}
                                        onClick={() => setActive(button.id)}
                                    >
                                        {button.name}
                                    </button>
                                ))}
                            </Slider>
                        </div>
                    </div>

                </div>
                <div className="w-full grid grid-cols-4 relative mobile:ml-3 mobile:mt-3 mobile:px-1 tablet:ml-3 tablet:mt-3 tablet:px-2 mobile-small:-ml-9 mobile-extra-small:-ml-1  mobile-extra-small:mt-14 mobile-small:mt-2 ml-28 px-5">
                    <div className="tablet:hidden mobile-extra-small:hidden mobile-small:hidden tablet:col-span-0 mobile:hidden">  <span className="font-semibold text-[1.8rem] text-dark" >Explore Top Categories</span>
                        <a href="#" className="th-btn mt-8">View All Category<i className="fa-regular fa-arrow-right ms-2"></i></a></div>
                    <div className="col-span-3 tablet:col-span-4 mobile:col-span-4 mobile-small:mt-2  mobile-extra-small:w-[120%] relative tablet:-ml-12  mobile:-ml-12 large:ml-10 mobile:w-[105%] mobile-small:w-[130%] tablet:w-[105%]">
                        <div className="Preview -ml-4" onClick={prevSlide} >

                        </div>
                        <div className="Next bg-red-50 left-[90%]  mobile-small:left-[110%] tablet:left-[100%] mobile:left-[100%] tablet:ml-2" onClick={nextSlide} >

                        </div>
                        <Slider ref={sliderRef} className={` arrow-black tablet:mr-1 large:mr-16 mobile-extra-small:w-[100%] tablet:pr-1 mobile:w-[105%] mobile-small:w-[115%]  tablet:w-[105%] large:pr-5`}
                            {...settings}
                        >

                            {

                                filterlist.map((course, index) => (
                                    <div className="course-box " key={index}>
                                        <div className="course-img ">
                                            <Image style={{ height: '150px', minHeight: '150px' }} className="w-full h-full" src={`${apiUrl}images/${course.image}`} width={300} height={150} alt="" ></Image>
                                            <span className="tag"><i className="fas fa-clock"></i> {course.month}</span>
                                        </div>
                                        <div className="course-content">
                                            <h3 className="course-title text-dark font-bold">
                                                {course.course}</h3>
                                            <div className="course-meta">
                                                <span className="font-semibold">

                                                    {course.mode}</span>
                                                <span><i className="fa fa-user"></i>Students 20+</span>
                                            </div>
                                            <div className="row px-2 ">
                                                <div className="col-md-6 col-sm-6">
                                                    <Link href={`/courses/${course.urlname}`} className="th-btn">Learn More <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                                                </div>
                                                <div className="col-md-6 col-sm-5">
                                                    <div className="course-rating">
                                                        <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                            <span style={{ width: '79%' }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                        </div>(4.7)
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                ))


                            }


                        </Slider>
                    </div>
                </div>


            </div>
            {/* <div className="mt-12">
                <div className="container ">


                    <div className="row">
                        <div className="col-xl-3">
                            <div className="title-area mb-25 mb-lg-0 text-xl-start text-center" style={{ paddingTop: '15%' }}>
                                <span className="sub-title"><i className="fal fa-book me-2"></i> Courses Categories</span>
                                <span className="font-semibold text-[1.8rem] text-dark" >Explore Top Categories</span>
                                <a href="#" className="th-btn mt-8">View All Category<i className="fa-regular fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <ul className="nav nav-tabs py-3  flex gap-2 ">
                                {
                                    data.map((button, index) =>
                                    (
                                        <li key={index} className={`cursor-pointer ${button.id == active ? 'active' : ''}`} onClick={() => setActive(button.id)}><a data-toggle="tab" className="text-dark">{button.name}</a></li>

                                    ))
                                }



                            </ul>


                            <div className="tab-content relative ml-6 ">
                                <div className="Preview -ml-4" onClick={prevSlide} >

                                </div>
                                <div className="Next z-10 right-0" onClick={nextSlide} >

                                </div>
                                <Slider ref={sliderRef} className={` arrow-black `}
                                    {...settings}
                                >

                                    {

                                        filterlist.map((course, index) => (
                                            <div className="course-box " key={index}>
                                                <div className="course-img ">
                                                    <Image style={{ height: '150px', minHeight: '150px' }} className="w-full h-full" src={`${apiUrl}images/${course.image}`} width={300} height={150} alt="" ></Image>
                                                    <span className="tag"><i className="fas fa-clock"></i> {course.month}</span>
                                                </div>
                                                <div className="course-content">

                                                    <h3 className="course-title text-dark font-bold">
                                                        {course.course}</h3>
                                                    <div className="course-meta">
                                                        <span className="font-semibold">

                                                            {course.mode}</span>
                                                        <span><i className="fa fa-user"></i>Students 20+</span>
                                                    </div>
                                                    <div className="row px-2 ">
                                                    <div className="col-md-6 ">
                                                        <Link href={`/courses/${course.urlname}`} className="th-btn">Learn More <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="course-rating">
                                                            <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                                                <span style={{ width: '79%' }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                            </div>(4.7)
                                                        </div>
                                                    </div>

                                                    </div>
                                                </div>
                                            </div>
                                        ))


                                    }


                                </Slider>


















                            </div>




                        </div>
                    </div>


                </div>
            </div > */}

        </>
    )
}
export default AcademicSlider;
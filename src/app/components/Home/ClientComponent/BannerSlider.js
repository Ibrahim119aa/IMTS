"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from "react";

const BannerSlider = ({ bannerimage }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>

            <div className=" h-96 w-full mb-8">
                {
                    bannerimage &&
                    (
                        bannerimage.map((item, index) =>
                        (
                            index == 1 ?
                                (
                                    <div key={index} className="relative grid grid-cols-1"

                                    >
                                        <Image loading="lazy" className="w-full h-[29rem]" width={1000} height={800} alt="" src={`${apiUrl}images/${item.image}`}></Image>
                                        <div className="absolute  ">
                                            <div className="flex flex-row lg:mt-20 tablet:mt-16 mobile:mt-12 lg:ml-24 mobile:ml-10 mobile-small:ml-8 mobile-small:mt-8 tablet:ml-12 gap-2 mobile-extra-small:ml-1 mobile-extra-small:mt-6 mobile-small:gap-0">
                                                <div>
                                                    <span
                                                        className="bg-[#ff2d55] text-white rounded-[20px] px-[16px] py-[6px] mr-[10px] text-[16px] mobile-small:text-[1rem] font-[600] mb-[30px]"
                                                    >
                                                        35% OFF
                                                    </span>

                                                </div>
                                                <div>
                                                    <span className="text-black font-semibold">
                                                        LEARN FROM TODAY
                                                    </span>
                                                </div>

                                            </div>
                                            <div className="flex    mt-3 ml-24 tablet:ml-12 mobile-small:ml-8 mobile:ml-10 gap-2 mobile-small:gap-0 mobile-extra-small:ml-2">
                                                <div>
                                                    <span
                                                        className="d-block font-semibold  text-black mobile-small:text-[1.35rem] mobile-extra-small:text-[1.3rem] text-[2.3rem] "

                                                    >
                                                        Education Is Create Better{" "}
                                                        <span className="text-theme block mt-3 mobile-small:mt-2 mobile-extra-small:m-0">Future.</span>
                                                    </span>

                                                </div>


                                            </div>
                                            <div className="flex flex-row mt-4 mobile-small:mt-2 mobile-extra-small:mt-1 mobile-small:ml-8 mobile-extra-small:w-2/3 w-1/2 ml-24 tablet:ml-12 mobile:ml-10 mobile-extra-small:ml-2 gap-2">
                                                <div> 
                                                    <p
                                                        style={{ fontSize: "18px" }}
                                                        className=" fw-[500]  text-black"

                                                    >
                                                        Education can be thought of as the transmission of
                                                        the values and accumulated knowledge of a society. In
                                                        this sense, it is equivalent.
                                                    </p>
                                                    <a className="th-btn style3 mt-3">
                                                        Get Started
                                                        <i className="fas fa-arrow-right ms-2"></i>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                ) : null
                        ))
                    )
                }
            </div>
            {/* <div className="mb-4">
                {
                    bannerimage &&
                    bannerimage.map((item, index) => (


                        (
                            index == 1 ?
                                (
                                    <div key={index}
                                        className={`grid   grid-col-2 h-[37rem]`}

                                    style={{
                                        backgroundImage: `url('${apiUrl}images/${item.image}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition:'center'
                                    }}

                                    >
                                        <div className=" bg-yellow-200">
                                        </div>
                                        <div className=" bg-green-300"></div>



                                    </div>
                                ) : ''
                        )
                    ))
                }

            </div> */}
            {/* <div className="th-hero-wrapper p-12 hero-1" id="hero">
                <div
                    className="hero-slider-1 th-carousel"

                >
                    {bannerimage &&
                        bannerimage.map((item, index) => (
                            <div className="th-hero-slide" key={index}>

                                <div
                                    className="th-hero-bg "

                                    style={{
                                        backgroundImage: `url('${apiUrl}images/${item.image}')`,
                                        backgroundSize: "cover",
                                    }}
                                ></div>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-6">
                                            <div className="hero-style1 text-dark"


                                            >
                                                <span
                                                    className="hero-subtitle"

                                                >
                                                    <span>35% OFF

                                                    </span> LEARN FROM TODAY
                                                </span>
                                                <h1
                                                    className="  text-dark fs-[1.7rem] "

                                                >
                                                    Education Is Create Better{" "}
                                                    <span className="text-theme">Future.</span>
                                                </h1>
                                                <p
                                                    className="hero-text text-dark"

                                                >
                                                    Education can be thought of as the transmission of
                                                    the values and accumulated knowledge of a society. In
                                                    this sense, it is equivalent.
                                                </p>
                                                <div
                                                    className="btn-group"

                                                >
                                                    <a className="th-btn style3">
                                                        Get Started
                                                        <i className="fas fa-arrow-right ms-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-lg-end text-center">
                                            <div className="hero-img1"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-shape shape3"></div>
                                <div
                                    className="hero-shape shape5 shape-mockup jump-reverse"
                                    data-left="0"
                                    data-bottom="0"
                                >
                                    <img
                                        src="assets/img/hero/shape_1_4.png"
                                        alt="shape"
                                    />
                                </div>
                            </div>
                        ))}
                </div>

              
                <div className="slider-navigation">
                    <button onClick={prevSlide} className="slider-prev">
                        Prev
                    </button>
                    <button onClick={nextSlide} className="slider-next">
                        Next
                    </button>
                </div>
            </div> */}
        </>
    );
};

export default BannerSlider;

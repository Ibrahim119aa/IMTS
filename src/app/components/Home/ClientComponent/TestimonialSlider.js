"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
// const Slider = dynamic(() => import('react-slick'));
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios";

const TestimonialSlider = ({ alumni }) => {



    let apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 400,
        speed: 100,
        slidesToShow: 7, // Default value for larger screens
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
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // For 'large' screen size (1024px and above)
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,

                },
            },
        ],
    };
    return (
        <>


            <div >
                {/* <div
                    onClick={prevSlide}
                    className="Preview -mx-3 my-4  z-10 "

                >

                </div> */}
                {/* <div

                    onClick={nextSlide}
                    className="Next my-4 -mx-3 right-0 z-10 "

                >


                </div> */}
            </div>

            <Slider ref={sliderRef} className="w-full mt-10   arrow-white" {...settings}>
                {


                    alumni && (
                        alumni.map((testimonial, index) => (

                           testimonial.photo!=null?
                           (
                            <div
                            key={index}
                            className="w-full mb-1 bg-white flex flex-col items-center rounded-md"
                        >
                            <Image
                                width={300}
                                height={300}
                                src={`https://login.imtsinstitute.com/public/storage/lead/${testimonial.photo}`}
                                alt={testimonial.photo}
                                className="w-full  lg:w-full lg:h-44 md:h-44 md:w-full sm:h-48 sm:w-full h-48  rounded-md object-cover rounded-t-md"
                            />
                            <div className="flex font-semibold text-dark fs-[10px] justify-center align-item-center">
                                {testimonial.name.split(' ').length > 1 ? testimonial.name.split(' ')[0] : testimonial.name}
                            </div>

                            {/* <Image
                                width={500}
                                height={500}
                                src={`${apiUrl}images/${testimonial.name}`}
                                alt={testimonial.name}

                                className="h-[30px] mt-2  w-[40px] mx-auto"
                            /> */}
                        </div>
                           ):''
                        ))
                    )
                }

            </Slider>
        </>
    )
}
export default TestimonialSlider;
"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const AboutSlider = ({ media,settings }) => {
    
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

   

    return (

        <div className="w-full relative">

            <div onClick={prevSlide} className="Preview  z-10 left-0"></div>


            <div onClick={nextSlide} className="Next absolute top-1/2 z-10  right-0"></div>


            <Slider ref={sliderRef} className="w-full mt-3 p-3 arrow-white" {...settings}>
                {
                    media && (
                        media.map((testimonial, index) => (

                            <div
                                key={index}
                                className="w-full mb-2 bg-white flex flex-col items-center rounded-md"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={`${apiUrl}images/${testimonial.image}`}
                                    alt={testimonial.name}
                                    className="w-full h-[300px]  rounded-md"
                                />
                                {/* <hr /> */}

                            </div>
                        ))
                    )
                }
            </Slider>


        </div>
    );
}

export default AboutSlider;

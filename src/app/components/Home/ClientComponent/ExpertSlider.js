"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
// const Slider = dynamic(() => import('react-slick'),{ssr:false});
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useRef } from "react";

const ExpertSlider = ({ ex, settings }) => {

    
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
        <div className="relative">
            <div className="Preview1" onClick={prevSlide} >

            </div>
            <div className="Next1 z-10 right-0" onClick={nextSlide} >

            </div>
            <Slider ref={sliderRef} className={`p-3 arrow-black`}
                {...settings}
            >

                {

                    ex.map((consultant, index) => (
                        <div className="col-lg-6 " key={index}>
                        <div className="team-card style2">
                            <div className="team-img-wrap">
                                <svg className="team-shape" xmlns="http://www.w3.org/2000/svg" width="327" height="337" viewBox="0 0 327 337" fill="none">
                                    <path d="M158.167 331C158.167 333.946 160.555 336.333 163.5 336.333C166.446 336.333 168.833 333.946 168.833 331C168.833 328.054 166.446 325.667 163.5 325.667C160.555 325.667 158.167 328.054 158.167 331ZM158.167 6C158.167 8.94552 160.555 11.3333 163.5 11.3333C166.446 11.3333 168.833 8.94552 168.833 6C168.833 3.05448 166.446 0.666667 163.5 0.666667C160.555 0.666667 158.167 3.05448 158.167 6ZM325 167.5C325 257.254 253.238 330 163.5 330V332C254.359 332 327 258.343 327 167.5H325ZM2.00012 167.5C2.00012 77.7618 73.7458 7 163.5 7V5C72.6574 5 0.00012207 76.6411 0.00012207 167.5H2.00012Z" fill="#0D5EF4" />
                                </svg>
                                <div className="team-img">
                                    <Image style={{height:'250px'}} width={300} height={300} loading="lazy" 
                                     src={`${apiUrl}images/${consultant.image}`}
                                     srcSet={`${apiUrl}images/${consultant.image}`}
                                     alt={consultant.name}
                                    ></Image>
                                    {/* <img src="assets/img/team/t1.png" alt="Team" /> */}
                                </div>
                                <div className="team-social">
                                    <a href="#" className="icon-btn">
                                        <i className="far fa-plus"></i>
                                    </a>
                                    <div className="th-social">
                                        <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                        <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                        <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-content">
                                <h3 className="team-title text-dark">{consultant.name}</h3>
                                <span className="team-desig text-dark">{consultant.designation}</span>
                            </div>
                        </div>
                    </div>
                    ))


                }


            </Slider>
            </div>
    )
}
export default ExpertSlider;
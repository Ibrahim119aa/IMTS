"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
// const Slider = dynamic(() => import('react-slick'),{ssr:false});
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const HomeBlogSlider = ({ ex, settings }) => {
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
            <Slider ref={sliderRef}
                {...settings}
            >

                {

                    ex.map((consultant, index) => (
                        <div className="col-lg-6 col-xl-4" key={index}>
                            <div className="event-card">
                                <div className="event-card_img" data-mask-src="assets/img/event/event_img-shape.png">
                                    <Image className="w-[200px] h-[150px] rounded-[2rem]" width={200} height={200} src={`${apiUrl}images/${consultant.image}`} alt="event" >
                                    </Image>
                                </div>
                                <div className="event-card_content">
                                    <div className="event-author">
                                        <div className="avater">
                                            <Image className="w-[70px] h-[40px] " width={60} height={60} src={`${apiUrl}images/${consultant.profile}`} alt="event" >
                                            </Image>
                                        </div>
                                        <div className="details">
                                            <span className="author-name">{consultant.name}</span>
                                            <p className="author-desig">{consultant.designations}</p>
                                        </div>
                                    </div>
                                    <div className="event-meta">
                                        <p className="flex">
                                            <a href={consultant.fb}><i className="fab fa-facebook-f"></i></a>
                                            <a href={consultant.linkedin}><i className="fab fa-linkedin-in -ml-8"></i></a>

                                        </p>

                                    </div>
                                    <h3 className="event-card_title h-24  text-[#212529]"><Link href={`/blog/${consultant.urlname}`}>{consultant.pagename}</Link></h3>
                                    <div className="event-card_bottom">
                                        <Link href={`/blog/${consultant.urlname}`} className="th-btn">View More <i className="far fa-arrow-right ms-1"></i></Link>
                                    </div>
                                    <div className="event-card-shape jump">
                                        <img src="assets/img/event/event-box-shape1.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))


                }


            </Slider>
        </div>
    )
}
export default HomeBlogSlider;

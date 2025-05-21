"use client"
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
// const Slider = dynamic(() => import('react-slick'));
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image";
const StudentReviewSlider = ({ media, settings }) => {

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
    const [isMounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])
    return (
        (
            isMounted && (
                <div className="grid grid-cols-1 mt-0 mobile-small:-ml-4 mobile-extra-small:-ml-3 ">
                    <div className="flex mr-2 gap-2 justify-content-end">
                        <div className='Preview2  ' onClick={prevSlide} >
                            <i className="far fa-arrow-left"></i>
                        </div>
                        <div onClick={nextSlide} className='Next2 ' >
                            <i className="far fa-arrow-right"></i>
                        </div>
                    </div>
                    <div>
                        <Slider ref={sliderRef} className=" arrow-white mt-3"  {...settings}>
                            <div className="col-lg-6">
                                <div className="testi-box style2">
                                    <div className="testi-box_review">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        (4.7)
                                    </div>
                                    <div className="testi-box-bg-shape">
                                        <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4" />
                                        </svg>
                                    </div>
                                    <div className="testi-box_content">

                                        <p className="testi-box_text text-dark">“Quickly maximize visionary solutions after mission critical action item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                                    </div>
                                    <div className="testi-box_bottom">
                                        <div className="testi-box_img">
                                            <img src="assets/img/testimonial/testi_3_1.jpg" alt="Avater" />
                                        </div>
                                        <div className="testi-box-author-details">
                                            <h3 className="testi-box_name text-dark">Zara Head Milan</h3>
                                            <span className="testi-box_desig text-dark">IT Student</span>
                                        </div>
                                        <div className="testi-box_quote">
                                            <img src="assets/img/icon/testi-quote2.svg" alt="quote" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-box style2">
                                    <div className="testi-box_review">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        (4.7)
                                    </div>
                                    <div className="testi-box-bg-shape">
                                        <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4" />
                                        </svg>
                                    </div>
                                    <div className="testi-box_content">

                                        <p className="testi-box_text text-dark">They were able to provide me with a range of options for my roof replacement, item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning.</p>
                                    </div>
                                    <div className="testi-box_bottom">
                                        <div className="testi-box_img">
                                            <img src="assets/img/testimonial/testi_1_1.jpg" alt="Avater" />
                                        </div>
                                        <div className="testi-box-author-details">
                                            <h3 className="testi-box_name text-dark">David H. Smith</h3>
                                            <span className="testi-box_desig text-dark">Regular Student</span>
                                        </div>
                                        <div className="testi-box_quote">
                                            <img src="assets/img/icon/testi-quote2.svg" alt="quote" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-box style2">
                                    <div className="testi-box_review">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        (4.7)
                                    </div>
                                    <div className="testi-box-bg-shape">
                                        <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4" />
                                        </svg>
                                    </div>
                                    <div className="testi-box_content">

                                        <p className="testi-box_text text-dark">They worked tirelessly to complete the job on time and the final result item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                                    </div>
                                    <div className="testi-box_bottom">
                                        <div className="testi-box_img">
                                            <img src="assets/img/testimonial/testi_1_1.jpg" alt="Avater" />
                                        </div>
                                        <div className="testi-box-author-details">
                                            <h3 className="testi-box_name text-dark">Anadi Juila</h3>
                                            <span className="testi-box_desig text-dark">IT Student</span>
                                        </div>
                                        <div className="testi-box_quote">
                                            <img src="assets/img/icon/testi-quote2.svg" alt="quote" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-box style2">
                                    <div className="testi-box_review">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        (4.7)
                                    </div>
                                    <div className="testi-box-bg-shape">
                                        <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4" />
                                        </svg>
                                    </div>
                                    <div className="testi-box_content">

                                        <p className="testi-box_text text-dark">“Quickly maximize visionary solutions after mission critical action item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                                    </div>
                                    <div className="testi-box_bottom">
                                        <div className="testi-box_img">
                                            <img src="assets/img/testimonial/testi_1_2.jpg" alt="Avater" />
                                        </div>
                                        <div className="testi-box-author-details">
                                            <h3 className="testi-box_name text-dark">Zara Head Milan</h3>
                                            <span className="testi-box_desig text-dark">Regular Student</span>
                                        </div>
                                        <div className="testi-box_quote">
                                            <img src="assets/img/icon/testi-quote2.svg" alt="quote" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-box style2">
                                    <div className="testi-box_review">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        (4.7)
                                    </div>
                                    <div className="testi-box-bg-shape">
                                        <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4" />
                                        </svg>
                                    </div>
                                    <div className="testi-box_content">

                                        <p className="testi-box_text text-dark">They were able to provide me with a range of options for my roof replacement, item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning.</p>
                                    </div>
                                    <div className="testi-box_bottom">
                                        <div className="testi-box_img">
                                            <img src="assets/img/testimonial/testi_1_2.jpg" alt="Avater" />
                                        </div>
                                        <div className="testi-box-author-details">
                                            <h3 className="testi-box_name text-dark">David H. Smith</h3>
                                            <span className="testi-box_desig text-dark">IT Student</span>
                                        </div>
                                        <div className="testi-box_quote">
                                            <img src="assets/img/icon/testi-quote2.svg" alt="quote" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-box style2">
                                    <div className="testi-box_review">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        (4.7)
                                    </div>
                                    <div className="testi-box-bg-shape">
                                        <svg width="78" height="111" viewBox="0 0 78 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L78 30V71C78 93.0914 60.0914 111 38 111H10C4.47715 111 0 106.523 0 101V0Z" fill="#0D5EF4" />
                                        </svg>
                                    </div>
                                    <div className="testi-box_content">

                                        <p className="testi-box_text text-dark">They worked tirelessly to complete the job on time and the final result item productivity premium portals for impactful -services inactively negotiate enabled niche markets via growth strategies. University is accredited by the Higher Learning Commission.</p>
                                    </div>
                                    <div className="testi-box_bottom">
                                        <div className="testi-box_img">
                                            <img src="assets/img/testimonial/testi_3_1.jpg" alt="Avater" />
                                        </div>
                                        <div className="testi-box-author-details">
                                            <h3 className="testi-box_name text-dark">Anadi Juila</h3>
                                            <span className="testi-box_desig text-dark">Regular Student</span>
                                        </div>
                                        <div className="testi-box_quote">
                                            <img src="assets/img/icon/testi-quote2.svg" alt="quote" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            )
        )
    )
}
export default StudentReviewSlider;
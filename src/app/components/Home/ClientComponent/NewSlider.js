"use client"
import { useRef } from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
// const Slider = dynamic(() => import('react-slick'));
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image";
const NewSlider = ({ media, settings }) => {

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
            <>
                <div className='Preview my-20 -mx-3 z-10' onClick={prevSlide} >

                </div>
                <div onClick={nextSlide} className='Next my-20 -mx-3 right-0 z-10' >

                </div>
            </>
            <Slider ref={sliderRef} className=" arrow-white mt-8"  {...settings}>
                {

                    media && (

                        media.length > 0 ?
                            (
                                media.map((data, index) => (
                                    <div className="col-md-3" key={index}>
                                        <div  data-overlay="title" data-opacity="8">
                                            <img
                                            style={{height:'200px'}}
                                                src={`${apiUrl}images/${data.image}`}
                                            />
                                            <a href="https://www.youtube.com/watch?v=lgcVubmxxQU" className="play-btn style2 popup-video"><i className="fa-sharp fa-solid fa-play"></i></a>
                                        </div>

                                    </div>

                                ))
                            ) : ''
                    )
                }
            </Slider>
        </div>
    )
}
export default NewSlider;
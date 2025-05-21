"use client"
import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image';
const CVExpertSlider=({ex,settings})=>
{
    let apiUrl=process.env.NEXT_PUBLIC_API_URL;
    
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
    <>
     <div className="my-2 relative grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 " >
                        <h1 className='fw-bold mx-4 mt-3 text-dark h2'>Meet Our Team</h1>

                        <>

                            <div className="Preview" onClick={prevSlide} >

                            </div>
                            <div className="Next z-10 right-0" onClick={nextSlide} >

                            </div>


                        </>


                        {
                            (
                                <Slider ref={sliderRef} className="p-3 arrow-black" {...settings} >

                                    {

                                        ex && (
                                            ex.map((z, index) => (
                                                <div key={index} >

                                                    <div className="card">
                                                        <Image width={300} height={200} priority src={`${apiUrl}images/${z.image}`} className="card-img-top CVCard" alt="..." />

                                                        <div className="card-content   mt-2 ">
                                                            <h5 className="text-center text-sm font-semibold">{z.name}</h5>


                                                            <p >{z.designation}  </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )

                                    }


                                </Slider>
                            )
                        }
                    </div>
    </>
  )
}
export default CVExpertSlider;
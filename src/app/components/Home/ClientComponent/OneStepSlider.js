"use client"
import Image from "next/image";
import { useEffect,useState } from "react";
const OneStepSlider = ({ images }) => {
    let apiUrl=process.env.NEXT_PUBLIC_API_URL;
    
    const l = images ? images.length : '';
    const [current, setCurrent] = useState(0);
    useEffect(() => {




        const timer = setInterval(() => {
            setCurrent((current) => (current === l - 1 ? 0 : current + 1));
        }, 2000);
        return () => clearInterval(timer);

    }, [l]);
    return (
        <>
            {/* {
                            images && (
                                images.length > 0 ?
                                    (
                                        <>
                                            <div className='Preview  cursor-pointer my-4 left-[13%] z-10' onClick={prevSlide} >

                                            </div>
                                            <div onClick={nextSlide} className='Next my-4 right-[25%] z-10' >

                                            </div>
                                        </>
                                    ) : ''
                            )
                        } */}

            <div className="h-[400px] MobileLarge md:h-[500px] w-[200px] md:w-[320px] mx-auto relative flex justify-center my-20  items-center">

                {
                    <>
                        <Image width={270} height={200} priority  className="absolute z-10 top-0 left-0 h-[300px] md:h-[400px]" src="/phone.png" alt="Phone frame" />
                        <div className="absolute top-[2.1%] left-[15%] h-[73.8%] w-[54%] overflow-hidden">
                            {
                                images && (
                                    images.map((image, index) => (
                                        <Image
                                        width={500}
                                        height={500}
                                            key={index}
                                            src={`${apiUrl}images/${image}`}
                                            alt={image}
                                            className="absolute h-full w-full  transition-transform duration-500"
                                            style={{
                                                transform: `translateX(${(index - current) * 100}%)`,
                                            }}
                                        />
                                    ))
                                )
                            }
                        </div>
                    </>
                }

            </div>
        </>
    )
}
export default OneStepSlider;
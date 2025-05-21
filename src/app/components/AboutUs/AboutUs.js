

import { getAbout, getMedia } from '@/app/_api/About/About';
import dynamic from 'next/dynamic';
const AboutSlider = dynamic(() => import('@/app/components/AboutUs/ClientComponent/AboutSlider'));
const AnimtationCounter = dynamic(() => import('@/app/components/AboutUs/ClientComponent/AnimtationCounter'));
import '@/app/globals.css';


const AboutUs = async () => {
    const aboutlist = await getAbout();
    const ex = await getMedia();

    const settings = {
        dots: false,
        infinite: ex.length > 1,  // Dynamic based on the length of ex
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 100,
        slidesToShow: 5, // Default value for larger screens
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
                    slidesToShow: 5,
                    slidesToScroll: 1,

                },
            },
        ],
    };

    return (
        <div className=''>
            <div className='w-full h-96 bg-[#efc3b7] flex items-center justify-center'>
                <h1 className='text-4xl  text-primary pb-2'>
                    About IMTS
                </h1>
            </div>
            <div>
                {
                    aboutlist && aboutlist.map((v, index) =>
                    (
                        <div key={index}>
                            <div className='grid grid-cols-1 w-full lg:p-2 tablet:p-2 mobile:p-1 mobile-small:p-1 mobile-extra-small:p-1' >
                                <div className=' C'>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: v.content }}

                                    />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-12 lg:flex-row tablet:flex-row lg:justify-center'>
    <div>
        <h2 className='text-2xl h3color font-medium'>
            <span>Student Enrolled</span>
        </h2>
        <span className='mt-4'>
            <AnimtationCounter num={50000} />
        </span>
    </div>
    <div>
        <h2 className='text-2xl h3color font-medium'>
            <span>Student Enrolled</span>
        </h2>
        <span className='mt-4'>
            <AnimtationCounter num={350} />
        </span>
    </div>
    <div>
        <h2 className='text-2xl h3color font-medium'>
            <span>Student Success Rate</span>
        </h2>
        <span className='mt-4'>
            <AnimtationCounter num={98} />
        </span>
    </div>
</div>

                             

                                <div className=' C'>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: v.moreabout }}

                                    />
                                </div>
                                <hr className="mx-3" />
                                <div className='w-full flex items-center justify-center'>

                                    <h2 className='text-2xl ml-5 font-bold text-primary'>
                                        What the media are saying about IMTS
                                    </h2>

                                </div>
                                <AboutSlider media={ex} settings={settings} />

                            </div>

                        </div>
                    )
                    )
                }

            </div>
        </div>
    );
}

export default AboutUs;

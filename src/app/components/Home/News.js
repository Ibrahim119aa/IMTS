

import { getNewList } from '@/app/_api/Home/Home';
import dynamic from 'next/dynamic';
const NewSlider = dynamic(() => import('@/app/components/Home/ClientComponent/NewSlider'));

const News = async () => {
    let ex = await getNewList();




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
        <section className="mediaa mt-20">

                <div className="container">
                    <div className="mb-35  text-md-start">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-10">
                                <div className="title-area mb-md-0 ">
                                    <span className="sub-title  font-bold"><i className="fal fa-book me-2"></i> News Coverage</span>
                                    <span className="sec-title mt-32  text-[2rem] text-dark font-bold">Our Media Coverage</span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <a href="#" className="th-btn">Explore More<i className="fa-solid fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                   
                   <NewSlider media={ex} settings={settings}/>
                </div>
            </section>
    );
};

export default News;

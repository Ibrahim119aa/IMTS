import dynamic from "next/dynamic";
const StudentReviewSlider = dynamic(() => import('./ClientComponent/StudentReviewSlider'),
    {
        ssr: false
    })
const StudentReview = () => {

    const settings = {
        dots: false,
        infinite: 2,  // Dynamic based on the length of ex
        autoplay: true,
        autoplaySpeed: 500,
        speed: 100,
        slidesToShow: 3, // Default value for larger screens
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767, // For 'mobile' screen size (639px to 767px)
                settings: {
                    slidesToShow: 2,
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

        <section className="relative testi-area-3 bg-smoke overflow-hidden space">
            <div className="shape-mockup testi2-bg-shape2 spin d-xl-block d-none" >
                <img src="assets/img/testimonial/testi-bg-shape_1_2.png" alt="img" />
            </div>

            <div className="shape-mockup testi2-bg-shape2 spin d-xl-block d-none" data-left="0" data-top="30%">
                <img src="assets/img/testimonial/testi-bg-shape_1_2.png" alt="img" />
            </div>

            <div className="shape-mockup testi2-bg-shape3 jump d-lg-block d-none" data-left="5%" data-top="45%">
                <img src="assets/img/testimonial/testi-bg-shape_2_1.png" alt="img" />
            </div>
            <div className="container ">
                <div className="title-area ">
                    <span className="sub-title  font-bold"><i className="fal fa-book me-2"></i> Our Students Testimonials</span>
                    <span className="sec-title text-dark  text-[2rem] font-bold">Students Says About Us!</span>
                </div>
            </div>
            <div className="pl-8 mobile:pl-3 mobile-small:pl-3 mobile-extra-small:pl-5 -mt-16">

                <StudentReviewSlider settings={settings} />

            </div>
        </section>

    )
}
export default StudentReview;
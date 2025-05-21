
import { getStaffList } from "@/app/_api/Home/Home";
import dynamic from "next/dynamic";
const ExpertSlider = dynamic(() => import('@/app/components/Home/ClientComponent/ExpertSlider'),
    {
        ssr: false
    });
const Experts = async () => {

    let ex = await getStaffList();












    const settings = {
        dots: false,

        infinite: ex.length > 1,  // Dynamic based on the length of ex
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 100,
        slidesToShow: 4, // Default value for larger screens
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
                    slidesToShow: 6,
                    slidesToScroll: 1,

                },
            },
        ],
    };





    return (
        <>
            {/* <div className="  w-full p-4   bg-[#02081b]">
                <div className="w-full max-w-[1320px]  ">

                    <div className="container text-center">
                        <h3 className="text-white text-xl experttext md:text-[32px] font-bold h2color text-center mt-3">Expert Guidance, Reliable Support</h3>

                        <p className="text-white text-center  md:px-48 text-sm md:text-base mt-3">
                            IMTS  2100+ Dedicated Professionals Are Ready to Guide and Support You Every Step of the Way
                        </p>
                    </div>

                    <div className="my-4 relative grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 " >


                      <ExpertSlider ex={ex} settings={settings} />
                       
                    </div>


                </div>
            </div> */}
            <section className="space overflow-hidden">
                <div className="shape-mockup team2-bg-shape1 jump-reverse d-lg-block d-none" data-left="-2%" data-top="0">
                    <img src="assets/img/team/team-shape_1_1.png" alt="img" />
                </div>

                <div className="shape-mockup team2-bg-shape5 jump d-xxl-block d-none" data-right="-7%" data-top="40%">
                    <img src="assets/img/team/team-shape_1_5.png" alt="img" />
                </div>

                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title"><i className="fal fa-book me-2"></i> Our Instructor</span>
                        <span className="font-bold text-[2rem] sec-title text-dark">Meet Our Expert Instructor</span>
                    </div>
                    <button type="button" className="slick-prev slick-arrow" ><i className="far fa-arrow-left"></i></button>

                    <ExpertSlider ex={ex} settings={settings} />






                </div>
            </section>
        </>
    )
}

export default Experts

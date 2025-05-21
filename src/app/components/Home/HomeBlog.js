import { getBlog } from "@/app/_api/Blog/Blog";
import dynamic from "next/dynamic";
const HomeBlogSlider = dynamic(() => import('./ClientComponent/HomeBlogSlider'),
    {
        ssr: false
    });

const HomeBlog = async () => {
    const blog = await getBlog();

    const settings = {
        dots: false,

        infinite: blog.length > 1,  // Dynamic based on the length of ex
        autoplay: true,
        autoplaySpeed: 1000,
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
                    slidesToShow: 6,
                    slidesToScroll: 1,

                },
            },
        ],
    };
    return (
        <section className="space" data-bg-src="assets/img/bg/event-bg_1.png">
            <div className="shape-mockup event-shape1 jump" data-top="0" data-left="-60px">
                <img src="assets/img/team/team-shape_1_1.png" alt="img" />
            </div>
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title text-[1rem]"><i className="fal fa-book me-2"></i> Fetaured Blogs</span>
                    <span className="sec-title text-[#212529] font-semibold text-[2rem]">Our Upcoming Blogs</span>
                </div>
                <div className="row slider-shadow event-slider-1 th-carousel gx-70" >

                   
                    <HomeBlogSlider ex={blog}  settings={settings}/>



                </div>
            </div>
        </section>
    )
}
export default HomeBlog;
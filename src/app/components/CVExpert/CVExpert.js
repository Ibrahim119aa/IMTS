import Image from 'next/image';
import '@/app/globals.css'
import { getExpertPage } from '@/app/_api/CVExpert/CVExpert';
import { getStaffList } from '@/app/_api/Home/Home';
import dynamic from 'next/dynamic';
const CVExpertSlider = dynamic(() => import('@/app/components/CVExpert/ClientComponent/CVExpertSlider'));

const CVExpert = async () => {


    let apiUrl = process.env.API_URL;
    const expert = await getExpertPage();
    const ex = await getStaffList();


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






    return <section id='mx-auto '>
        {


            expert.map((v, k) =>
            (
                <div key={k} >
                    <div className={`my-3 text-justify grid mobile-extra-small:grid-cols-1 mobile-extra-small:px-4 mobile-extra-small:pt-1'  mobile:grid-cols-3 mobile:px-5  mobile-small:grid-cols-1 mobile-small:px-6 mobile-small:pt-1 tablet:grid-cols-3 tablet:px-8 tablet:pt-1  lg:grid-cols-3 lg:px-10 lg:pt-3 `}>
                        <div className={`lg:col-span-2 col-span-2`} dangerouslySetInnerHTML={{ __html: v.qualityassurancecell }}>

                        </div>
                        <div
                        >
                            <Image width={500} height={300} src={`${apiUrl}images/${v.qualitycellimage}`} className='rounded h-56' alt="" />
                        </div>

                    </div>
                    <div className={`text-justify bg-[aliceblue] grid mobile-extra-small:grid-cols-1 mobile-extra-small:px-3 mobile-extra-small:pt-1 mobile:grid-cols-3 mobile:pt-3 mobile:gap-6 mobile:px-6  mobile-small:grid-cols-1 mobile-small:px-5 mobile-small:pt-1 tablet:grid-cols-3 tablet:px-7 tablet:pt-2 tablet:gap-12  lg:grid-cols-3 lg:px-10 lg:pt-3 lg:gap-16`}>
                        <div className={`lg:col-span-2 col-span-2`} dangerouslySetInnerHTML={{ __html: v.training }}>

                        </div>
                        <div

                        >

                            <Image width={500} height={300} src={`${apiUrl}images/${v.trainingimage}`} className='rounded-[100%] m-auto w-80 h-80 border-[5px]  border-[#d5d0c7]' alt="" />
                        </div>

                    </div>
                    <CVExpertSlider ex={ex} settings={settings} />

                    <div className={`bg-[#f5f5f5] pb-6  gap-4 my-3 text-justify grid mobile-extra-small:grid-cols-1 mobile-extra-small:px-10 mobile-extra-small:pt-1 mobile:grid-cols-3 mobile:pt-3 mobile:px-8  mobile-small:grid-cols-1 mobile-small:px-10 mobile-small:pt-1 tablet:grid-cols-3 tablet:px-10 tablet:pt-3  lg:grid-cols-3 lg:px-8  lg:pt-3 `}>
                        <div className={`lg:col-span-2 col-span-2`} dangerouslySetInnerHTML={{ __html: v.qualityassurancecell }}>

                        </div>
                        <div
                        >
                            <Image width={500} height={300} src={`${apiUrl}images/${v.qualityteamimage}`} className='rounded h-56' alt="" />
                        </div>

                    </div>


                </div>
            ))


        }
    </section>;
}



export default CVExpert;
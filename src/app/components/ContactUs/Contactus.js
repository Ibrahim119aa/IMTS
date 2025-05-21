
import React from "react"
import { apiUrl } from "../utils/api";
import Image from "next/image";

const fetchData = async () => {
    const res = await fetch(`${apiUrl}get-Contact-Us-Latest`, {
        next: {
            revalidate: 3600, // Cache the data for 3600 seconds (1 hour)
        },
    });
    return res.json();
};
const Contactus = async () => {

    const head = {
        caption: "Need Answers? Connect with us over a detailed telephonic session",
        mentorOffer: {
            image: "/24-hours.png",
            title: "Our Mentors Offer ",
            list: [" Correct Information", " Assistance to get the right university", " answers related to your degree", " Career Guidance support"],
        },
    }

    const getInTouch = {
        heading: "Get in Touch",
        caption: "Give us a ring. You can even come to meet us",
    }
    // const isTablet = useMediaQuery({ query: '(min-width:768px) and (max-width: 1023px)' });
    const isTablet = "141234";


    // useEffect(() => {
    //     scrollToSection("bg-[#0056d2]");
    // }, []);

    // const contactlist = useSelector(getContactPageDetail);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (contactlist == undefined || contactlist.length == 0) {
    //         dispatch(getContactUs());
    //     }
    // }, [dispatch]);



    // const scrollToSection = (sectionClass) => {
    //     const sections = document.getElementsByClassName(sectionClass);
    //     if (sections.length > 0) {
    //         sections[0].scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    // useEffect(() => {
    //     scrollToSection("mx-auto");
    // }, []);
    const contactlist = await fetchData();

    return (
        <section className="mx-auto ">
            <div  >
                <div className="py-4 bg-[#0056d2] px-3">
                    <div className="text-center justify-center">
                        <p className='text-center py-4 text-white'>Need Answers? Connect with us over a detailed telephonic session</p>

                    </div>
                    <div className="bg-white rounded-lg w-full  p-5">
                        <div className="grid lg:grid-cols-5   lg:p-4 tablet:p-2 tablet:grid-cols-8 mobile:p-2 mobile:grid-cols-8" >
                            <div className="lg:col-span-1 tablet:col-span-2 mobile:col-span-2">
                                <Image width={100} height={100} src={head.mentorOffer.image} alt={head.mentorOffer.title} />

                            </div>
                            <div className="lg:col-span-2 tablet:col-span-3 mobile:col-span-3">
                                <h2 className='text-3xl font-medium'>Our Mentors Offer</h2>

                                <ul >

                                    <li className='flex items-center gap-2'>
                                        <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                                        </svg>
                                        <p>Correct Information</p>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                                        </svg>
                                        <p>Assistance to get the right university</p>
                                    </li>

                                </ul>
                            </div>
                            <div className="lg:col-span-2 tablet:col-span-3 mobile:col-span-3">

                                <ul >

                                    <li className='flex items-center gap-2'>
                                        <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                                        </svg>
                                        <p>answers related to your degree</p>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                                        </svg>
                                        <p> Career Guidance support</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-4 justify-center text-center">
                <h2 className='text-4xl font-medium text-dark '>Get in Touch</h2>
            </div>

            {
                contactlist.map((v, i) =>
                (
                    <div key={i} className="px-5 pb-3 pt-3 mb-5">

                        <div className="grid gap-4 lg:grid-cols-3 grid-cols-1">
                            <div>
                                <span className='flex flex-col gap-4 justify-start items-center p-4 rounded-lg bg-[#f0f8ff] w-full h-full flex-grow'>
                                    <Image width={50} height={50} src='https://img.icons8.com/ios/50/0056d2/new-post--v1.png' alt='new-post--v1' />
                                    <h6 className='font-bold text-center text-dark'>{v.email}</h6>
                                </span>
                            </div>
                            <div>
                                <span className='flex flex-col gap-4 justify-start items-center p-4 rounded-lg bg-[#f0f8ff] w-full h-full flex-grow'>
                                    <Image width={50} height={50} src='https://img.icons8.com/ios/50/0056d2/iphone14-pro.png' alt='iphone14-pro' />
                                    <h6 className='font-bold text-center text-dark'>{v.contactnumber}</h6>
                                </span>
                            </div>
                            <div>
                                <span className='flex flex-col gap-4 justify-start items-center p-4 rounded-lg bg-[#f0f8ff] w-full h-full flex-grow'>
                                    <Image width={50} height={50} src='https://img.icons8.com/ios/50/0056d2/marker.png' alt='marker' />
                                    <h6 className='font-bold text-center text-dark'>{v.officeaddress}</h6>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }


        </section>
    )
}

export default Contactus

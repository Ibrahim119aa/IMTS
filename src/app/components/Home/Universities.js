
import '@/app/globals.css';

import Link from "next/link";
import { getUniversity } from '@/app/_api/Home/Home';
import Image from 'next/image';

const Universities = async() => {

    let apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let data1=await getUniversity();
   
   
console.log(data1);



    const isVisible=true;

    // const [isVisible, setIsVisible] = useState(true);

    return (
        <>

            {
                data1 &&
                    data1.length > 0 ?
                    (
                        <div className=" flex justify-center ml-lg-5 mx-lg-5 mt-14 px-3   md:px-0">

                            <div className="w-full fade-up max-w-[1320px] ml-lg-5 mx-lg-5">
                                <div className="text-center" >
                                    <h1 className="text-center text-2xl font-bold hidden text-dark universityheadingsm">
                                        Approved Online & Distance Eductaion Universities
                                    </h1>


                                </div>

                                <div className="grid grid-cols-4 universitylisteninggrid  md:grid-cols-6 gap-3 mt-8 ">

                                    {
                                        data1 && (
                                            data1.map((university, i) => (
                                                isVisible ?
                                                    (
                                                        i <= 17 ?
                                                            (
                                                                <Link
                                                                    href={`/universities/${university.urlname}`}
                                                                    key={i}


                                                                >
                                                                    <div className="flex flex-col universitylisteningbody border border-1  gap-2 p-3 rounded-md cursor-pointer">
                                                                        <div className="mx-auto universitylisteningsubbody">

                                                                            <Image
                                                                            width={70}
                                                                            alt='Uni Image'
                                                                            priority
                                                                            height={70}
                                                                                src={`${apiUrl}images/${university.logourl}`}
                                                                                srcSet={`${apiUrl}images/${university.logourl}`}
                                                                                className="universitylisteningsubbody"
                                                                            />



                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <p className=" text-dark fs-12 flex justify-content-center fw-bold ">  {university.total} Courses</p>
                                                                            </div>

                                                                            <div style={{ height: '40px' }} className="">
                                                                                {/* <p className=' text-[10px] md:text-xs  text-[#6c757d] font-medium' style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                                                    <center>
                                                                                        {university.uname}
                                                                                    </center>

                                                                                </p> */}
                                                                            </div>

                                                                        </div>


                                                                    </div>

                                                                </Link>
                                                            ) : ''
                                                    ) :

                                                    <Link
                                                        href={`/universities/${university.urlname}`}
                                                        key={i}


                                                    >
                                                        <div style={{ height: '170px' }} className="flex flex-col border border-1  gap-2 p-3 rounded-md cursor-pointer">
                                                            <div style={{ width: '100%', height: '70px' }} className="mx-auto">
                                                                <Image
                                                                width={100}
                                                                height={70}
                                                                priority
                                                                alt=''
                                                                    src={`${apiUrl}images/${university.logourl}`}
                                                                    style={{ width: '100%', height: '70px' }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <p className=" text-dark fs-12 flex justify-content-center fw-bold ">  {university.total} Courses</p>
                                                                </div>

                                                                <div style={{ height: '40px' }} className="">
                                                                    {/* <p className=' text-[10px] md:text-xs  text-[#6c757d] font-medium' style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                                        <center>
                                                                            {university.uname}
                                                                        </center>

                                                                    </p> */}
                                                                </div>

                                                            </div>


                                                        </div>

                                                    </Link>

                                            )
                                            )

                                        )
                                    }






                                </div>


                                <div className="text-center">
                                    <div 
                                    // onClick={(e) => setIsVisible(!isVisible)}
                                     >

                                        <p className="fw-bold fs-14 mt-3  mb-4 textprimary cursor-pointer text-uppercase d-inline-block rounded text-center py-2 px-3" style={{ backgroundColor: 'aliceblue' }}>
                                            {
                                                isVisible ?
                                                    (
                                                        <>
                                                            View more{' '}
                                                            <svg
                                                                style={{ display: 'inline-block' }}
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                                />
                                                            </svg>
                                                        </>
                                                    ) : <>
                                                        View less{' '}
                                                        <svg
                                                            style={{ display: 'inline-block' }}
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                            />
                                                        </svg>
                                                    </>
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ) : ''
            }

        </>
    );
};

export default Universities;

"use client"

import { useState } from "react";

const BlogViewMore=({bloglist,Image,apiUrl,Link})=>
{
    
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
<div className={`grid lg:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-2 mobile-small:grid-cols-1 mobile-extra-small:grid-cols-1  gap-6 lg:px-8 lg:pt-6 lg:pb-6`}>
                    {
                        bloglist && bloglist.map((e, i) =>
                        (
                            isVisible ?
                                (
                                    (i >= 4 && i <= 9) ?
                                        (
                                            <Link className='pb-3 bg-white transition-shadow duration-300 ease-in-out rounded shadow-paper' key={i} href={`/blog/${e.urlname}`} >
                                                <div className='flex  gap-2 p-3'>
                                                    <div className='text-white flex items-center justify-center rounded-[50%] w-[40px] h-[40px] bg-[#f44336]'>
                                                        {e.name.length > 0 ? e.name[0] : 'A'}
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <div className='text-[#212529] font-normal'>
                                                            {e.name}
                                                        </div>

                                                        <span className='font-light'>
                                                            {
                                                                new Date(e.added_date).toLocaleString('en-IN', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric'
                                                                })
                                                            }
                                                        </span>

                                                    </div>

                                                </div>
                                                <div>
                                                    <Image
                                                        alt={`${e.image}`}
                                                        width={500}
                                                        height={500}
                                                        className="w-full"
                                                        style={{ maxHeight: '170px', height: '170px' }}
                                                                        
                                                        src={`${apiUrl}images/${e.image}`}
                                                    />
                                                </div>
                                                <div className='px-2 pt-2'>
                                                    <h5 className="">
                                                        <p className="textwrap text-[1.1rem] font-semibold text-dark textline_two">{e.pagename}</p>
                                                    </h5>
                                                   

                                                        <div className="h-[40px]">
                                                            <p className="text-[12px] text-gray-900 md:text-xs md:font-normal font-medium truncate  line-clamp-2">
                                                                {e.pagename}
                                                            </p>
                                                        </div>

                                                   
                                                </div>

                                            </Link>

                                        ) : null
                                ) : (i >= 4) ?
                                    (
                                        <Link className='pb-3 bg-white transition-shadow duration-300 ease-in-out rounded shadow-paper' key={i} href={`/blog/${e.urlname}`} >
                                            <div className='flex  gap-2 p-3'>
                                                <div className='text-white flex items-center justify-center rounded-[50%] w-[40px] h-[40px] bg-[#f44336]'>
                                                    {e.name.length > 0 ? e.name[0] : 'A'}
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-[#212529] font-normal'>
                                                        {e.name}
                                                    </div>

                                                    <span className='font-light'>
                                                        {
                                                            new Date(e.added_date).toLocaleString('en-IN', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })
                                                        }
                                                    </span>

                                                </div>

                                            </div>
                                            <div>
                                                <Image
                                                    width={500}
                                                    
                                                    alt={`${apiUrl}images/${e.image}`}
                                                    height={500}
                                                    style={{ maxHeight: '170px', height: '170px' }}

                                                    src={`${apiUrl}images/${e.image}`}
                                                />
                                            </div>
                                            <div className='px-2 pt-2'>
                                                <h5 className="">
                                                    <p className="textwrap text-[1.1rem] font-semibold text-dark textline_two">{e.pagename}</p>
                                                </h5>
                                                <p >

                                                    <div style={{ height: '40px' }}>
                                                        <p className='text-[12px] text-dark md:text-xs md:font-normal font-medium medium-text' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', fontWeight: '800 !important', overflow: 'hidden' }}>
                                                            {e.pagename}
                                                        </p>
                                                    </div>

                                                </p>
                                            </div>

                                        </Link>
                                    ) : null
                        ))
                    }
                </div>
                <div className="text-center">
                    <div onClick={(e) => setIsVisible(!isVisible)} >

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
    )
}
export default BlogViewMore
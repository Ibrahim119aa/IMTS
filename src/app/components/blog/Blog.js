
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import "@/app/globals.css";
import { getBlog } from '@/app/_api/Blog/Blog';
const BlogViewMore = dynamic(() => import('@/app/components/blog/ClientComponent/Button'));


const Blog = async () => {

    let apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let bloglist = await getBlog();




    return (
        <>
            <div className='lg:pl-9 lg:pt-4  lg:pr-9 tablet:px-5 tablet:pt-4 mobile:px-3 mobile:pt-3 mobile-small:px-3 mobile-small:pt-3 mobile-extra-small:pt-2 mobile-extra-small:px-2'>
                <center>
                    <h1 className='font-bold h2 text-dark text-center blogMainHeading '>IMTS Blog</h1>
                </center>

                <div className={`grid grid-cols-2   mobile:grid-cols-1 mobile-small:grid-cols-1 mobile-extra-small:grid-cols-1 lg:p-8 tablet:grid-cols-2 lg:grid-cols-2 tablet:gap-6 lg:gap-12 lg:px-8 lg:pt-3 lg:pb-8 `} >
                    <div >
                        {
                            bloglist && bloglist.map((e, i) =>
                            (
                                i == 0 ?
                                    (

                                        <Link key={i} href={`/blog/${e.urlname}`}>
                                            <Image alt={`${e.image}`} width={700} height={300} src={`${apiUrl}images/${e.image}`} className='h-[19rem] rounded' />
                                            <div style={{ height: '30px' }}>
                                                <p className='h4  mt-2  fw-bold blogcard_title text-dark bold-font mr-5' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                    {e.pagename}
                                                </p>

                                            </div>




                                        </Link>


                                    ) : null
                            ))
                        }
                    </div>

                    <div className='mobile-small:pt-16 mobile-extra-small:pt-8'>
                        {
                            bloglist && bloglist.map((e, i) =>
                            (
                                (i > 0 && i < 4) ?
                                    (
                                        <Link key={i} href={`/blog/${e.urlname}`}>
                                            <div className={` mt-3 grid grid-cols-4 gap-3 `}>
                                                <div className={`col-span-1`}>
                                                    <Image priority alt={`${e.image}`} width={200} height={100} className='rounded h-[90px]' src={`${apiUrl}images/${e.image}`} />

                                                </div>
                                                <div className={`col-span-3 mt-0`}>
                                                    <div className='-mt-3' style={{ maxHeight: '40px' }}>
                                                        <p className="blogheading text-dark fw-bold"
                                                            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                            {e.pagename}
                                                        </p>
                                                    </div>
                                                    <p style={{ fontSize: '12px' }} className="  text-dark">
                                                        Updated On: {new Date(e.added_date).toLocaleString('en-IN', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric',
                                                            timeZoneName: 'short'
                                                        }).split('at')[0]}
                                                    </p>
                                                </div>
                                            </div>

                                        </Link>
                                    ) : null
                            ))
                        }
                    </div>
                </div>
                <BlogViewMore bloglist={bloglist} Image={Image} apiUrl={apiUrl} Link={Link} />
            </div>

        </>
    )

}


export default Blog;
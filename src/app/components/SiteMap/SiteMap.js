import Link from 'next/link';
import '../../globals.css'
const SiteMap = ({ a }) => {


    const topuni = (a == undefined || a.length == 0) ? [] : a.university;
    const courselist = (a == undefined || a.length == 0) ? [] : a.course;

    const coursespecialization = (a == undefined || a.length == 0) ? [] : a.coursespecialization;




    return (
        <>
            <div className='w-full  bg-[#f3f4f5] p-1'>
                <div className='rounded   bg-[#fff] p-4 m-4'>
                    <div >

                        {
                            courselist.map((v, index) =>
                            (
                                <div className='grid grid-cols-1 mt-2' key={index}>
                                    <div className="fw-bold me-2  d-block mb-2 text-[#fd4705] list-decimal" style={{ color: "#fd4705", listStyle: "none" }}>

                                        {v.course}


                                    </div>
                                    <div className='flex flex-wrap'>


                                        {
                                            coursespecialization && (
                                                coursespecialization.map((x, i) =>
                                                (
                                                    x.courename == v.course ?
                                                        (
                                                            <span key={i} style={{ listStyle: "none" }}>
                                                                <Link
                                                                    className=" me-2 mb-2 py-2 bg-light p-3 d-inline-block rounded"
                                                                    href={`/courses/${x.urlname}`}
                                                                    style={{ textDecoration: 'none', border: "1px solid rgb(238, 238, 238)" }}
                                                                >
                                                                    {x.specialization}
                                                                </Link>
                                                            </span>

                                                        ) : ''
                                                ))
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div >


                        <div className='grid grid-cols-1 mt-2' >
                            <div className="fw-bold me-2  d-block mb-2 text-[#fd4705] list-decimal" style={{ color: "#fd4705", listStyle: "none" }}>

                                <span className="fw-bold me-2 mt-4 d-block mb-2" style={{ listStyle: "none" }}>
                                    <a href="/courses/online-mba/" style={{ color: "#fd4705" }}>
                                        Top University
                                    </a>
                                </span>


                            </div>
                            <div className='flex flex-wrap'>
                                {
                                    topuni && (
                                        topuni.map((n, i) =>
                                        (
                                            <span key={i} style={{ listStyle: "none" }}>
                                                <Link
                                                    className="me-2 mb-2 py-2 bg-light p-3 d-inline-block rounded"
                                                    href={`/universities/${n.urlname}`}
                                                    style={{ border: "1px solid rgb(238, 238, 238)" }}
                                                >
                                                    {n.course}
                                                </Link>
                                            </span>
                                        ))
                                    )
                                }


                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}



export default SiteMap;


import '@/app/components/Authors/AuthorPage.css';


import Link from 'next/link';
import { getAuthor } from '@/app/_api/Author/Author';
import Image from 'next/image';
const AurthorPage = async ({ Id1 }) => {
    const Id = Id1;


    let a = await getAuthor(Id);
    let author = a.Detail;
    let university = a.University;
    let blog = a.Blog;
    let course = a.Course;





    let apiUrl=process.env.NEXT_PUBLIC_API_URL;

    return (

        <div>
            <div className="container-fluid bg-white " id='AuthorBody'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="container">
                           {
                            a && (
                                <div className="row ">


                                <div className="container AuthorBanner">

                                    {
                                        author.map((en) =>
                                        (
                                            <>
                                                <div className="row R1">

                                                    <div className="col-lg-2 ">
                                                        <div className=''>
                                                            <Image
                                                            priority
                                                            alt={`${en.profile}`}
                                                            src={`${apiUrl}images/${en.profile}`}
                                                            className='w-full'
                                                            width={160}
                                                            height={160}
                                                            />
                                                            {/* <img  className='AuthImg' width={'60px'} alt="" /> */}

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 mx-7 col-md-3 col-sm-4">
                                                        <div className='authorname'>
                                                            <h1 className="h1">{en.name}

                                                            </h1>
                                                            <p className='authdes'>{en.designation}</p>
                                                            <div className='mt-2'>
                                                                <a style={{ color: 'white' }} href={en.fb} target='_blank'> <i className="fa-brands fa-facebook"></i></a>
                                                                <a href={en.linkedin} style={{ color: 'white' }} target='_blank'>
                                                                    <i className=" fa-brands fa-linkedin ml-3" aria-hidden="true"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-2 col-sm-0">

                                                    </div>
                                                    <div className="col-lg-1 col-md-2 col-sm-6">




                                                    </div>
                                                    <div className="col-lg-1 col-md-2 col-sm-6">

                                                        <div className='posttotal'> {en.total}


                                                        </div>
                                                        <div className='post'>
                                                            <p>
                                                                Post
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="row">

                                                    <div className="col-lg-12 About mt-2">
                                                        <h1>About</h1>
                                                        <p dangerouslySetInnerHTML={{ __html: en.about }}>

                                                        </p>

                                                        <h1 className='mt-3'>Specialization</h1>
                                                        <p>
                                                            {en.specialization}
                                                        </p>
                                                    </div>




                                                </div>
                                            </>
                                        ))
                                    }
                                </div>


                                <div className="container AuthorBanner">

                                    <div className="row">

                                        <div className="hRvhdt">
                                            <a className="dpQGtd ">
                                                <h3 className="text-primary font-bold">Articles</h3>
                                            </a>

                                        </div>
                                        {

university && (
    university.map((v,i) =>
    (
        <div key={i}>
            <Link href={`/universities/${v.urlname}`}>
                <div className="hHFrTH pt-3">
                    <div className="bbRfMR">
                       
                            <Image alt={`${v.logourl}`} width={100} height={100} priority className="gYjxkS" src={`${apiUrl}images/${v.logourl}`} />
                      
                    </div>
                    <div className="eoBglY ml-5">
                        <p className="isGSoL text-primary" >

                            {v.uname}
                        </p>
                        <span>Updated  {new Date(v.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' })}</span>

                    </div>
                </div>
            </Link>
        </div>
    ))
)

}
                                        
                                        {

                                            course && (
                                                course.map((v) =>
                                                (
                                                    <>
                                                        <Link href={`/courses/${v.urlname}`}>
                                                            <div className="hHFrTH pt-3">
                                                                <div className="bbRfMR">
                                                                    
                                                                    <Image alt={`${v.image}`} priority  width={100} height={100}  src={`${apiUrl}images/${v.image}`} />
                                                                   
                                                                </div>
                                                                <div className="eoBglY ml-5">
                                                                    <p className="isGSoL text-primary" >

                                                                        {v.courename}
                                                                    </p>
                                                                    <span>Updated  {new Date(v.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' })}</span>

                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                ))
                                            )

                                        }

                                        {

                                            blog && (
                                                blog.map((v) =>
                                                (
                                                    <>
                                                        <Link href={`/blog/${v.urlname}`}>
                                                            <div className="hHFrTH pt-3">
                                                                <div className="bbRfMR">
                                                                    
                                                                    <Image alt={`${v.image}`} priority width={100} height={100}   src={`${apiUrl}images/${v.image}`} />
                                                                  
                                                                </div>
                                                                <div className="eoBglY ml-5">
                                                                    <p className="isGSoL text-primary" >

                                                                        {v.pagename}
                                                                    </p>
                                                                    <span>Updated  {new Date(v.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' })}</span>

                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                ))
                                            )

                                        }


                                    </div>
                                </div>
                            </div>
                            )
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



export default AurthorPage;
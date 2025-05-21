import '@/app/globals.css';
import Link from 'next/link';
import { getParticularBlog } from "@/app/_api/Blog/Blog";
import { format } from 'date-fns';
import dynamic from 'next/dynamic';
const BlogToc=dynamic(()=>import('@/app/components/blog/ClientComponent/BlogTOC'));
import Image from "next/image";
const BlogPage = async ({ Id }) => {
    let bloglist = await getParticularBlog(Id);
    let apiUrl = process.env.API_URL;

    return (
        <div>
            <div id='blog' className={`grid grid-cols-4 gap-6`}>

                {
                    bloglist && (
                        bloglist.map((e, k) =>
                        (


                            <div className={` lg:col-span-3 tablet:col-span-4 mobile:col-span-4 mobile-small:col-span-4 mobile-extra-small:col-span-4`} key={k} >
                                <div className={`grid grid-cols-1`}>
                                    <div>
                                        <Image src={`${apiUrl}images/${e.image}`} width={1000} height={1000} className='lg:h-96 md:h-72 sm:h-60 h-60 w-full rounded mt-1 ' alt="" />

                                    </div>
                                </div>
                                <div className={`grid grid-cols-1`}>
                                    <div>
                                        <div className="my-3 mb-1  text-dark " style={{ fontSize: '14px' }}>
                                            <button className='d-none d-lg-inline-block' style={{ color: 'rgb(247, 93, 52)' }}>Home</button>

                                            <span className='ml-1 d-none d-lg-inline-block'>❯</span>
                                            &nbsp;
                                            <button style={{ color: 'rgb(247, 93, 52)' }}>Blog</button>
                                            &nbsp;
                                            <span className='ml-1'>❯</span>
                                            &nbsp; {e.pagename}
                                        </div>
                                        <p style={{ fontSize: '12px' }} className='ml-2 my-3 text-dark'>Added On: {new Date(e.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[0]} {new Date(e.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[1]} , {new Date(e.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[2]}</p>
                                        <div className="d-flex flex-wrap  align-items-center justify-content-between">
                                            <div className="d-flex gap-2 mb-1">
                                                <button
                                                    aria-label="facebook"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        padding: '0px',
                                                        font: 'inherit',
                                                        color: 'inherit',
                                                        cursor: 'pointer',
                                                        outline: 'none'
                                                    }}
                                                >
                                                    <svg viewBox="0 0 64 64" width="25" height="25">
                                                        <circle cx="32" cy="32" r="31" fill="#3b5998"></circle>
                                                        <path
                                                            d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                                            fill="white"
                                                        ></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    aria-label="twitter"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        padding: '0px',
                                                        font: 'inherit',
                                                        color: 'inherit',
                                                        cursor: 'pointer',
                                                        outline: 'none'
                                                    }}
                                                >
                                                    <svg viewBox="0 0 64 64" width="25" height="25">
                                                        <circle cx="32" cy="32" r="31" fill="#00aced"></circle>
                                                        <path
                                                            d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2 c-0.4,0-0.8,0-1.2-0.1c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9 c12.1,0,18.7-10,18.7-18.7c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                                            fill="white"
                                                        ></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    aria-label="whatsapp"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        padding: '0px',
                                                        font: 'inherit',
                                                        color: 'inherit',
                                                        cursor: 'pointer',
                                                        outline: 'none'
                                                    }}
                                                >
                                                    <svg viewBox="0 0 64 64" width="25" height="25">
                                                        <circle cx="32" cy="32" r="31" fill="#25D366"></circle>
                                                        <path
                                                            d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.53162c0,3.63497 0.97545,7.16812 2.83872,10.26257l-2.59789,9.43929c-0.22425,0.79565 0.01734,1.64592 0.62135,2.15406c0.38836,0.33657 0.88179,0.51851 1.40517,0.51851c0.20712,0 0.42338,-0.02588 0.6305,-0.0869l9.6681,-2.51134c3.2904,1.61368 6.91754,2.4708 10.6275,2.4708l0.02588,0c11.36054,0 20.60847,-9.2065 20.61624,-20.53162c0.00867,-5.45645 -2.13854,-10.58279 -6.01442,-14.41909"
                                                            fill="white"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-1 my-3 Con`}>
                                    <div>


                                        <div className={`grid grid-cols-8 mobile-extra-small:gap-16`}>
                                            <div className={`mobile-extra-small:col-span-1 lg:col-span-1 tablet:col-span-1 mobile:col-span-1 mobile-small:col-span-1 `}>
                                                <Link href={`/Author/${e.name}`}>
                                                    <Image width={50} height={50} alt={e.name} src={`${apiUrl}images/${e.profile}`} className='rounded-[50%]' />


                                                </Link>
                                            </div>
                                            <div className={`mobile-extra-small:col-span-6 lg:col-span-3 lg:-ml-12 tablet:col-span-6 mobile-small:col-span-6 mobile:col-span-6 `}>
                                                <div className="grid grid-cols-1 ml-0">
                                                    <div>
                                                        <Link href={`/Author/${e.name}`}>
                                                            <h6 className="authorname h1color font-bold">{e.name}</h6>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 ml-0">
                                                    <div>
                                                        <Link href={`/Author/${e.name}`}>
                                                            <h6 className=" h2color">{e.designation}</h6>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 ">
                                                    <div >
                                                        <a style={{ color: '#316FF6' }} target="_blank" href={e.fb}>
                                                            <i className="fa-brands fa-facebook"></i>
                                                        </a>
                                                        <a style={{ color: '#0077B5' }} target="_blank" href={e.linkedin}>
                                                            <i className="fa-brands fa-linkedin ml-3" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1">
                                                    <div >
                                                        <Link href={`/Author/${e.name}`}>
                                                            <p >Update on &nbsp;
                                                                {/* {
                                                                    e.last_modified === null
                                                                        ? format(new Date(e.added_date), 'dd MMM yyyy')
                                                                        : format(new Date(e.last_modified), 'dd MMM yyyy')
                                                                } */}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className={` lg:col-span-4 tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden  `}></div>
                                        </div>


                                    </div>

                                </div>
                                <div className={`grid grid-cols-1`}>
                                    <div className='d-flex text-dark  flex-wrap align-items-center justify-content-between'>
                                       <BlogToc blog={bloglist} />
                                    </div>
                                </div>
                                <div className={`grid grid-cols-1`}>
              <div className={`C`}>
                {
                  e.Content.map((p, q) =>
                  (
                    <div
                      key={q}
                      dangerouslySetInnerHTML={{ __html: e.Conten1 }}
                      className='my-lg-2'

                    />
                  ))
                }
              </div>
            </div>
                                {/* 
            
          
           
            <div className={`grid grid-cols-1`}>
              <div className={`C`}>
                {
                  stringArray.map((p, q) =>
                  (
                    <div
                      key={q}
                      dangerouslySetInnerHTML={{ __html: p }}
                      className='my-lg-2'
                      id={`section-${q}`}
                    />
                  ))
                }
              </div>
            </div>
            <div className={`grid grid-cols-1`}>
              {
                faq.length > 0 ? <h4 className="pt-2 mb-2 fw-bold h4 text-dark">Frequently Asked Questions?</h4> : ''
              }


              <App1 a={faq} />
            </div>
            <div >
              <h4 className="  fw-bold h4 text-dark">Recommended for you</h4>

              <div className={`grid mb-12 mobile-small:grid-cols-1 mobile-extra-small:grid-cols-1  lg:grid-cols-3 tablet:grid-cols-3 mobile:grid-cols-3 gap-6`}>
                {
                  bloglist.map((e, i) =>
                  (
                    i < 3 ?
                      (

                        <div key={i} onClick={(v) => Redirect(e.urlname)}  >

                          <Image width={1000} height={1000} src={`${apiUrl}images/${e.image}`} className='rounded h-32 max-h-32' alt="" />
                          <div style={{ height: '40px' }}>
                            <p className='my-1  font-bold text-dark ' >
                              {e.pagename}

                            </p>
                          </div>
                        </div>
                      ) : ''
                  ))
                }
              </div>
            </div> */}







                            </div>

                        ))
                    )
                }
                {/* {
  isRight ?
    (
      <div className={`col-span-1 tablet:hidden mobile:hidden mobile-small:hidden mobile-extra-small:hidden`}>
        <div className="border rounded p-3 mb-3  bg-white conseller  mt-1 " style={{ zIndex: '-10px' }}>
          <p
            className="mb-2 text-primary text-center"
            style={{ fontSize: '12px' }}
          >
            Tired of dealing with call centers!
          </p>
          <p className="fw-bold text-center text-dark" style={{ fontSize: '14px' }}>Get a professional advisor for Career!</p>
          <p className="text-dark mt-3 mb-3 fw-bold text-center m-0" style={{ fontSize: '20px' }}>LIFETIME FREE</p>

          {
            stafflist && (
              stafflist.map((e, i) =>
              (
                i < 3 ?
                  (
                    <div
                      key={i}
                      className="container-fluid py-2 px-2 rounded mb-2"
                      role="button"
                      style={{ backgroundColor: 'aliceblue' }}
                    >
                      <div className="row">
                        <div className='col-lg-4'>
                          <img
                            src={`${apiUrl}images/${e.image}`}
                            alt="Mentor"

                            style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                          />
                        </div>
                        <div className='col-lg-7' style={{ marginLeft: '-1rem' }}>
                          <p className="m-0 text-primary mb-1">{e.name}</p>
                          <p className=" text-secondary" style={{ fontSize: '12px', marginTop: '-0.1rem' }}> {e.experience} {e.expert} exp</p>
                          <div className="p-rating p-readonly RatingStar_star_color____ASc">
                            {[...Array(4)].map((_, i) => (
                              <div className="p-rating-item p-rating-item-active" key={i}>
                                <span
                                  key={i}
                                  style={{ cursor: 'pointer', color: selectedRating >= i ? 'orange' : 'grey' }}

                                >
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            ))}

                          </div>



                        </div>
                      </div>

                    </div>
                  ) : ''
              ))
            )
          }
          <center className=''>
            <button className='btn btn-primary rounded my-2 mb-2' onClick={HandleButton}>Talk Us</button>
          </center>
          <AnimatePresence>{uniTalk ? <UniversityApply close={() => setuniTalk(!uniTalk)} /> : ""}</AnimatePresence>
        </div>
      </div>
    ) : ''
} */}
            </div>
        </div>
    )
}
export default BlogPage;
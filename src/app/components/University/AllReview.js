import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import LoginForm from "../Header/LoginForm"
import RegisterForm from "../Header/RegisterForm"
import ForgotForm from "../Header/ForgetForm"
import axios from "axios"
import { apiUrl } from "../utils/api"

const AllReview = ({ close, uniId }) => {


    const [review, setreviewlist] = useState([]);
    const [RatingStars, setRatingStars] = useState('');

    const getReviewList = async (e) => {


        let a = await axios.post(`${apiUrl}get-Review-By-University-Id`, {
            Id: uniId
        });



        let ratingNumber = 0;
        let arr = a.data;
        for (let index = 0; index < arr.length; index++) {
            ratingNumber += parseInt(arr[index].rating);

            setRatingStars(parseFloat(ratingNumber / (a.data.length * 5)));


        }








        setreviewlist(a.data);

    }



    useEffect(() => {




        const fetchData = async () => {

            await getReviewList();



        }
        fetchData();



    }, [])

    return (
        <section className='fixed overflow-y-scroll  left-0 top-0 h-full min-h-screen w-full bg-black/80 flex justify-center items-center z-10 AllReviewResponse' >

            <style jsx>{`
          @media (min-width: 250px) and  ( max-width: 639px) {
             .AllReviewResponse
             {
                background-color:red;
             }
             .AllReviewResponseMotion
             {
                margin-top:-2rem;
                background-color:pink;
 width:100%;
             }
             .AllReviewForm
             {
                margin-top:-2rem;
                background-color:grey;
                width:100%;
                
             }
          }
      `}</style>

            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-full max-w-4xl min-h-fit bg-white flex flex-col gap-6 AllReviewResponseMotion justify-start mt-5 my-5 requires-no-scroll relative' style={{ width: '50%' }}>




                <div className='flex flex-col  AllReviewForm' >
                    <div className="row mt-2 ml-2">
                        <div className='flex items-center gap-1   ' >
                            <img src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-12' />
                            <p className=' flex flex-col leading-none font-semibold text-lg'>
                                <span>Education</span>
                                <span>Dunia</span>
                            </p>
                            <i className='fa-solid fa-xmark text-xl cursor-pointer ml-auto' onClick={() => close()}></i>
                        </div>
                    </div>


                    <div className="row mt-4 ml-4">

                        <div className="col-lg-12   col-md-12 col-sm-12">
                            {
                                review.map((z,k) =>
                                (
                                    <div key={k} className="review_card">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="textprimary rounded-circle d-flex align-items-center justify-content-center h6 m-0" style={{ width: '30px', height: '30px', color: '#fff', backgroundColor: '#a9b7b7', fontSize: '14px' }}> {z.name.charAt(0).toUpperCase()} </span>
                                            <p className="m-0 ms-2 text-capitalize fw-bold">{z.name}</p>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex gap-1" style={{ overflow: 'hidden', position: 'relative' }}>


                                                    {[...Array(parseInt(z.rating))].map((_, i) => (
                                                        <span
                                                            key={i}
                                                            style={{ cursor: 'pointer', color: 'orange', opacity: '0.8' }}

                                                        >
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="fs-14 fw-bold" style={{ color: '#faa51d' }}>Verified</span>
                                        </div>
                                        <p className="fs-12 mt-2 mb-1 text-secondary">Reviewed in india on {new Date(z.added_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                        <p>
                                            {z.detail}
                                        </p>

                                        <div className="mt-3 d-flex align-items-center">
                                            <p role="button" className="m-0 fw-bold text-primary fs-13 ps-2 ms-auto float-end">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"></path>
                                                </svg>
                                                Reply
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>


                    </div>













                </div>




            </motion.div>
        </section>
    )
}

export default AllReview;

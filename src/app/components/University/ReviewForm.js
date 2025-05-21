import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import LoginForm from "../Header/LoginForm"
import RegisterForm from "../Header/RegisterForm"
import ForgotForm from "../Header/ForgetForm"
import axios from "axios"
import { apiUrl } from "../utils/api"

const ReviewForm = ({ close, id }) => {
    const [review, setReview] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);
    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
    };
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    style={{
                        cursor: 'pointer',

                        width: '25px',
                        fontSize: '30px',
                        paddingRight: '0.7rem',
                        opacity: '0.7',
                        height: '25px',
                        transition: 'transform 0.2s ease-in-out 0s'
                        , color: selectedRating >= i ? 'orange' : '#212529'
                    }}
                    onMouseEnter={() => handleRatingChange(i)}
                >
                    <i className="fa fa-star"></i>
                </span>
            );
        }
        return stars;
    };

    const [isLogin1, setLogin1] = useState('');
    const [username, setuser] = useState('');


    const checkLogin = async () => {
        let a = await axios.get(`${apiUrl}dashboard`,
            {
                withCredentials: true
            });


        setLogin1(a.data.Status);
        setuser(a.data.username);


    }
    const handleSubmit = async (e) => {

        e.preventDefault();

        let a = await axios.post(`${apiUrl}Add-University-Review`,

            {
                rating: selectedRating,
                detail: formData.detail,
                user: username,
                university: id
            },
            {
                withCredentials: true
            }
        );


        console.log(a.data);


        if (a.data.Status == true) {
            alert("Review Successfully given");
            close();

        }
        else {


        }

        console.log(`Submitted Review: ${review}, Rating: ${selectedRating}`);



    };
    useEffect(() => {
        checkLogin();
    }, []);

    const [formData, setFormData] = useState(
        {

            rating: '',
            detail: '',
            user: '',
            id: id,

        }
    )
    const getValue1 = (value) => {
        formData.detail = formData.detail + " " + value;


    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;




        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };
    const [isLogin, setIsLogin] = useState(true)
    const [isForgot, setIsForgot] = useState(false)
    return (
        <section className='fixed overflow-y-scroll  left-0 top-0 h-full min-h-screen  w-full bg-black/80 flex justify-center items-center z-10' style={{ paddingTop: '2rem' }}>
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-full   max-w-lg min-h-fit bg-white flex flex-col gap-6 justify-start   requires-no-scroll relative mt-5' >

                {/* <i onClick={() => close()} className='fa-solid fa-xmark fa-2x absolute right-4 top-2 cursor-pointer'></i> */}
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className='flex items-center gap-1 my-4 ' >
                        <img src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-12' />
                        <p className=' flex flex-col leading-none font-semibold text-lg'>
                            <span>Imts</span>
                            <span>Institute</span>
                        </p>
                        <i className='fa-solid fa-xmark text-xl cursor-pointer' style={{ marginLeft: '20rem' }} onClick={() => close()}></i>
                    </div>
                    <div class="mt-2 mb-3">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Choose Rating <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            {renderStars()}
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Full Name <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <input name="name" className="p-inputtext p-component p-filled w-100 form-control" /><span class="p-error text-xs d-block"></span>
                        </div>
                    </div>
                    <div class=" mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Course <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <input name="name" className="p-inputtext p-component p-filled w-100 form-control" /><span class="p-error text-xs d-block"></span>
                        </div>
                    </div>
                    <div class=" mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Specialization <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <input name="name" className="p-inputtext p-component p-filled w-100 form-control" /><span class="p-error text-xs d-block"></span>
                        </div>
                    </div>

                    <div className=" mb-1">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">What caught your attention?</label>

                    </div>
                    <div className="mb-2">
                        <div className="d-flex gap-2 flex-wrap mb-3">
                            <div>
                                <label
                                    className="btn btn-outline-primary fs-12 px-3"
                                    style={{ borderRadius: '25px' }}
                                    onClick={() => {
                                        getValue1("LMS Quality");
                                    }}
                                >
                                    LMS Quality
                                </label>

                            </div>
                            <div>
                                <label className="btn btn-outline-primary fs-12 px-3" style={{ borderRadius: '25px' }}
                                    onClick={() => {
                                        getValue1("EMI Facility");
                                    }}
                                >EMI Facility</label>
                            </div>
                            <div>
                                <label className="btn btn-outline-primary fs-12 px-3" style={{ borderRadius: '25px' }}

                                    onClick={() => {
                                        getValue1("Faculty Support");
                                    }}
                                >Faculty Support</label>
                            </div>
                            <div>
                                <label className="btn btn-outline-primary fs-12 px-3" style={{ borderRadius: '25px' }}
                                    onClick={() => {
                                        getValue1("Student Support");
                                    }}

                                >Student Support</label>
                            </div>
                            <div>
                                <label className="btn btn-outline-primary fs-12 px-3" style={{ borderRadius: '25px' }}
                                    onClick={() => {
                                        getValue1("Student Support");
                                    }}
                                >Value For Money</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div >
                            <label htmlFor="exampleForm.ControlTextarea1" className="fs-14 mb-2 fw-bold">
                                Add a written review <span className="text-danger fs-16">*</span>
                            </label>
                            <textarea
                                placeholder="What did you like or dislike?"
                                rows="3"
                                name="detail"
                                value={formData.detail}
                                onChange={handleInputChange}
                                id="exampleForm.ControlTextarea1"
                                className="fs-14 form-control"
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn mt-2 btn-primary">Submit</button>
                </form>





            </motion.div>
        </section>
    )
}

export default ReviewForm

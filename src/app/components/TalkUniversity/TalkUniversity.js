import React, { useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import LoginForm from "../Header/LoginForm"
import RegisterForm from "../Header/RegisterForm"
import ForgotForm from "../Header/ForgetForm"
import { apiUrl } from "../../_utils/api"

const TalkUniversity = ({ close }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [isForgot, setIsForgot] = useState(false)
    const [courseList, setcourseList] = useState([]);

    const getCourseList = async () => {
        let a = await axios.get(`${apiUrl}get-Course`);

        setcourseList(a.data);
    }

    const [formData, setFormData] = useState(
        {
            Name: '',
            email: '',
            phone: '',
            city: '',
            dob: '',
            state: '',
            country: 'india',
            gender: 'male',
            password: ''
        }
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;




        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };
    return (
        <section className='fixed overflow-scroll  left-0 top-0 h-full min-h-screen w-full bg-black/80 flex justify-center items-center z-10'>
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-full max-w-lg min-h-fit bg-white flex flex-col gap-6 justify-start mt-5 my-5 requires-no-scroll relative'>




                <div className="d-flex align-items-center mt-5 justify-content-center">
                    <img src="https://d1aeya7jd2fyco.cloudfront.net/logo/upes-online-logo.webp" width="135" height="45" objectfit="contain" className="border rounded" alt="" />
                    <i className='fa-solid fa-xmark text-xl cursor-pointer end-0' onClick={() => close()}></i>


                </div>
                <div>
                    <p class="mt-2 ps-1">Hi <b>Vibhansh Kumar</b>, 👋</p>

                </div>
                <div>
                    <p className="rounded p-3 d-flex" style={{ backgroundColor: 'rgb(250, 235, 215)' }}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" fontSize="30" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F44336" d="M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18C25.3,46.4,22.7,46.4,21.2,44.8z"></path>
                            <path fill="#fff" d="M21.6,32.7c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.4,0.8-0.5s0.6-0.2,1-0.2 s0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,0.9s-0.1,0.6-0.2,0.9s-0.3,0.5-0.5,0.7 c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.6,0.2-1,0.2s-0.7-0.1-1-0.2s-0.5-0.3-0.8-0.5c-0.2-0.2-0.4-0.4-0.5-0.7S21.6,33.1,21.6,32.7z M25.8,28.1h-3.6L21.7,13h4.6L25.8,28.1z"></path>
                        </svg>
                        <span className="ms-2">Pay your fees only at the official website of the University! We will redirect you there</span>
                    </p>
                </div>
                <div>
                    <p class="rounded p-3" style={{ backgroundColor: 'aliceblue' }}> Thank you for taking the first step towards a fruitful journey towards your career growth. Kindly confirm your details once again so that we can redirect you towards the official website of the university so that you can reserve your seat.</p>
                </div>
                <form className="mt-1">





                    <div className='row mt-2'>
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Course <span class="text-danger fs-16">*</span></label>
                        <div className='col-lg-12 col-sm-12 RFullNameCol'>


                            <select name="state" value={formData.state} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
                                <option>
                                    Select Course
                                </option>
                                {
                                    courseList.map((n,k) =>
                                    (
                                        <option key={k} value={n.id}>
                                            {n.courename}
                                        </option>
                                    ))
                                }


                            </select>


                        </div>

                    </div>

                    <div class="mt-4 mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Specialization <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <select onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control">
                                <option>
                                    Select Specialization
                                </option>
                                <option>
                                    Not Found
                                </option>


                            </select>
                        </div>
                    </div>




                    <button type="submit" class="btn mt-4 w-100 btn-primary">Submit</button>
                </form>



            </motion.div>
        </section>
    )
}

export default TalkUniversity;

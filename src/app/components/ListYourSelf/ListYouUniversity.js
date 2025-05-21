import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

import "react-phone-input-2/lib/style.css"

import axios from "axios"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import "../../globals.css";
import { apiUrl } from "../utils/api"

const ListYouUniversity = ({ close, id }) => {
    const [phone, setPhone] = useState(
        {
            phone: ''
        }
    );

    const [isLogin1, setLogin1] = useState('');
    const [username, setuser] = useState('');



    const handleSubmit = async (e) => {

        e.preventDefault();



        let a = await axios.post(`${apiUrl}Add-List-Your-Self`, formData,
            {
                withCredentials: true
            }
        );



        if (a.data.Status == true) {
            alert("Your Response Successfully Record");
            close();

        }
        else {


        }




    };


    const [formData, setFormData] = useState(
        {

            Name: '',
            officemail: '',
            Number: '',

            state: '',
            city: '',
            Message: ''

        }
    )
    const handleInputChange1 = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const [statelist, setstatelist] = useState([]);
    const [citylist, setcitylist] = useState([]);
    const getStateList = async () => {
        let a = await axios.get(`${apiUrl}get-State`);
        setstatelist(a.data);
        console.log(a.data);

    }
    const getCityList = async (Id) => {


        let a = await axios.post(`${apiUrl}get-City-By-State`,
            {
                Id: Id
            }
        );


        setcitylist(a.data);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;


        if (name === "state") {
            getCityList(value);
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
        else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }





    };
    useEffect(() => {
        const fetchData = async () => {
            await getStateList();
            console.log(statelist);

        }
        fetchData();
    }, [])
    return (
        <section className='fixed overflow-y-scroll  left-0 top-0 h-full min-h-screen  w-full bg-black/80 flex justify-center items-center z-10' style={{ paddingTop: '2rem' }}>
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-full   max-w-lg min-h-fit bg-white flex flex-col gap-6 justify-start   requires-no-scroll relative mt-5' >

                {/* <i onClick={() => close()} className='fa-solid fa-xmark fa-2x absolute right-4 top-2 cursor-pointer'></i> */}
                <form onSubmit={handleSubmit} className="">
                    <div className='flex items-center gap-1  ' >
                        <img src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-12' />
                        <p className=' flex flex-col leading-none font-semibold text-lg'>
                            <span>Imts</span>
                            <span>Institute</span>
                        </p>
                        <i className='fa-solid fa-xmark text-xl cursor-pointer' style={{ marginLeft: '20rem' }} onClick={() => close()}></i>
                    </div>
                    <div class="mt-2 mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Name <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <input name="Name" value={formData.Name} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control" /><span class="p-error text-xs d-block"></span>
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Official Email ID <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <input name="officemail" value={formData.officemail} onChange={handleInputChange} className="p-inputtext p-component p-filled w-100 form-control" /><span class="p-error text-xs d-block"></span>
                        </div>
                    </div>
                    <div class=" mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Phone No <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <PhoneInput
                                countryCodeEditable={false}
                                name="phone"
                                value={phone.phone}
                                onChange={(value) => handleInputChange1("phone", value)}
                                country={"in"}
                            />


                        </div>
                    </div>
                    <div class=" mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Select State <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <select name="state" className="p-inputtext p-component p-filled w-100 form-control" id=""

                                value={formData.state}
                                onChange={
                                    handleInputChange
                                }

                            >
                                <option value=''>
                                    Not Select Yet
                                </option>
                                {
                                    statelist.map((e,k) =>
                                    (
                                        <option key={k} 
                                            value={e.id}>
                                            {e.name}
                                        </option>
                                    ))
                                }

                            </select>
                        </div>
                    </div>
                    <div class=" mb-2">
                        <label for="small" className="fs-14 mb-2 fw-bold lab">Select City <span class="text-danger fs-16">*</span></label>
                        <div class="col-sm-12">
                            <select name='city' className="p-inputtext p-component p-filled w-100 form-control"
                                value={formData.city}
                                onChange={
                                    handleInputChange

                                }

                            >

                                <option value=''>
                                    Not Selected Yet
                                </option>
                                {
                                    citylist.map((e,k) =>
                                    (
                                        <option key={k} value={e.id}>
                                            {e.name}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>
                    </div>

                    <div className="mb-2">
                        <div >
                            <label for="small" className="fs-14 mb-2 fw-bold lab">Message <span class="text-danger fs-16">*</span></label>

                            <textarea
                                placeholder="Enter here Message"
                                rows="3"
                                name="Message"
                                value={formData.Message}
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

export default ListYouUniversity

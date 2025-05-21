"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import ForgotForm from "./ForgetForm"

import { apiUrl } from "../utils/api"

const AuthPopUp = ({ close,name,logo }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [isForgot, setIsForgot] = useState(false)
    return (
        <section className='fixed overflow-scroll  left-0 top-0 h-full min-h-screen w-full bg-black/80 flex justify-center items-center z-10 loginpopsms'>
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ y: -30, opacity: 0 }} className='p-4 rounded-lg w-full loginpopsms max-w-lg min-h-fit bg-white flex flex-col gap-4 loginpopsmsml justify-start mt-5 my-5 requires-no-scroll relative'>
              
                
                {/* <i onClick={() => close()} className='fa-solid fa-xmark fa-2x absolute right-4 top-2 cursor-pointer'></i> */}
               
                
                            
                        
                {isForgot ? <ForgotForm close={() => close()} /> : <>{isLogin ? <LoginForm close={() => close()} setReg={() => setIsLogin(false)} name={name} logo={logo} /> : <RegisterForm name={name} logo={logo} close={() => close()} setLog={() => setIsLogin(true)} />}</>}
                <p className='text-center text-base'>
                    Forgot password?{" "}
                    <button onClick={() => setIsForgot(true)} className='text-primary'>
                        Reset Now
                    </button>
                </p>
                <span class='bg-green-100 text-gray-600 text-[10px] flex items-center gap-1 rounded-md px-1 py-[2px] w-fit self-center'>
                    <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 448 512' class='lock-icon' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z'></path>
                    </svg>{" "}
                    Your personal information is secure with us
                </span>
            </motion.div>
        </section>
    )
}

export default AuthPopUp

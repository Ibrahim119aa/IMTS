"use client";
import React, { useState } from "react"
import { apiUrl } from "../utils/api"
import Image from "next/image";

const ForgotForm = ({ close }) => {
    const [status, setStatus] = useState(0)
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState(0)
    const [pass, setPass] = useState("")
    const [showPass, setShowPass] = useState(false)

    const SendForgotReq = async (e) => {
        e.preventDefault()
        const res = await fetch(`${apiUrl}/user/resend`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
            }),
        })
        const data = await res.json()
        if (res.status == 200) {
            setShowPass(true)
        } else {
            setStatus(500)
        }
    }

    const SendResetReq = async (e) => {
        e.preventDefault()
        const res = await fetch(`${apiUrl}/user/reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                newPass: pass,
                otp,
            }),
        })
        const data = await res.json()
        if (res.status == 200) {
            setStatus(200)
        } else {
            setStatus(500)
        }
    }

    return (
        <>
            {!showPass ? (
                <form onSubmit={SendForgotReq} className='flex flex-col gap-6 '>
                    <div className='container-fluid mt-2  '>
                        <div className="row">
                            <div className="col-lg-2 col-sm-2 col2sm col-md-2">
                                <Image width={50} priority height={50} src={`${apiUrl}images/IMTS.png`} alt='uni-icon' className='w-20' />



                            </div>
                            <div className="col-lg-2 col-sm-6 col6sm col-lg-md-2">

                                <p className="mt-lg-3" style={{ marginLeft: '-1rem', fontSize: '16px' }}>
                                    <strong className="text-dark" style={{ fontWeight: '200 !important' }}>IMTS</strong>
                                </p>
                            </div>
                            <div className="col-lg-7 col-sm-0 col0sm">

                            </div>
                            <div className="col-lg-1 col-sm-1 col1sm mt-3 ">
                                <svg style={{ marginLeft: '1rem', opacity: '0.9', fontSize: '1.2em', fontWeight: '800 !important', cursor: 'pointer', color: '#1c4980' }} onClick={() => close()} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" font-size="18" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                            </div>
                        </div>




                    </div>
                    <h4 className='font-bold text-dark mx-1 '>Enter Email to get started
                    </h4>

                    <input disabled={showPass} onChange={(e) => setEmail(e.target.value)} className='appearance-none px-2 py-3 w-full outline-none border border-blue-950 focus:border-primary rounded-md' type='text' name='email' placeholder='Enter Your Email' required />
                    <button type='submit' className='text-white text-sm bg-primary py-3 rounded-md text-center'>
                        Send OTP
                    </button>
                    {status == 500 && <span className='text-sm text-red-500 rounded-md text-center'>Invalid Email or Server Error</span>}
                </form>
            ) : (
                <form onSubmit={SendResetReq} className='flex flex-col gap-6 '>
                    <h4 className='font-bold '>Verify to get started</h4>
                    <input onChange={(e) => setOtp(e.target.value)} className='appearance-none px-2 py-3 w-full outline-none border border-blue-950 focus:border-primary rounded-md' type='number' name='otp' placeholder='Enter Your OTP' maxLength='4' required />
                    <input onChange={(e) => setPass(e.target.value)} className='appearance-none px-2 py-3 w-full outline-none border border-blue-950 focus:border-primary rounded-md' type='password' name='pass' placeholder='Enter Your password' required />
                    {status == 200 ? (
                        ""
                    ) : (
                        <button type='submit' className='text-white text-sm bg-primary py-3 rounded-md text-center'>
                            Verify
                        </button>
                    )}
                    {status == 500 && <span className='text-sm text-red-500 rounded-md text-center'>Invalid Email or Server Error</span>}
                    {status == 200 && <span className='text-sm text-green-500 rounded-md text-center'>Password Changed Successfully</span>}
                </form>
            )}
        </>
    )
}

export default ForgotForm

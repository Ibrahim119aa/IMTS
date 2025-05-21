"use client"
import { useState } from "react";
import Image from "next/image";
const BlogTOC = ({ blog }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIsOpen = () => {
        setIsOpen(!isOpen);

    }
    return (
        <>
           {
            blog.map((e,v)=>
            (
                <div key={v} className="px-3 py-2 rounded mt-2 mb-3" style={{ backgroundColor: 'aliceblue', width: 'max-content', maxWidth: '100%', border: '1px solid rgb(170, 170, 170)' }}>
                <h6 className="mb-0 d-flex justify-content-between align-items-center fw-bold">Table of Contents
                    <span className="ms-3 cursor-pointer">
                        <Image alt="table of content" src="/text-indent-left.svg" onClick={onIsOpen} width={27} height={27} priority  style={{ color: 'transparent' }} /></span></h6>
                {
                    isOpen ?
                        <ul className="list-unstyled ps-1 pt-3">


                            {(() => {

                                const toch1Elements = e.toch1.map((p, q) =>
                                (
                                    <>
                                        <>
                                            <li onClick={() => scrollToSection(`section-${q}`)} className="mb-3 d-flex text-dark"><span className="fs-16 text-dark cursor-pointer text-dark" dangerouslySetInnerHTML={{ __html: p }} style={{ color: 'rgb(68, 68, 68)' }}></span></li>

                                        </></>
                                ));
                                const toch2Elements = e.toch2.map((p, q) =>
                                (
                                    <>
                                        <>
                                            <li onClick={() => scrollToSection(`section-${q}`)} className="mb-3 d-flex"> <span className="fs-16 text-dark cursor-pointer" dangerouslySetInnerHTML={{ __html: p }} style={{ color: 'rgb(68, 68, 68)' }}></span></li>

                                        </></>
                                ));
                                const toch3Elements = e.toch3.map((p, q) =>
                                (

                                    <>
                                        <li onClick={() => scrollToSection(`section-${q}`)} className="mb-3 d-flex"> <span className="fs-16 text-dark cursor-pointer" dangerouslySetInnerHTML={{ __html: p }} style={{ color: 'rgb(68, 68, 68)' }}></span></li>

                                    </>
                                ));
                                const toch4Elements = e.toch4.map((p, q) =>
                                (
                                    <>
                                        <>

                                            <li onClick={() => scrollToSection(`section-${q}`)} className="mb-3 d-flex text-dark"> <span className="fs-16 text-dark cursor-pointer" dangerouslySetInnerHTML={{ __html: p }} style={{ color: 'rgb(68, 68, 68)' }}></span></li>

                                        </></>
                                ));


                                return [...toch1Elements, ...toch2Elements, ...toch3Elements, ...toch4Elements];
                            })()}
                            {/* {
                                faq.length ? <li onClick={() => scrollToSection(`section-faq`)} className="mb-3 d-flex"> <span className="fs-16 text-dark cursor-pointer" style={{ color: 'rgb(68, 68, 68)' }}>FAQs (Frequently Asked Questions)</span></li> : ''
                            } */}


                        </ul> : ''

                }
            </div>
            ))
           }
        </>
    )
}
export default BlogTOC;
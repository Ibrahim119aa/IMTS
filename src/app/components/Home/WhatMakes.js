"use client"
import { useState } from "react";
import Image from "next/image";
const WhatMakes = () => {
  const isLoading = false;
  const videoId = "jG5IxljONAM";
  const [isPlayerVisible, setPlayerVisible] = useState(false);

  const handlePlayVideo = () => {
    setPlayerVisible(true);
  };

  return (
    <>
    
      <div className="why-area-1 space overflow-hidden mobile:-ml-3">

        

        <div className="container-fluid mobile:-mt-12 ">
          <div className="row  align-items-center">
            <div className="col-xl-5 ml-2">
             
              <div className="youtube-facade px-5 rounded" style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
                {isPlayerVisible ? (
                  <iframe
                    className="rounded-[2rem]"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="youtube-thumbnail rounded-[2rem] "
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                      backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={handlePlayVideo}
                  >
                    <button
                      className="play-button"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "rgba(0, 0, 0, 0.8)",
                        borderRadius: "50%",
                        border: "none",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      ▶️
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-6 large:ml-6 target:ml-2 mobile:ml-2 mobile-small:ml-1">
              <div className="wcu-wrap1">
                <div className="title-area mb-25">
                  <span className="sub-title font-bold"><i className="fal fa-book me-2 mobile:mt-5 mobile-small:mt-3 mobile-extra-small:mt-3"></i> WHY CHOOSE US</span>
                  <span className="sec-title text-dark text-[1.9rem] font-bold">Thousands Of Experts Around The World Ready To Help.</span>
                  {/* <p className="sec-text mt-20">Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value via focused benefits. Rapidiously redefine highly efficient niche markets with plug-and-play materials professionally seize client centric solutions</p> */}
                </div>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="wcu-box">
                      <div className="wcu-box_icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="wcu-box_details">
                        <span className="box-title font-bold text-dark"> Forge a Bright Future</span>
                        <p className="wcu-box_text text-dark">Students Rely on IMTS for Unbiased Counseling.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="wcu-box">
                      <div className="wcu-box_icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="wcu-box_details">
                        <span className="box-title font-bold text-dark">Exclusively UGC-DEB Approved</span>
                        <p className="wcu-box_text text-dark">Online and Distance Education Colleges and Universities Featured on IMTS.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="wcu-box">
                      <div className="wcu-box_icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="wcu-box_details">
                        < span className="box-title font-bold text-dark">Unbiased Experts</span>
                        <p className="wcu-box_text text-dark">Guidance by Our Certified Counselors.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="wcu-box">
                      <div className="wcu-box_icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="wcu-box_details">
                        <span span className="box-title font-bold text-dark">Complete Assistance</span>
                        <p className="wcu-box_text text-dark">Achieve Your Goals with Our Complete Assistance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatMakes;

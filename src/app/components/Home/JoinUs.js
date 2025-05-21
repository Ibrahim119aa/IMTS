const JoinUs = () => {
    return (
        <div>
            <div className="cta-area-1 p-3" style={{ background: '#0070dc' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <div className="cta-wrap title-area mb-0">
                                
                                <div className="cta-content">
                                    <span className="font-semibold text-[1.8rem] cta-title sec-title">Get Online Courses</span>
                                    <p className="cta-text">Met consectetur adipiscing sed eiustempore dolore</p>
                                </div>
                                <a href="about.html" className="th-btn style8 text-dark">Join With Us<i className="fas fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4"></div>


                    </div>
                </div>
                <div className="cta-img-1" data-overlay="title" data-opacity="8">
                    <img src="assets/img/normal/cta_1_1.png" alt="Image" />
                    <a href="https://www.youtube.com/watch?v=lgcVubmxxQU" className="play-btn style2 popup-video"><i className="fa-sharp fa-solid fa-play"></i></a>
                </div>
            </div>
        </div>
    )
}
export default JoinUs;
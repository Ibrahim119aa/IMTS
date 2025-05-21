const VideoService = () => {
    return (
        <div>
            <div className="our-course-videos">
                <div className="container mobile:container p-4 mobile:p-1">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="col-md-12">
                                <div  data-overlay="title" data-opacity="8">
                                    {/* <img src="https://i.ytimg.com/vi/jG5IxljONAM/maxresdefault.jpg" alt="Image" />
                                <a href="https://www.youtube.com/watch?v=lgcVubmxxQU" className="play-btn style2 popup-video"><i
                                    className="fa-sharp fa-solid fa-play"></i></a> */}
                                    <iframe  className="mobile:w-[500px] mobile:h-[400px] w-[300px] h-[200px]"  src="https://www.youtube.com/embed/lgcVubmxxQU?si=UIz23fmlDIQEYakm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                            </div>
                            <div className="col-md-12">

                                <div className="title-area mb-25">
                                    <span className="sub-title text-[1rem] mt-2"><i className="fal fa-book me-2"></i> EXPLORE OUR COURSES IN ACTION</span>
                                    <h2 className="sec-title text-[1.8rem] text-dark">WATCH OUR COURSE VIDEOS</h2>
                                    <p className="sec-text  text-dark">Synergistically visualize alternative content before cross functional
                                        core Rapidiously solutions alternative content before cross functional core Rapidiously
                                        solutions alternative content before cross functional core Rapidiously solutions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 relative">
                            <div className="col-md-12">
                                <div className="cc" data-overlay="title" data-opacity="8">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrFI27DG_seYOpW8WG7dp0IOdGnMTliq-hQ&s"
                                        alt="Image" />
                                    {/*
                                <a href="https://www.youtube.com/watch?v=lgcVubmxxQU" className="play-btn style2 popup-video"><i
                                    className="fa-sharp fa-solid fa-play"></i></a>
                                     */}
                                    {/* <iframe width="271" className="absolute top-32" height="215" src="https://www.youtube.com/embed/lgcVubmxxQU?si=UIz23fmlDIQEYakm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <div  data-overlay="title" data-opacity="8">
                                    {/* <img src="https://i.ytimg.com/vi/cWC2CihNYhs/maxresdefault.jpg" alt="Image" />
                                <a href="https://www.youtube.com/watch?v=lgcVubmxxQU" className="play-btn style2 popup-video"><i
                                    className="fa-sharp fa-solid fa-play"></i></a> */}
                                    <iframe className="mobile:w-[500px] mobile:h-[400px] w-[350px] h-[200px]"   src="https://www.youtube.com/embed/lgcVubmxxQU?si=UIz23fmlDIQEYakm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-7 mb-3">
                                <div  data-overlay="title" data-opacity="8">
                                    <iframe className="mobile:w-[500px] mobile:h-[400px] w-[350px] h-[200px]"  src="https://www.youtube.com/embed/lgcVubmxxQU?si=UIz23fmlDIQEYakm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                </div>
                            </div>
                            <div className="col-md-5">

                                <a href="#" className="th-btn">Explore More VIDEOS<i className="fa-solid fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="journey">
                <img src="assets/img/d1.jpg" className="img-fluid" />
            </div>
        </div>
    )
}
export default VideoService;
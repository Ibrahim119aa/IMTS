"use client"
import CountUp from "react-countup";
import { useState, useEffect } from "react";
const Counter = () => {
    const [mounted, setmounted] = useState(false);
    
    useEffect(() => {

        setmounted(true);

    }, []);
   return (
        <>
            <div className="container">
                {
                    mounted?
                    (
                        <div className="counter-area-1 bg-theme" data-bg-src="">
                    <div className="row justify-content-between">
                        <div className="col-sm-6 col-md-3 counter-card-wrap">
                            <div className="counter-card">
                                <h2 className="counter-card_number">
                                <CountUp
          start={0}
          end={100}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />k+
            </div>
          )}
        </CountUp>
        </h2>
                                  
                                <p className="counter-card_text"><strong>Successfully</strong> Trained</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 counter-card-wrap">
                            <div className="counter-card">
                                <h2 className="counter-card_number">
                                <CountUp
          start={0}
          end={200}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />k+
            </div>
          )}
        </CountUp>
</h2>
                                <p className="counter-card_text"><strong>Active</strong> Students</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 counter-card-wrap">
                            <div className="counter-card">
                                <h2 className="counter-card_number">
                                <CountUp
          start={0}
          end={50}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />k+
            </div>
          )}
        </CountUp>
                                    </h2>
                                <p className="counter-card_text"><strong>Trained</strong> Staffs</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 counter-card-wrap">
                            <div className="counter-card">
                                <h2 className="counter-card_number">
                                <CountUp
          start={0}
          end={350}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />k+
            </div>
          )}
        </CountUp>
                                    </h2>
                                <p className="counter-card_text"><strong>Project</strong> Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
                    ):''
                }
            </div>
        </>
    )
}
export default Counter;
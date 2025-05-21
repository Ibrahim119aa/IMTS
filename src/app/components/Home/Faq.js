import { getFaq } from "@/app/_api/Home/Home";
import dynamic from "next/dynamic";
const App1 = dynamic(() => import('@/app/components/App1'));


const Faq = async () => {


  let faq = await getFaq();



  return (


    <section className="space " 
    style={{
      background:`url(assets/img/bckk.png)`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center'
      
    }}
    >
      <div className=" shape-mockup event-shape1 jump" data-top="0" data-left="-60px">
        <img src="assets/img/team/team-shape_1_1.png" alt="img" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title font-bold"><i className="fal fa-book me-2"></i> FAQ</span>
          <span className="sec-title text-[2rem] font-bold text-dark">Frequently Asked Questions?</span>
        </div>

        <div className="col-md-8">

        <App1 a={faq} />
          {/* <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                    01 Are there age limitations to attend U.S. universities? </a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse in">
                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.</div>
              </div>
              
            </div>
           
          </div> */}
        </div>


      </div>
    </section>
  );
};

export default Faq;

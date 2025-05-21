import { getOneStep } from "@/app/_api/Home/Home";
import dynamic from "next/dynamic";
const OneStepSlider = dynamic(() => import('@/app/components/Home/ClientComponent/OneStepSlider'));

const OneStop = async () => {



    let a = await getOneStep();



    const one = (a == undefined || a.length == 0) ? undefined : a;
    const onesteplist = one ? one.Data : '';
    const images = one ? one.Image : '';
    const l = one ? one.Image.length : '';
    // const [isLoading, setloading] = useState(true);


    // const dispatch = useDispatch();


    // useEffect(() => {

    //     const fetchData = async () => {
    //         if (a.length == 0 || a == undefined) {


    //             try {
    //                 await dispatch(getOneStep()).unwrap();



    //             }
    //             catch (error) {
    //                 console.log(error);
    //             }
    //             finally {
    //                 setloading(false);
    //             }
    //         }
    //         else {

    //             setloading(false);

    //         }
    //     }
    //     fetchData();

    // }, [dispatch])


    // const nextSlide = () => {
    //     setCurrent(current === l - 1 ? 0 : current + 1);
    // };

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? l - 1 : current - 1);
    // };





    return (
        <div className="bg-[#f2f3f8] w-full OneStop  mt-8 p-4 pb-14 lg:mx-1">
            <div className="relative  container-fluid OneStopmx mx-lg-5">
                <div className="row">
                    <h2 className="font-bold text-dark text-2xl md:text-4xl">
                        <span>IMTS</span>
                        <span className="text-[#007aff] ml-2">One Step Solution</span>
                    </h2>
                    <p>Answer simple questions and choose the best online university for you anywhere, anytime</p>

                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        {
                            onesteplist && (
                                onesteplist.map((item, index) => (
                                    item.steps.map((i, j) =>
                                    (
                                        <div key={index} className="flex mt-4 justify-start items-start gap-4 p-4 bg-white rounded-lg">









                                            <div className="icon-square bg-white flex-shrink-0  shadow-1  rounded fw-bold head text-secondary" style={{ paddingLeft: '18px', paddingTop: '10px', paddingRight: '18px' }}><h6 className=" h6 text-[#007aff] font-bold">{index + 1}</h6> </div>
                                            <div className="" dangerouslySetInnerHTML={{ __html: i }} />
                                        </div>
                                    ))
                                ))
                            )
                        }

                    </div>

                    <div className={`mobile:hidden mobile-small:hidden mobile-extra-small:hidden relative col-lg-4 col-md-4 md:-ml-8   onestopmobile`}>

                        <OneStepSlider images={images} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneStop;

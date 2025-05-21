import axios from "axios";
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {Link,useRouter as useNavigate} from "next/navigation";
import { apiUrl } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getCourse, getCoursePageDetail, getHomePage, getHomePageDetail } from "../../_redux/itemSlice";
import Image from "next/image";
const SearchPopUp = ({ close }) => {

    const dispatch=useDispatch();
useEffect(()=>
{
  const fetchData=async()=>
  {
   await dispatch(getHomePage()).unwrap();
   await dispatch(getCourse()).unwrap();
  }
  fetchData();
},[dispatch])
    const [active, setActive] = useState(0);

    const n = useNavigate();

    const [Name, setName] = useState('');

    const a = useSelector(getHomePageDetail);
    const a1=useSelector(getCoursePageDetail);
const c=(a1!=undefined || a1.length>0)?a1.coursepage:[];


    console.log("This is Course");
    console.log(c);

    const u = a === undefined ? [] : a.universitypage?.university;


    const [universityList, setuniversitylist] = useState([]);
    const [courseList, setcourselist] = useState([]);

    const handleChange = (e) => {
        setName(e.target.value);
    };
    const [showList, setShowList] = useState(false);







    const getData = async (Name) => {





        const up = []
        u.forEach(element => {
            if (!(Name === '')) {
                if (element.uname.toString().trim().toLowerCase().includes(Name.toLowerCase())) {
                    up.push(element);
                }
                setShowList(true);
            }
            else {
                setShowList(false);
            }
        });
        setuniversitylist(up);
        const cc = [];
        c.forEach(element => {
            if (!(Name === '')) {
                if (element.course.trim().toLowerCase().includes(Name.toLowerCase())) {
                    cc.push(element);
                }
                setShowList(true);
            }
            else {
                setShowList(false);
            }
        });
        setcourselist(cc);






    }


    const Redirect = (value) => {
        close();

        n(value);


    }

   
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            setShowList(false);
            let a = await axios.post(`${apiUrl}get-University-By-Name-Using-Like`,
                {
                    name: Name
                }
            );

            let b = await axios.post(`${apiUrl}get-Course-By-Name2`,
                {
                    name: Name
                }
            );


            if (a.data.length > 0) {


                setShowList(true);
                setuniversitylist(a.data);




            }
            else if (b.data.length > 0) {
                setShowList(true);
                setcourselist(b.data);



            }
        }
    };
    // useEffect(() => {

    //     if (universityList.length == 0 && courseList.length == 0) {
    //         setShowList(false);
    //         getData(Name);


    //     }
    // }, [Name, universityList, courseList])

    const [isMounted,setMounted]=useState(false);
    useEffect(()=>
    {
        setMounted(true);
    },[])
    return (
        <div className='min-h-screen Exp h-full bg-black/50 w-full border-t  border-t-gray-200 '>
            <motion.div initial={{ y: -800 }} animate={{ y: 0 }} exit={{ y: -800 }} transition={{ duration: 0.5 }} className=' w-full flex justify-center bg-white'>

                <div className='fixed requires-no-scroll bg-white w-screen h-screen top-0 left-0 flex flex-col items-center z-10'>
                    <div className='w-full flex justify-between px-6 py-8'>
                        <span></span>
                        <i className='fa-solid fa-xmark text-xl cursor-pointer' onClick={() => close()}></i>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full h-4/5 gap-4'>
                        <div style={{ marginTop: '-5rem' }}>
                            <Image width={200} height={200} priority src={`${apiUrl}images/IMTS.png`} alt="" />
                        </div>
                        <h4 className='flex items-center gap-2 text-[40px]' style={{ marginTop: '-2rem' }}>
                            <span className='text-primary'>College</span>
                            <span className='text-[#495057]'>Search</span>
                        </h4>
                        <div className='flex gap-2 mt-2'>
                            <p className='text-[#495057]'>Right Course, Right University, Bright Career Path with IMTS.</p>

                        </div>
                       {
                        isMounted?
                        (
                            <>
                             <div className='w-2/5 flex justify-between items-center text-base border border-gray-300 px-4 py-2 rounded-full gap-2 parent'>
                            <i class='fa-solid fa-magnifying-glass text-[#495057]'></i>
                            <input type='text'
                                onKeyDown={handleKeyDown}
                                name='search' placeholder='Search  Course or University' className='placeholder:text-[#495057] w-full outline-none' onChange={(e) => getData(e.target.value)
                                } />
                            <button onClick={(e) => getData(Name)}

                            >
                                <Image width={40} height={40} priority src={`${apiUrl}images/IMTS.png`} style={{ width: '35px' }} alt='chatbot' />
                            </button>

                        </div>


                        {
                            showList ?
                                (
                                    (universityList || courseList) ?
                                        (
                                            <div
                                                className="p-autocomplete-panel p-component SearchBar_search_panel__1lTUf p-connected-overlay-enter-done"
                                                style={{

                                                    maxHeight: '300px',


                                                    maxWidth: '100%',
                                                    width: '38%',
                                                    zIndex: 2102,
                                                    transformOrigin: 'center top',
                                                    top: '47px',
                                                    left: '0px'
                                                }}
                                            >
                                                <ul className="p-autocomplete-items" role="listbox" id="pr_id_1_list" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                                    {
                                                        universityList.map((i, e) =>
                                                        (

                                                            <li key={e} className="p-autocomplete-item cursor-pointer border-bottom" onClick={(e) => Redirect(`/universities/${i.urlname}`)}>
                                                                <div className="container-fluid">
                                                                    <div className="row">
                                                                        <div className="col-lg-3">
                                                                            <Image
                                                                                alt=""
                                                                                width={200}
                                                                                height={65}
                                                                                aria-hidden="true"
                                                                                src={`${apiUrl}images/${i.logourl}`}
                                                                                style={{
                                                                                    display: 'block',
                                                                                    width: '100%',
                                                                                    height: '65px',




                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className="col-lg-9">
                                                                            <p className="m-0 text-dark text-wrap mt-3">
                                                                                {i.uname}
                                                                            </p>
                                                                            <p className="m-0 text-primary fs-12">Added Date:{new Date(i.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[0]} {new Date(i.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[1]} , {new Date(i.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[2]}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </li>


                                                        ))
                                                    }
                                                    {
                                                        courseList.map((i, e) =>
                                                        (
                                                            <li key={e} className="p-autocomplete-item cursor-pointer border-bottom" onClick={(e) => Redirect(`/courses/${i.urlname}`)}>
                                                                <div className="container-fluid">
                                                                    <div className="row">
                                                                        <div className="col-lg-3">
                                                                            <Image
                                                                                alt=""
                                                                               width={200}
                                                                               height={200}
                                                                               priority
                                                                                src={`${apiUrl}images/${i.image}`}
                                                                                style={{
                                                                                    display: 'block',
                                                                                    width: '100%',
                                                                                    height: '65px',




                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className="col-lg-9">
                                                                            <p className="m-0 text-dark text-wrap mt-3">
                                                                                {i.courename}
                                                                            </p>
                                                                            <p className="m-0 text-primary fs-12">Added Date:{new Date(i.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[0]} {new Date(i.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[1]} , {new Date(i.added_date).toLocaleString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).split(' ')[2]}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </li>
                                                        ))
                                                    }


                                                </ul>
                                            </div>
                                        ) : ''
                                ) : ''
                        }</>
                        ):''
                       }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SearchPopUp

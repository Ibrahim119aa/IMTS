
import dynamic from "next/dynamic";
const AcademicSlider=dynamic(()=>import('@/app/components/Home/ClientComponent/AcademicSlider'));
import '@/app/components/Home/HomeStyle/Academic.css';


// import '@/app/app.css';
// import '@/app/bootstrap.min.css';

import { getCourse } from "@/app/_api/Home/Home";





const Academics =async () => {
   
   

    const a = await getCourse();

    const courselist = (a == undefined || a.length == 0) ? [] : a.coursepage



    
   
    const data = [
        {
            id: "pgCourses",
            name: "PG Courses",
        },
        {
            id: "ugCourses",
            name: "UG Courses",
        },
        , {
            id: "Diploma",
            name: "Diploma",
        }
        , {
            id: "Certification",
            name: "Certification",
        },
        {
            id: "executiveEducation",
            name: "Executive Eductaion",

        },


        {
            id: "advancedDiploma",
            name: "Advanced Diploma",
        }

    ]


  
    
    return (
        <>



            <>
                <div className='flex  '>
                  <AcademicSlider courselist={courselist} data={data} />

                </div>
            </>


        </>
    )
}

export default Academics

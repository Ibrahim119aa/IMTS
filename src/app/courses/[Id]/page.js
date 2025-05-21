import Course from "@/app/components/Courses/Course";

// import '@/app/globals.css';
import '../../globals.css';

export async function generateMetadata({ params }) {

    const { Id } = params;
    return {
        title: `${Id}`, // Dynamic title
        description: `Course Page,IMTS Course  Page, IMTS`, // Dynamic description
    };
}
const CourseDetail = ({ params }) => {
    return (
        <div>
            <Course Ids={params.Id} />
          
        </div>
    )
}
export default CourseDetail;
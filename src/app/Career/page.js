import CVCareer from "../components/CVCareer/CVCareer";
export async function generateMetadata() {
   
    return {
        title: `Career Page `, // Dynamic title
        description: `Career Page,IMT Career  Page, IMTS`, // Dynamic description
    };
}
const CVCareerPage = () => {
    return (<div>
        <CVCareer />
    </div>)
}
export default CVCareerPage;
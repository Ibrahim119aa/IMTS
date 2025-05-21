import CVExpert from "../components/CVExpert/CVExpert";
export async function generateMetadata() {

    return {
        title: `Expert Page`, // Dynamic title
        description: `Expert Page, IMT Expert Page, IMTS`, // Dynamic description
    };
}
const CVExpertPage=()=>
{
return (
    <div>
        <CVExpert/>
    </div>
)
}
export default CVExpertPage;
import UniversityPage from "@/app/components/University/UniversityPage"
export async function generateMetadata({ params }) {
    const { Id } = params; 
    return {
        title: `${Id}`, // Dynamic title
        description: `University Page, Institute Page, IMTS - ${Id}`, // Dynamic description
    };
}
const University=({params})=>
{
return <div>
    <UniversityPage Ids={params.Id}/>
</div>
}
export default  University;
import JobDetail from "@/app/components/JobDetail/JobDetail";
export async function generateMetadata({ params }) {
    const { Id } = params; 
    return {
        title: `${Id}`, // Dynamic title
        description: `Job Detail Page, Opportunity Page, IMTS - ${Id}`, // Dynamic description
    };
}
const JobDetailPage=({params})=>
{
    return (<div>
<JobDetail Ids={params.Id}/>
    </div>)
}
export default JobDetailPage;
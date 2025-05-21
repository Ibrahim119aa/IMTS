import ListYourSelf from "../components/ListYourSelf/ListYourSelf";
export async function generateMetadata({ params }) {
    const { Id } = params; 
    return {
        title: `List Your Self`, // Dynamic title
        description: `List Your Self Page, List Your University Page, IMTS - ${Id}`, // Dynamic description
    };
}
const ListYourSelfPage=()=>
{
    return (
        <div>
<ListYourSelf/>
        </div>
    )
}
export default ListYourSelfPage;
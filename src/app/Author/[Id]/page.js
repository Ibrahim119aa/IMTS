
import '../../globals.css'
import AurthorPage from "@/app/components/Authors/AuthorPage";

export async function generateMetadata({ params }) {
    const { Id } = params;
    return {
        title: `Author Page - ${Id}`, // Dynamic title
        description: `Author Page, Owner Page, IMTS - ${Id}`, // Dynamic description
    };
}
const Authors = ({ params }) => {


    return (
        <div>
            <AurthorPage Id1={params.Id} />
        </div>
    )
}
export default Authors;
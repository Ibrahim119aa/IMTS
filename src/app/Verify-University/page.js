import VerifyUniversity from "../components/VerifyUniversity/VerifyUniversity";
export async function generateMetadata() {
    return {
        title: `Verify University`, // Dynamic title
        description: `Verify University Page, IMTS - Verified University`, // Dynamic description
    };
}
const VerifyUniversityPage = () => {
    return (
        <div>
            <VerifyUniversity />
        </div>
    )
}
export default VerifyUniversityPage;
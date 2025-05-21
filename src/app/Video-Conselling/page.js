
import VideoConselling from "../components/VideoConselling/VideoConselling"
export async function generateMetadata() {
    
    return {
        title: `Video Conselling`, // Dynamic title
        description: `Video Conselling Page, IMTS - Video Conselling`, // Dynamic description
    };
}
const VideoCounsellingPage = () => {
    return (
        <div>
            <VideoConselling />
        </div>)
}
export default VideoCounsellingPage;
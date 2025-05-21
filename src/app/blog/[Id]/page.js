
// import BlogPage from "@/app/components/blog/BlogPage";
import BlogDetail from "@/app/components/blog/BlogDetail";
export async function generateMetadata({ params }) {
    const { Id } = params; 
    return {
        title: `${Id}`, // Dynamic title
        description: `Blog Page, Article Page, IMTS - ${Id}`, // Dynamic description
    };
}
const BlogDetails = ({ params }) => {
  

    return (
        <div>
            {/* <BlogPage Id={params.Id} /> */}
            <BlogDetail Id={params.Id} />
        </div>
    )
}
export default BlogDetails;
import Link from "next/link";
import Navbar from "./Navbar";
export const fetchData = async () => {
    let a = await fetch(`${process.env.API_URL}get-Latest-Header`,
        {
            next: {
                revalidate: 3600 * 24
            }
        }
    );
    return a.json();
}
const MainHeader = async () => {
    let apiUrl = process.env.API_URL;
    let b = await fetchData();



    return (
        // <Navbar a={b}/>
        <h1>fsdfsd</h1>
    )
}
export default MainHeader;

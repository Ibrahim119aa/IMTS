async function getAbout()
{
    let a=await fetch(`${process.env.API_URL}get-About-Page`,
        {
            next:{
                revalidate:3600
            }
        }
    );
    return a.json();

}
const getMedia = async () => {
    let a = await fetch(`${process.env.API_URL}get-Latest-Media`);
    return a.json();

}
export {getAbout,getMedia};
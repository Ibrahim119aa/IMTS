async function  getExpertPage()
{
     let a=await fetch(`${process.env.API_URL}get-Latest-Expert-Page`,
        {
            next:
            {
                revalidate:3600
            }
        }
     )
     return a.json();
}
export {getExpertPage}
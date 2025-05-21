
async function getAuthor(Id) {
    console.log(`This is ${Id}`);
    let a = await fetch(`${process.env.API_URL}get-Author-Full-Detail`,
        {
            method: 'POST',
            credentials: 'include',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: Id
            }),
           
        },
       
    );
    return a.json();

}
export {getAuthor}
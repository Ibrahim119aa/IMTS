async function getBlog() {
    let a = await fetch(`${process.env.API_URL}get-Blog-By-Client`,
        {
            next:
            {
                revalidate: 1
            }
        }
    );
    return a.json();

}
async function getParticularBlog(urlname) {
    console.log(`Urlname is ${urlname}`);

    let a = await fetch(`${process.env.API_URL}get-Blog-Using-Urlname`,
        {
            headers:
            {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ urlname: urlname })
        }
    )
    return a.json();

}


export { getBlog, getParticularBlog };
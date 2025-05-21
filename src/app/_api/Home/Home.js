async function getUniversity() {
    let a = await fetch(`${process.env.API_URL}get-Universiy-By-Course`,
        {
            next: {
                revalidate: 3600
            }
        }
    );


    return a.json();


}
async function getOneStep() {
    let a = await fetch(`${process.env.API_URL}get-One-Step-Solution-Client`,
        {
            next:
            {
                revalidate: 3600
            }
        }
    );
    return a.json();

}
async function getBanner() {
    let a = await fetch(`${process.env.API_URL}get-Banner`,
        {
            next: {
                revalidate: 3600 * 24
            }
        }
    );
    return a.json();

}
async function getMarquee() {
    let a = await fetch(`${process.env.API_URL}get-Marquee`,
        {
            next: {
                revalidate: 3600
            }
        }
    );
    return a.json();
}
async function getStaffList() {
    let a = await fetch(`${process.env.API_URL}get-Staff`,
        {
            next: {
                revalidate: 3600
            }
        }
    );
    return a.json();
}
async function getAlumniList() {
    let a = await fetch(`https://login.imtsinstitute.com/get-Students`,
        {
            revalidate: 3600
        }

    );
    return a.json();

}
async function getNewList() {
    let a = await fetch(`${process.env.API_URL}get-Media`,
        {
            next: {
                revalidate: 3600
            }
        }
    );
    return a.json();

}
async function getFaq() {
    let a = await fetch(`${process.env.API_URL}get-Faq`,
        {
            next:
            {
                revalidate: 3600
            }
        }
    );
    return a.json();

}
async function getCourse() {
    let a = await fetch(`${process.env.API_URL}get-Course-Page`,
        {
            next:
            {
                revalidate: 3600
            }
        }
    );
    return a.json();
}
async function getHeader() {
    let a = await fetch(`${process.env.API_URL}get-Latest-Header`,
        {
            next:
            {
                revalidate: 3600
            }
        }
    );
    return a.json();

}
async function getFooter() {
    let a = await fetch(`${process.env.API_URL}get-Footer`,
        {
            next:
            {
                revalidate: 3600
            }
        }
    );
    return a.json();
}
export { getUniversity, getFooter, getOneStep, getNewList, getBanner, getMarquee, getStaffList, getAlumniList, getFaq, getCourse, getHeader };
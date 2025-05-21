import { getMarquee } from "@/app/_api/Home/Home";

const Marquee = async() => {


  let mar=await getMarquee();
 



  return (
    mar &&
    (
      mar.map((n,k) =>
      (
        n.status == "Active" ?
          (
            <div key={k} className="marquee-container my-3">
              <div className="marquee">
                <p className='h1 h1color'>{n.name}</p>
              </div>
            </div>
          ) : ''
      ))
    )
  );
}



export default Marquee;
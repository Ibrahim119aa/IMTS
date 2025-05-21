import { getAlumniList } from "@/app/_api/Home/Home";
import dynamic from "next/dynamic";
const AlumniSlider = dynamic(() => import('@/app/components/Home/ClientComponent/TestimonialSlider'));

const Testimonials = async () => {

  const alumni = await getAlumniList();



  const midIndex = Math.ceil(alumni.length / 2);


  const firstHalf = alumni.slice(0, midIndex);
  const secondHalf = alumni.slice(midIndex);








  return (
    <div className=" bg-[#02081b]  flex justify-center p-5 md:px-0 relative z-0">
      <div className="w-full relative py-2 md:py-2 flex flex-col justify-center items-center px-2">
        <h2 className="testimonial-number text-[40px] md:text-[50px] my-lg-2 testheading">
          100000+ Student
        </h2>
        <p className="text-white text-sm md:text-base font-bold bg-primary px-4 testsubheading py-1 rounded-lg">
          Interested Us
        </p>







        <div className="grid relative grid-cols-1">

          <AlumniSlider alumni={firstHalf} />
        </div>
        <div className="grid relative grid-cols-1">

<AlumniSlider alumni={secondHalf} />
</div>
      </div>
    </div>
  );
};

export default Testimonials;

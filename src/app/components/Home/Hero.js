import { getBanner } from "@/app/_api/Home/Home";
import dynamic from "next/dynamic";
// import '@/app/app.css';

// Dynamically import the client component with SSR disabled
const BannerSlider = dynamic(() => import('@/app/components/Home/ClientComponent/BannerSlider'), {
  ssr: false,
});

const Hero = async () => {
  const bannerimage = await getBanner(); // Fetch banner images

  return (
    <>
      <BannerSlider bannerimage={bannerimage} />
    </>
  );
};

export default Hero;

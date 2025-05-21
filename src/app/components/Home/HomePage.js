
const Hero = dynamic(() => import('@/app/components/Home/Hero'), { ssr: true });
const Marquee = dynamic(() => import('@/app/components/Home/Marquee'), { ssr: true });
const Academics = dynamic(() => import('@/app/components/Home/Academics'), { ssr: true });
const WhatMakes = dynamic(() => import('@/app/components/Home/WhatMakes'), { ssr: true });
const OneStop = dynamic(() => import('@/app/components/Home/OneStop'), { ssr: true });
const Experts = dynamic(() => import('@/app/components/Home/Expert'), { ssr: true });
const Universities = dynamic(() => import('@/app/components/Home/Universities'), { ssr: true });
const Testimonials = dynamic(() => import('@/app/components/Home/Testimonials'), { ssr: true });
const Faq = dynamic(() => import('@/app/components/Home/Faq'), { ssr: true });
const News = dynamic(() => import('@/app/components/Home/News'), { ssr: true });




const HomePage = () => {
      return (<div>

            <Hero />

            <Marquee />
            <Academics />
            <WhatMakes />
            <OneStop />
            <Experts />
            <Universities />
            <Testimonials />
            <News />
            <Faq />
            {/*
            
           
          
          
           
            
           
           */}

      </div>)
}
export default HomePage;
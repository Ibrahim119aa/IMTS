import dynamic from 'next/dynamic';

// Dynamically importing components
const Hero = dynamic(() => import('./Hero'));
const Academics = dynamic(() => import('./Academics'));
const JoinUs = dynamic(() => import('./JoinUs'));
const Experts = dynamic(() => import('./Expert'));
const Counter = dynamic(() => import('./Counter'));
const GlobalSuccess = dynamic(() => import('./GlobalSuccess'));
const WhatMakes = dynamic(() => import('./WhatMakes'));
const StudentReview = dynamic(() => import('./StudentReview'));
const Highlight = dynamic(() => import('./Highligth'));
const VideoService = dynamic(() => import('./VideoService'));
const News = dynamic(() => import('./News'));
const Journey = dynamic(() => import('./Journey'));
const HomeBlog = dynamic(() => import('./HomeBlog'));
const Testimonials = dynamic(() => import('@/app/components/Home/Testimonials'), { ssr: false });
const Faq = dynamic(() => import('./Faq'));




const Index = () => {
    return (
        <>

            <Hero />
            <Academics />
            <JoinUs />
            <Experts />
            <Counter />
            <GlobalSuccess />
            <Testimonials />
            <WhatMakes />
            <StudentReview />
            <Highlight />
            <JoinUs />
            <VideoService />
            <News />
            <Journey />
            <HomeBlog />
            <Faq /> 
            {/* */}
            {/* 
           
          

            
            
           
          
           
           
           
           
            */}




        </>
    )
}
export default Index;
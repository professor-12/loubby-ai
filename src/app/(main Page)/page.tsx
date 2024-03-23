import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import SlideShow1 from "@/components/SlideShow1";
import SlideShow2 from "@/components/SlideShow2";
import SlideShow3 from "@/components/SlideShow3";
import SlideShow4 from "@/components/SlideShow4";
import Stats from "@/components/Stats";
import React from "react";

const Page = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Stats />
            <SlideShow2 />
            <SlideShow1 />
            <SlideShow3 />
            <SlideShow4 />
        </div>
    );
};

export default Page;

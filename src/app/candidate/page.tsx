import { Metadata } from "next";
import React from "react";
import HeroCandidateSection from "./HeroCandidateSection";
import Cards from "./Cards";
import SlideShow1 from "./SlideShow1";
import SlideShow2 from "./SlideShow2";
import SlideShow3 from "./SlideShow3";
import SlideShow4 from "./SlideShow4";

export const metadata: Metadata = {
    title: "Candidate - Loubby",
};
const page = () => {
    return (
        <div className="my-32 container mx-auto xl:w-[75%]">
            <HeroCandidateSection />
            <Cards />
            <SlideShow1 />
            <SlideShow2 />
            <SlideShow3 />
            <SlideShow4 />
        </div>
    );
};

export default page;

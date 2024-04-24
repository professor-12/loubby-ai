import React from "react";
import Hero from "./components/Hero";
import Cards from "./components/Card";
import SlideShow1 from "./components/SlideShow1";
import SlideShow2 from "./components/SlideShow2";
import SlideShow3 from "./components/SlideShow3";
import SlideShow4 from "./components/SlideShow4";

export const metadata = {
    title: "Assess - Loubby",
};

const Page = () => {
    return (
        <div className="mx-auto xl:w-[75%] px-4 my-32 md:px-0">
            <Hero />
            <Cards />
            <div className="space-y-28 md:space-y-32">
                <div id="quizzes-assessments">
                    <SlideShow1 />
                </div>
                <div id="score-cards">
                    <SlideShow2 />
                </div>
                <div id="ai-screening">
                    <SlideShow3 />
                </div>
                <div id="collaborative-tools">
                    <SlideShow4 />
                </div>
            </div>
        </div>
    );
};

export default Page;

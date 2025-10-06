import React from "react";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import SlideShow1 from "./components/SlideShow1";
import SlideShow2 from "../hiring/SlideShow2";
import SlideShow3 from "./components/SlideShow3";
import SlideShow4 from "./components/SlideShow4";

export const metadata = {
    title: "Attract -  Loubby",
};

const page = () => {
    return (
        <div className="container px-4 md:px-0 mt-32 mx-auto xl:w-[75%]">
            <Hero />
            <Cards />
            <div className="space-y-32 md:space-y-28">
                <SlideShow1 />
                <SlideShow2 />
                <SlideShow3 />
                <SlideShow4 />
            </div>
        </div>
    );
};

export default page;

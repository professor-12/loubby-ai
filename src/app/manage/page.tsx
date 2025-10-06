import React from "react";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import SlideShow1 from "./components/SlideShow1";
import SlideShow2 from "./components/SlideShow2";
import SlideShow3 from "./components/SlideShow3";
import SlideShow4 from "./components/SlideShow4";

export const metadata = {
    title: "Manage - Loubby",
};
const Page = () => {
    return (
        <div className="mx-auto xl:w-[75%] px-4 my-32 md:px-0">
            <Hero />
            <Cards />
            <div className="md:space-y-32">
                <SlideShow1 />
                <SlideShow2 />
                <SlideShow3 />
                <SlideShow4 />
            </div>
        </div>
    );
};

export default Page;

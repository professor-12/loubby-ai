import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import SlideShow1 from "./SlideShow1";
import SlideShow2 from "./SlideShow2";
import SlideShow3 from "./SliddeShow3";
import SlideShow4 from "./SlideShow4";
export const metadata = {
    title: "Hiring - Loubby",
};

const Layout = () => {
    return (
        <div className="mx-auto xl:w-[75%] px-4 my-32 md:px-0">
            <Hero />
            <Cards />
            <SlideShow1 />
            <SlideShow2 />
            <SlideShow3 />
            <SlideShow4 />
        </div>
    );
};

export default Layout;

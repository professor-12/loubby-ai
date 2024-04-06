import { Metadata } from "next";
import React from "react";
import HeroCandidateSection from "./HeroCandidateSection";
import Cards from "./Cards";

export const metadata: Metadata = {
    title: "Candidate - Loubby",
};
const page = () => {
    return (
        <div className="my-32 p-3 container mx-auto xl:w-[75%]">
            <HeroCandidateSection />
            <Cards />
        </div>
    );
};

export default page;

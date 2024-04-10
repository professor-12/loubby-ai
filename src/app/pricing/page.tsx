import { Metadata } from "next";
import React from "react";
import HeroPricing from "./HeroPricing";
import Billing from "./Billing";
import FeatureSection from "./FeatureSection";
import FAQ from "./FAQ";


export const metadata: Metadata = {
    title: "Pricing - Loubby",
};

const Pricing = () => {
    return (
        <div className="my-32">
            <div className="container mx-auto xl:w-[75%]">
                <HeroPricing />
            </div>
            <div className="container mx-auto xl:w-[75%]">
                <Billing />
            </div>
            <div className="container mx-auto xl:w-[75%]">
                <FeatureSection />
            </div>
            <FAQ/>
        </div>
    );
};

export default Pricing;

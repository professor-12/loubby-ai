import { Metadata } from "next";
import React from "react";
import HeroPricing from "./HeroPricing";
import Billing from "./Billing";
import FeatureSection from "./FeatureSection";

export const metadata: Metadata = {
    title: "Pricing - Loubby",
};

const Pricing = () => {
    return (
        <div className="my-32 container mx-auto xl:w-[75%]">
            <HeroPricing />
            <Billing />
            <FeatureSection />
        </div>
    );
};

export default Pricing;

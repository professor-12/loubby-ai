// #ECFDF3;
// #FFFAEB;
import { FaMedal } from "react-icons/fa";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { PiSparkleLight } from "react-icons/pi";

import React from "react";

const Cards = () => {
    return (
        <div className="grid my-20 w-full gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="p-6 bg-[#ECFDF3] rounded-xl space-y-4 py-8">
                <div className="flex">
                    <span className="bg-[#039855] p-2 rounded-lg flex">
                        <FaAmericanSignLanguageInterpreting className="text-4xl text-white font-semibold" />
                    </span>
                </div>
                <h1 className="text-2xl  font-semibold">Data-Driven</h1>
                <p className="text-muted lg:w-[68%]">
                    Make data-driven hiring decisions with comprehensive
                    candidate assessments and insights.
                </p>
            </div>
            <div className="p-6 bg-[#EEF4FF] rounded-xl space-y-4 py-8">
                <div className="flex">
                    <span className="bg-[#444CE7] p-2 rounded-lg flex">
                        <PiSparkleLight className="text-4xl text-white font-semibold" />
                    </span>
                </div>
                <h1 className="text-2xl  font-semibold">Fair Evaluation</h1>
                <p className="text-muted lg:w-[68%]">
                    Conduct fair and objective evaluations of candidates using
                    standardized assessment tools.
                </p>
            </div>
            <div className="p-6 bg-[#FFFAEB] rounded-xl space-y-4 py-8">
                <div className="flex">
                    <span className="bg-[#DC6803] rounded-lg flex p-2">
                        <FaMedal className="text-4xl text-white font-semibold" />
                    </span>
                </div>
                <h1 className="text-2xl font-semibold">Customization</h1>
                <p className="text-muted lg:w-[68%]">
                    Tailor assessments to specific job requirements and skills,
                    effectively assessing candidates’ capabilities.
                </p>
            </div>
        </div>
    );
};

export default Cards;

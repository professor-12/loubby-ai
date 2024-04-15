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
                <h1 className="text-2xl  font-semibold">
                    Streamline Operations
                </h1>
                <p className="text-muted">
                    Gain valuable insights and analytics to make data-driven
                    decisions, optimize operations, and improve overall
                    efficiency
                </p>
            </div>
            <div className="p-6 bg-[#ECFDF3] rounded-xl space-y-4 py-8">
                <div className="flex">
                    <span className="bg-[#444CE7] p-2 rounded-lg flex">
                        <PiSparkleLight className="text-4xl text-white font-semibold" />
                    </span>
                </div>
                <h1 className="text-2xl  font-semibold">Centralized Control</h1>
                <p className="text-muted ">
                    Maintain control over your organization’s processes and
                    workflows with Loubby’s comprehensive approval and hierarchy
                    system.
                </p>
            </div>
            <div className="p-6 bg-[#FFFAEB] rounded-xl space-y-4 py-8">
                <div className="flex">
                    <span className="bg-[#DC6803] rounded-lg flex p-2">
                        <FaMedal className="text-4xl text-white font-semibold" />
                    </span>
                </div>
                <h1 className="text-2xl font-semibold">Optimize Performance</h1>
                <p className="text-muted">
                    Leverage the power of Loubby’s pipeline management to track
                    and manage candidates throughout the hiring process
                </p>
            </div>
        </div>
    );
};

export default Cards;

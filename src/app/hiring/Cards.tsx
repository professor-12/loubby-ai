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
                <h1 className="text-2xl  font-semibold">Guaranteed</h1>
                <p className="text-muted lg:w-[68%]">
                    Gain confidence in your hiring decisions with Loubby’s
                    robust features
                </p>
            </div>
            <div className="p-6 bg-[#ECFDF3] rounded-xl space-y-4 py-8">
                <div className="flex">
                    <span className="bg-[#444CE7] p-2 rounded-lg flex">
                        <PiSparkleLight className="text-4xl text-white font-semibold" />
                    </span>
                </div>
                <h1 className="text-2xl  font-semibold">Simplified</h1>
                <p className="text-muted lg:w-[68%]">
                    Experience a simplified hiring process with intuitive tools
                    and streamlined workflows
                </p>
            </div>
            <div className="p-6 bg-[#FFFAEB] rounded-xl space-y-4 py-8">
                <div className="flex">
                    <span className="bg-[#DC6803] rounded-lg flex p-2">
                        <FaMedal className="text-4xl text-white font-semibold" />
                    </span>
                </div>
                <h1 className="text-2xl font-semibold">Top-notch</h1>
                <p className="text-muted lg:w-[68%]">
                    Access top-notch talent and elevate your workforce with
                    candidates that fit your role
                </p>
            </div>
        </div>
    );
};

export default Cards;

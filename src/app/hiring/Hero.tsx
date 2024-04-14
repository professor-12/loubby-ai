"use client";
import UseAnimationText from "@/hooks/UseAnimationText";
import Image from "next/image";

import React from "react";

const listofWords = ["design", "developer", "Devops", "HR", "loubby"];
const Hero = () => {
    const { nextWord, index } = UseAnimationText(listofWords);
    return (
        <div className="flex justify-between space-y-12 flex-col md:flex-row items-center">
            <div className="space-y-4">
                <h2 className="text-SpecialBlue font-semibold">
                    Hiring Feature{" "}
                </h2>
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Discover your <br /> perfect{" "}
                    <span className="text-SpecialBlue">
                        {nextWord?.substring(0, index)}{" "}
                    </span>
                    hire
                </h1>
                <p className="text-muted/90 md:text-lg">
                    Streamline your hiring process with Loubby’s powerful <br />
                    features and make informed hiring decisions
                </p>
                <button className="bg-SpecialBlue font-medium p-3 px-4 text-white rounded-md">
                    Start Hiring
                </button>
            </div>
            <div className="overflow-hidden  shadow-lg rounded">
                <Image
                    className="object-scale-down"
                    src={"/Dashboard.png"}
                    alt=""
                    height={450}
                    width={540}
                />
            </div>
        </div>
    );
};

export default Hero;

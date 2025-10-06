"use client";
import UseAnimationText from "@/hooks/UseAnimationText";
import Image from "next/image";
import React from "react";

const Hero = () => {
    const { index, nextWord } = UseAnimationText([
        "identify",
        "evaluate",
        "select",
    ]);
    return (
        <div className="flex container justify-between space-y-12 flex-col md:flex-row  md:items-center">
            <div className="space-y-4">
                <h2 className="text-SpecialBlue md:text-2xl font-semibold">
                    Assesment Feature{" "}
                </h2>
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Optimize <br className="hidden md:block" /> assessment to{" "}
                    <br className="hidden md:block" />
                    <span className="text-primaryBlue">
                        {nextWord?.substring(0, index)}
                        <span className="animate-ping text-slate-800">|</span>
                    </span>{" "}
                    the best fit
                </h1>
                <p className="text-muted/90 md:text-lg">
                    Make informed hiring decisions with powerful{" "}
                    <br className="hidden md:block" /> candidate evaluation
                    tools.
                </p>
                <button className="bg-SpecialBlue font-medium p-3 px-4 text-white rounded-md">
                    Assess Candidates
                </button>
            </div>
            <div className="overflow-hidden  shadow-lg rounded">
                <Image
                    className="object-scale-down"
                    src={"/Dashboard.png"}
                    alt=""
                    height={470}
                    width={600}
                />
            </div>
        </div>
    );
};

export default Hero;

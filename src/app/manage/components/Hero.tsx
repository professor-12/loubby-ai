"use client";
import UseAnimationText from "@/hooks/UseAnimationText";
import Image from "next/image";
import React from "react";

const Hero = () => {
    const { index, nextWord } = UseAnimationText([
        "control",
        "management",
        "analytical",
    ]);
    return (
        <div className="flex container justify-between space-y-12 flex-col md:flex-row  md:items-center">
            <div className="space-y-4">
                <h2 className="text-SpecialBlue md:text-2xl font-semibold">
                    Management Features{" "}
                </h2>
                <h1 className="text-4xl lg:text-5xl font-bold">
                    Stay organized <br className="hidden md:block" /> with
                    powerful <br />
                    <span className="text-primaryBlue">
                        {nextWord?.substring(0, index)}
                        <span className="animate-ping text-slate-800">|</span>
                    </span>{" "}
                    tools
                </h1>
                <p className="text-muted/90 md:text-lg">
                    Keep your organization informed and stay organized{" "}
                    <br className="hidden md:block" /> with Loubby’s robust
                    workforce management tools.
                </p>
                <button className="bg-SpecialBlue font-medium p-3 px-4 text-white rounded-md">
                    Join Loubby
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

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroCandidateSection = () => {
    const listofWords = [
        "Interview Preparation",
        "Application Management",
        "Job search",
    ];
    let time: NodeJS.Timeout;
    const [index, setIndex] = useState(0);
    const [Switch, setSwitch] = useState<"backwards" | "forwards">("forwards");
    const [nextWordIndex, setNextWordIndex] = useState(0);
    const nextWord = listofWords[nextWordIndex];
    const activeTextLength = listofWords[nextWordIndex]?.length;

    useEffect(() => {
        let time = setInterval(() => {
            if (Switch == "forwards") {
                setNextWordIndex((prev) => {
                    if (prev >= listofWords.length) return 0;
                    return prev;
                });
                if (index >= activeTextLength) {
                    return setSwitch("backwards");
                } else {
                    setIndex((prev) => {
                        return prev + 1;
                    });
                }
            } else if (Switch == "backwards") {
                if (index <= 0) {
                    setNextWordIndex((prev) => {
                        if (prev <= listofWords.length) {
                            return prev + 1;
                        }
                        return 0;
                    });
                    setSwitch("forwards");
                } else if (index <= activeTextLength && index > 0) {
                    setIndex((prev) => {
                        return prev - 1;
                    });
                }
            }
        }, 150);
        return () => {
            clearInterval(time);
        };
    }, [Switch, activeTextLength, index, listofWords.length]);

    return (
        <div className="px-2">
            <div className="text-center space-y-5">
                <h1 className="text-center  font-semibold  text-SpecialBlue">
                    For Candidates
                </h1>
                <h1 className="text-center text-slate-800 text-3xl md:text-5xl font-bold">
                    Elevate Your{" "}
                    <span className="text-SpecialBlue   after:animate-pulse after:content-[' ']  after:h-[2.5rem] self-center after:m-1 after:border-2 after:border-slate-500">
                        {nextWord?.substring(0, index)}
                    </span>{" "}
                    with Loubby
                </h1>
                <p className="md:text-lg">
                    Keep your organization informed and stay organized with
                    Loubby’s robust workforce management tools.
                </p>
            </div>
            <button className="p-3 mx-auto my-6 self-center flex px-5 text-white text-center bg-SpecialBlue rounded-lg">
                Join Loubby
            </button>

            <div className="flex items-center  my-12 relative z-50 px-6 md:px-0 justify-center">
                <Image
                    src={"/DashBoard.png"}
                    alt="HeroImageDashBoard"
                    className="drop-shadow-2xl rounded-xl"
                    width={800}
                    height={70}
                />
            </div>
        </div>
    );
};

export default HeroCandidateSection;

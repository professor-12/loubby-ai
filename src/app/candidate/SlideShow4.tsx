import Image from "next/image";
import React from "react";
import { SlideShowList2 } from "./lib/slideShowList";
import { PiCheckBold } from "react-icons/pi";

const SlideShow4 = () => {
    return (
        <div className="flex  flex-row-reverse justify-between space-x-12 my-36 items-center">
            <div className="md:flex md:space-y-5 pr-10 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto ml-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] h-[20rem] border-SpecialBlue md:w-full  border-8  rounded-xl">
                            <Image
                                src={"/Container.png"}
                                alt="slideShowImage"
                                width={700}
                                height={700}
                                className="rounded-2xl  xl:h-[28rem] h-[20rem] top-16 left-10 drop-shadow-md absolute"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-SpecialBlue text-lg font-semibold">
                    Interview Preparation
                </h1>
                <p className="text-4xl font-semibold">
                    Prepare Confidently for Your Job Interviews
                </p>
                <p className="text-lg">
                    Loubby’s interview preparation feature equips candidates
                    with the tools and resources needed to excel in job
                    interviews. Access valuable interview tips, sample
                    questions, and expert advice to enhance your preparation.
                    Practice mock interviews, refine your responses, and boost
                    your confidence before the actual interview.
                </p>
                <div className="grid gap-3 grid-cols-2 p-2">
                    {SlideShowList2.map((item) => (
                        <div
                            key={item}
                            className="space-x-2 items-center  flex"
                        >
                            <span>
                                <PiCheckBold className="text-SpecialBlue text-2xl  font-extrabold" />
                            </span>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow4;

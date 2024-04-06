import React from "react";
import Image from "next/image";
import { PiCheckBold } from "react-icons/pi";
import { SlideShowList2 } from "./lib/slideShowList";

const SlideShow2 = () => {
    return (
        <div className="flex px-4 flex-col lg:flex-row-reverse justify-between md:space-x-12 mt-36  items-center">
            <div className="md:flex md:space-y-5 pr-10 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto ml-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] h-[20rem] border-green-600 mr-12  md:w-full  border-8  rounded-xl">
                            <Image
                                src={"/Profile-card-2.png"}
                                alt="slideShowImage"
                                width={700}
                                height={700}
                                className="rounded-2xl  xl:h-[28rem] h-[20rem] top-16 left-10 drop-shadow-md absolute"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-3 mt-20 md:my-0">
                <h1 className="text-green-700 text-lg font-semibold">
                    Candidate Profile Management
                </h1>
                <p className="text-3xl md:text-4xl font-semibold">
                    Showcase Your Skills and Stand Out to Employers
                </p>
                <p className="md:text-lg">
                    Loubby’s candidate profile management feature enables
                    individuals to create a professional and comprehensive
                    profile that showcases their skills, experience, and
                    achievements. Craft a visually appealing profile, highlight
                    key qualifications, and upload relevant documents such as
                    resumes and portfolios.
                </p>
                <div className="grid gap-3 grid-cols-2 p-2">
                    {SlideShowList2.map((item) => (
                        <div
                            key={item}
                            className="space-x-2 items-center  flex"
                        >
                            <span>
                                <PiCheckBold className="text-green-700 text-2xl  font-extrabold" />
                            </span>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow2;

"use client";
import React from "react";
import SlideShowHeader from "./UI/SlideShowHeader.tsx/SlideShowHeader";
import SlideShowNavigation from "./UI/SlideShowHeader.tsx/SlideShowNavigation";
import SlideShowParagraph from "./UI/SlideShowHeader.tsx/SlideShowParagraph";
import useSlideShow from "@/hooks/useSlideShowHooks";
import { SlideShowItems, array } from "@/lib/slideShow1";
import { SlideShow } from "./UI/SlideShowHeader.tsx/SlideShow";
import { SlideShowImage } from "./UI/SlideShowHeader.tsx/SlideShowImages";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const SlideShow2 = () => {
    const { index, setIndex } = useSlideShow(0, 3, 3000);
    const context = SlideShowItems[index];
    return (
        <SlideShow>
            <div>
                <SlideShowHeader>
                    Streamline your <br /> talent hiring process
                </SlideShowHeader>
                <SlideShowParagraph>
                    Find, hire and manage employees without hassle with Loubby’s
                    all-in-one software solution
                </SlideShowParagraph>
            </div>
            <div>
                <SlideShowNavigation
                    index={index}
                    setIndex={setIndex}
                    array={array}
                />
            </div>
            <div className="my-16">
                <SlideShowImage context={context} />
            </div>
            <div className="mx-auto  overflow-hidden md:px-15 mt-40 md:my-40 relative  rounded-xl p-2 container md:p-20 xl:w-[75%] bg-lightOpacityGreen">
                <div className="space-y-4 relative z-50">
                    <div className="flex space-x-3 items-center">
                        <span className="flex items-center justify-center rounded-full bg-primaryGreen font-extrabold text-3xl text-white w-12 h-12">
                            <span>?</span>
                        </span>
                        <Link
                            href={"/#"}
                            className="cursor-pointer border border-primaryGreen p-2 text-primaryGreen rounded-full px-5 font-medium"
                        >
                            <span>Knowlenge Base</span>
                        </Link>
                    </div>
                    <div className="space-y-2 md:space-y-0">
                        <h1 className="text-primaryGreen text-xl lgd:text-[2.5rem] font-semibold">
                            Types of talents on Loubby
                        </h1>
                        <div className="space-y-[0.19rem]">
                            <p className="flex items-center space-x-2">
                                <span>
                                    <BsCheck className="text-primaryGreen text-2xl font-semibold" />
                                </span>
                                <span>
                                    <span className="text-lg font-bold">
                                        Full time:{"  "}
                                    </span>
                                    <span className="text-lg">
                                        Pay a fixed compensation monthly
                                    </span>
                                </span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>
                                    <BsCheck className="text-primaryGreen text-2xl font-semibold" />
                                </span>
                                <span>
                                    <span className="text-lg font-bold">
                                        Contractors:{" "}
                                    </span>
                                    <span className="text-lg">
                                        Make payment based on milestones
                                    </span>
                                </span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>
                                    <BsCheck className="text-primaryGreen text-2xl font-semibold" />
                                </span>
                                <span>
                                    <span className="text-lg font-bold">
                                        Free Lancers: {" "}
                                    </span>
                                    <span className="text-lg">
                                        Pay according to a calculated hourly
                                        rate
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <Image
                    src={"/subtract-1.png"}
                    alt=""
                    className="absolute right-4 -top-40 lg:top-6 md:w-[25rem] h-[110%]"
                    width={500}
                    height={500}
                />
            </div>
        </SlideShow>
    );
};

export default SlideShow2;

"use client";
import useSlideShow from "@/hooks/useSlideShowHooks";
import React from "react";
import { SlideShow } from "./UI/SlideShowHeader.tsx/SlideShow";
import SlideShowHeader from "./UI/SlideShowHeader.tsx/SlideShowHeader";
import SlideShowParagraph from "./UI/SlideShowHeader.tsx/SlideShowParagraph";
import SlideShowNavigation from "./UI/SlideShowHeader.tsx/SlideShowNavigation";
import {
    SlideShowItems,
    SlideShowItems2,
    array,
    array2,
} from "@/lib/slideShow1";
import { SlideShowImage } from "./UI/SlideShowHeader.tsx/SlideShowImages";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import Link from "next/link";

const SlideShow1 = () => {
    const { index, setIndex } = useSlideShow!(0, 3, 3000);
    const context = SlideShowItems2[index];
    return (
        <SlideShow>
            <div>
                <SlideShowHeader>
                    Assess your <br /> candidates with ease
                </SlideShowHeader>
                <SlideShowParagraph>
                    Loubby’s assessment portal and scorecard features make it
                    easy to evaluate and select the right candidates for your
                    job openings.
                </SlideShowParagraph>
            </div>
            <div>
                <SlideShowNavigation
                    index={index}
                    setIndex={setIndex}
                    array={array2}
                />
            </div>
            <div className="my-16">
                <SlideShowImage context={context} />
            </div>
            <div className="mx-auto overflow-hidden px-15 my-40 relative rounded-xl p-20 w-[75%] bg-[#EEF4FF]">
                <div className="space-y-4 ">
                    <div className="flex space-x-3 items-center">
                        <span className="flex items-center justify-center rounded-full bg-[#444CE7] font-extrabold text-3xl text-white w-12 h-12">
                            <span>?</span>
                        </span>
                        <Link
                            href={"/#"}
                            className="cursor-pointer border border-[#444CE7] p-2 text-[#444CE7] rounded-full px-5 font-medium"
                        >
                            <span>Did you know?</span>
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-[#444CE7] leading-[2.8rem] text-[2.4rem] font-semibold">
                            Over 70% of good <br /> candidates
                        </h1>

                        <p className="flex py-1 items-center space-x-2">
                            <span className="">
                                are lost because of bad hiring decisions
                            </span>
                        </p>
                    </div>
                </div>
                <Image
                    src={"/Subtract.png"}
                    alt=""
                    className="absolute right-4 top-6 w-[25rem] h-[110%]"
                    width={500}
                    height={500}
                />
            </div>
        </SlideShow>
    );
};

export default SlideShow1;

"use client";
import useSlideShow from "@/hooks/useSlideShowHooks";
import { SlideShowItems3, array3 } from "@/lib/slideShow1";
import React from "react";
import { SlideShow } from "./UI/SlideShowHeader.tsx/SlideShow";
import SlideShowHeader from "./UI/SlideShowHeader.tsx/SlideShowHeader";
import SlideShowParagraph from "./UI/SlideShowHeader.tsx/SlideShowParagraph";
import SlideShowNavigation from "./UI/SlideShowHeader.tsx/SlideShowNavigation";
import { SlideShowImage } from "./UI/SlideShowHeader.tsx/SlideShowImages";
import Image from "next/image";
import Link from "next/link";

const SlideShow3 = () => {
    const { index, setIndex } = useSlideShow(0, 3, 3000)!;
    const context = SlideShowItems3[index];
    return (
        <SlideShow>
            <div>
                <SlideShowHeader>
                    Efficient Employee <br /> Management Hub
                </SlideShowHeader>
                <SlideShowParagraph>
                    From onboarding to performance tracking, empower your team
                    to thrive with intuitive tools designed for efficiency and
                    success
                </SlideShowParagraph>
            </div>
            <div>
                <SlideShowNavigation
                    index={index}
                    setIndex={setIndex}
                    array={array3}
                />
            </div>
            <div className="my-16">
                <SlideShowImage context={context} />
            </div>

            <div className="mx-auto overflow-hidden px-8 md:px-12  container my-40 relative rounded-xl p-20  bg-[#FFFAEB]">
                <div className="space-y-4 relative z-[100]">
                    <div className="flex space-x-3 items-center">
                        <span className="flex items-center justify-center rounded-full bg-[#DC6803] font-extrabold text-3xl text-white w-12 h-12">
                            <span>?</span>
                        </span>
                        <Link
                            href={"/#"}
                            className="cursor-pointer border border-[#DC6803] p-2 text-[#DC6803] rounded-full px-5 font-medium"
                        >
                            <span>Knowledge Base</span>
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-[#DC6803] text-xl md:leading-[2.8rem] text-[2.4rem] font-semibold">
                            Using Loubby saves you the hurdle <br /> of jumping
                            across up to 6 different <br /> apps
                        </h1>
                    </div>
                </div>
                <Image
                    src={"/Subtract-2.png"}
                    alt=""
                    className="absolute x-10 right-4 -top-12 md:top-6 w-[70%] md:w-[25rem] md:h-[110%]"
                    width={500}
                    height={500}
                />
            </div>
        </SlideShow>
    );
};

export default SlideShow3;

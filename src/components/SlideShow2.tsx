"use client";
import React from "react";
import SlideShowHeader from "./UI/SlideShowHeader.tsx/SlideShowHeader";
import SlideShowNavigation from "./UI/SlideShowHeader.tsx/SlideShowNavigation";
import SlideShowParagraph from "./UI/SlideShowHeader.tsx/SlideShowParagraph";
import useSlideShow from "@/hooks/useSlideShowHooks";
import { array } from "@/lib/slideShow1";
import { SlideShow } from "./UI/SlideShowHeader.tsx/SlideShow";
import { SlideShowImage } from "./UI/SlideShowHeader.tsx/SlideShowImages";

const SlideShow2 = () => {
    const { index, setIndex } = useSlideShow(0, 3, 3000);
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
                <SlideShowImage index={index} />
            </div>
        </SlideShow>
    );
};

export default SlideShow2;

"use client"
import React from 'react'
import { SlideShowImage } from './UI/SlideShowHeader.tsx/SlideShowImages';
import {  SlideShowItems4 , array4 } from '@/lib/slideShow1';
import SlideShowNavigation from './UI/SlideShowHeader.tsx/SlideShowNavigation';
import Image from 'next/image';
import SlideShowHeader from './UI/SlideShowHeader.tsx/SlideShowHeader';
import SlideShowParagraph from './UI/SlideShowHeader.tsx/SlideShowParagraph';
import Link from 'next/link';
import useSlideShow from '@/hooks/useSlideShowHooks';
import { SlideShow } from './UI/SlideShowHeader.tsx/SlideShow';

const SlideShow4 = () => {
    const { index, setIndex } = useSlideShow!(0, 3, 3000);
    const context = SlideShowItems4[index];
    return (
        <SlideShow>
            <div>
                <SlideShowHeader>
                    Stay organized with powerful <br /> management tools
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
                    array={array4}
                />
            </div>
            <div className="mt-16">
                <SlideShowImage context={context} />
            </div>
            <div className="mx-auto overflow-hidden px-15 my-20 mt-40 relative rounded-xl p-20 w-[75%] bg-[#EEF4FF]">
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

export default SlideShow4
"use client";
import React from "react";
import { array } from "@/lib/slideShow1";
import Image from "next/image";
import { SlideShowItems } from "@/lib/slideShow1";
import useSlideShow from "@/hooks/useSlideShowHooks";
import { BsCheck } from "react-icons/bs";
import Link from "next/link";

const Pagination = () => {
    const { index, setIndex } = useSlideShow(0, 3, 3000);
    return (
        <div className="container mx-auto my-12">
            <div>
                <h1 className="text-5xl tracking-wide leading-[3.1rem] text-center font-semibold">
                    Streamline your <br /> talent hiring process
                </h1>
                <p className="text-center text-muted my-6 tracking-wide">
                    Find, hire and manage employees without hassle with Loubby’s
                    all-in-one software solution
                </p>
            </div>

            <nav className="mx-auto flex justify-center gap-3">
                <ul className="flex justify-center flex-wrap space-x-4 text-[#DC6803]  text-lg  py-3">
                    {array.map((text, i) => {
                        return (
                            <button
                                onClick={() => setIndex(i)}
                                style={{
                                    borderColor: array[i].color,
                                    color: array[i].color,
                                }}
                                className={`font-[500] cursor-pointer p-3 ${
                                    i == index && `border`
                                } px-9 rounded-lg`}
                                key={i + text.text}
                            >
                                <p
                                    style={{ color: array[i].color }}
                                    className="flex space-x-3 items-center"
                                >
                                    <span className="text-xl">{text.svg}</span>
                                    <span>{text.text}</span>
                                </p>
                            </button>
                        );
                    })}
                </ul>
            </nav>
            <div className="my-16">
                <SlideShowImage index={index} />
            </div>

            <div className="mx-auto overflow-hidden px-15 my-40 relative rounded-xl p-20 w-[75%] bg-lightOpacityGreen">
                <div className="space-y-4 ">
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
                    <div>
                        <h1 className="text-primaryGreen text-[2.5rem] font-semibold">
                            Types of talents on Loubby
                        </h1>
                        <div className="space-y-[0.19rem">
                            <p className="flex items-center space-x-2">
                                <span>
                                    <BsCheck className="text-primaryGreen text-2xl font-semibold" />
                                </span>
                                <span className="text-xl font-bold">
                                    Full time:{" "}
                                </span>
                                <span className="text-lg">
                                    Pay a fixed compensation monthly
                                </span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>
                                    <BsCheck className="text-primaryGreen text-2xl font-semibold" />
                                </span>
                                <span className="text-xl font-bold">
                                    Contractors:{" "}
                                </span>
                                <span className="text-lg">
                                    Make payment based on milestones
                                </span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>
                                    <BsCheck className="text-primaryGreen text-2xl font-semibold" />
                                </span>
                                <span className="text-xl font-bold">
                                    Free Lancers:{" "}
                                </span>
                                <span className="text-lg">
                                    Pay according to a calculated hourly rate
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={"/subtract-1.png"} alt="" className="absolute right-4 top-6 w-[25rem] h-[110%]" width={500} height={500}/>
            </div>
        </div>
    );
};

export const SlideShowImage = ({ index }: { index: number }) => {
    const context = SlideShowItems[index];
    return (
        <div className="flex relative items-center justify-between lg:w-[75%] mx-auto">
            <div className="w-[45%] space-y-4">
                <h1
                    style={{ color: context.color }}
                    className="font-semibold text-xl text-primaryOrange"
                >
                    {context.title}
                </h1>
                <h1 className="text-4xl w-[86%] font-semibold">
                    {context.header}
                </h1>
                <p className="text-lg">{context.body}</p>
            </div>
            <div className="relative h-auto mr-8">
                <div className="w-[30rem]">
                    <div
                        style={{ borderColor: context.color }}
                        className="h-[28rem] w-full  border-8  rounded-xl"
                    >
                        <Image
                            src={context.img}
                            alt="slideShowImage"
                            width={700}
                            height={700}
                            className="rounded-2xl h-[28rem] top-16 left-10 drop-shadow-md absolute"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;

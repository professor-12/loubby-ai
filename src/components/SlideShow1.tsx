"use client";
import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoMdListBox } from "react-icons/io";
import Image from "next/image";
import { SlideShowItems } from "@/lib/slideShow1";

const Pagination = () => {
    const [index, setIndex] = useState(0);
    const array = [
        { text: "Job Portal", color: "#DC6803", svg: <FaBriefcase /> },
        { text: "Interviews", color: "#1A73E8", svg: <BiSolidMessageDetail /> },
        { text: "Talent Pool", color: "#039855", svg: <FaBriefcase /> },
        { text: "Company Job Page", color: "#1A73E8", svg: <IoMdListBox /> },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === 3) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [index]);

    return (
        <div className="container mx-auto my-3">
            <div>
                <h1 className="text-5xl tracking-wide leading-[3.1rem] text-center font-semibold">
                    Streamline your <br /> talent hiring process
                </h1>
                <p className="text-center text-muted my-6 tracking-wide">
                    Find, hire and manage employees without hassle with Loubby’s
                    all-in-one software solution
                </p>
            </div>

            <nav className="mx-auto flex justify-center">
                <ul className="flex justify-center flex-wrap space-x-8 text-[#DC6803]  text-lg  py-3">
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
            <SlideShowImage index={index} />
        </div>
    );
};

export const SlideShowImage = ({ index }: { index: number }) => {
    const context = SlideShowItems[index];
    return (
        <div className="flex relative  my-11  items-center justify-between lg:w-[75%] mx-auto">
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

"use client";
import React from "react";
import Image from "next/image";

import { BsCheck } from "react-icons/bs";
import Link from "next/link";

export const SlideShow = ({children}:{children:React.ReactNode}) => {
  
    return (
        <div className="container mx-auto my-12">
            {children}

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
                <Image
                    src={"/subtract-1.png"}
                    alt=""
                    className="absolute right-4 top-6 w-[25rem] h-[110%]"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

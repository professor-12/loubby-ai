"use client";
import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoIosRocket } from "react-icons/io";

const Cards = () => {
    return (
        <div className="md:px-12 px-4 md:p-12 grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                onMouseMove={(event) => {
                    console.log(event.clientX, event.clientY);
                }}
                style={{ transform: "matrix(1, 0.05, 0, 1, 0, 0)" }}
                className=" space-y-3 px-8 p-6 bg-[#ECFDF3] rounded-lg"
            >
                <div className="flex">
                    <span className="bg-[#039855]  rounded-lg flex p-2">
                        <FaLightbulb className="text-3xl text-white" />
                    </span>
                </div>
                <h1 className="text-2xl font-semibold">Enhanced Visibility</h1>
                <p>
                    Stand out to employers by creating a professional candidate
                    profile, showcasing your skills, experience, and
                    achievements.
                </p>
            </div>
            <div className="text-slate-800 space-y-3 px-8 p-6 bg-[#EEF4FF] rounded-lg">
                <div className="flex">
                    <span className="bg-blue-700  rounded-lg flex p-2">
                        <HiOutlineBars2 className="text-3xl text-white" />
                    </span>
                </div>
                <h1 className="text-2xl text-slate-800 font-semibold">
                    Streamlined Process
                </h1>
                <p className="text-slate-800">
                    Simplify and track your job applications in one place. Stay
                    informed about the progress of your application with
                    potential employers efficiently.
                </p>
            </div>
            <div className="space-y-3 px-8 p-6 bg-[#FFFAEB] rounded-lg">
                <div className="flex">
                    <span className="bg-[#DC6803]  rounded-lg flex p-2">
                        <IoIosRocket className="text-3xl text-white" />
                    </span>
                </div>
                <h1 className="text-2xl font-semibold text-slate-800">
                    High Success Rate
                </h1>
                <p>
                    Feel confident and well-prepared to impress employers and
                    secure your desired job. Access valuable resources to boost
                    your interview performance.
                </p>
            </div>
        </div>
    );
};

export default Cards;

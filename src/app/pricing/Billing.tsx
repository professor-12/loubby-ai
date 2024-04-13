"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
    billingListOne,
    billingListThree,
    billingListTwo,
} from "./billinglist";

const arrayThird = [
    "Onboarding",
    "Payroll and Compliance",
    "Invoicing",
    "Timesheet Management",
    "Performance Management",
    "Record Keeping",
    "Reports and Insights",
    "Local Holidays",
    "Compliance",
    "EOR",
];
const Billing = () => {
    const [checker, setCheker] = useState(false);
    return (
        <div className="py-12">
            <div className="flex justify-center">
                <div className="flex space-x-14 items-center">
                    <div className="flex flex-col ">
                        <span className="font-semibold text-lg">Yearly</span>
                        <span className="text-green-700 tracking-tight font-semibold">
                            Up To 40% Off
                        </span>
                    </div>
                    <div onClick={() => setCheker((prev) => !prev)}>
                        <button
                            className={`bg-[#EAF3FF] cursor-pointer  transition-transform duration-200 flex p-1 rounded-full w-[4.6rem] h-auto overflow-hidden ${
                                checker ? "justify-start" : "justify-end"
                            }`}
                        >
                            <span className="rounded-full cursor-pointer p-[0.84rem] bg-[#1A73E8]" />
                        </button>
                    </div>
                    <div className="font-semibold text-lg">Monthly</div>
                </div>
            </div>
            <div className="grid mx-auto px-8 md:px-0 container md:w-[85%] gap-6 lg:grid-cols-3 grid-cols-1 py-5">
                <div className="rounded-2xl space-y-6 border py-12 px-4 hover:shadow shadow-black backdrop:shadow-2xl transition-colors duration-500">
                    <div className="text-center space-y-2">
                        <h1 className="text-lg font-semibold">Free Forever</h1>
                        <h1 className="text-5xl font-bold text-[#444CE7]">
                            Free
                        </h1>
                    </div>
                    <ul className="space-y-4 px-2 py-4">
                        {billingListOne.names.map((e, i) => (
                            <li
                                key={e + i}
                                className="flex items-center space-x-2 "
                            >
                                <FaCheck className="text-[#444CE7] text-lg" />
                                <p className="text-slate-700 font-normal">
                                    {e}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-center font-sans font-semibold text-sm">
                        Perfect freemium to try out all the <br /> features
                    </h1>
                    <button className="text-center p-2 text-lg font-bold text-white w-full mx-auto rounded-lg bg-[#444CE7]">
                        Select Plan
                    </button>
                </div>
                <div className="rounded-2xl relative overflow-hidden  space-y-6 border border-green-600 py-12 px-4 hover:shadow shadow-black backdrop:shadow-2xl transition-colors duration-500">
                    <div className="text-center space-y-2">
                        <h1 className="text-lg font-semibold">Growth Plan</h1>
                        <h1 className="space-x-2">
                            <span className="text-5xl font-bold text-[#039855]">
                                $ 79
                            </span>
                            <span className="text-lg font-semibold">
                                / Month
                            </span>
                        </h1>
                    </div>

                    <div className="bg-[#039855]  absolute text-[0.7rem] font-semibold p-1 text-white -right-14 top-2 w-48 transform rotate-[38deg] text-center">
                        RECOMMENDED
                    </div>
                    <ul className="space-y-4 px-2 py-4">
                        {billingListTwo.names.map((e, i) => (
                            <li
                                key={e + i}
                                className="flex items-center space-x-2 "
                            >
                                <FaCheck className="text-[#039855] text-lg" />
                                <p className="text-slate-700 font-normal">
                                    {e}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-center text-gray-700 font-sans font-semibold text-sm">
                        Perfect freemium to try out all the <br /> features
                    </h1>
                    <button className="text-center p-2 text-lg font-bold text-white w-full mx-auto rounded-lg bg-[#039855]">
                        Select Plan
                    </button>
                </div>
                <div className="rounded-2xl relative overflow-hidden  space-y-6 border py-12 px-4 hover:shadow shadow-black backdrop:shadow-2xl transition-colors duration-500">
                    <div className="text-center space-y-2">
                        <h1 className="text-lg font-semibold">
                            Enterprise Plan
                        </h1>
                        <h1 className="space-x-2">
                            <span className="text-5xl font-bold text-[#DC6803]">
                                $ 149
                            </span>
                            <span className="text-lg font-semibold">
                                / Month
                            </span>
                        </h1>
                    </div>
                    <ul className="space-y-4 px-2 py-4">
                        {billingListThree.names.map((e, i) => (
                            <li
                                key={e + i}
                                className="flex items-center space-x-2 "
                            >
                                <FaCheck className="text-[#DC6803] text-lg" />
                                <p className="text-slate-700 font-normal">
                                    {e}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-center text-gray-700 font-sans font-semibold text-sm">
                        Perfect freemium to try out all the <br /> features
                    </h1>
                    <button className="text-center p-2 text-lg font-bold text-white w-full mx-auto rounded-lg bg-[#DC6803]">
                        Select Plan
                    </button>
                </div>

                <div className="rounded-2xl text-gray-800  flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between  border p-8  px-7 lg:col-span-3">
                    <div className="flex-col flex justify-between">
                        <h1 className="font-semibold text-lg">
                            Talent Management
                        </h1>
                        <p className="font-semibold">
                            <span className="text-SpecialBlue text-5xl font-bold">
                                $125
                            </span>{" "}
                            /Seat per month
                        </p>
                        <p className="font-sans text-sm font-bold leading-tight">
                            Perfect for teams with focus on <br /> employee
                            management
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                        {arrayThird.map((e) => {
                            return (
                                <div
                                    key={e}
                                    className="flex text-gray-700 gap-2 items-center"
                                >
                                    <div>
                                        <FaCheck className="text-blue-600" />
                                    </div>
                                    <div>{e}</div>
                                </div>
                            );
                        })}
                    </div>

                    <button className="text-white bg-SpecialBlue justify-self-center rounded-lg flex self-center p-3 px-5 text-center">
                        Select plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Billing;

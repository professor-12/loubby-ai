import Accordion from "@/components/UI/Accordion/Accordion";
import AccordionContent from "@/components/UI/Accordion/AccordionContent";
import AccordionItem from "@/components/UI/Accordion/AccordionItem";
import AccordionTrigger from "@/components/UI/Accordion/AccordionTrigger";
import React from "react";
import {
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7,
} from "./lib/FeatureData";
import { FaCheck } from "react-icons/fa6";

const FeatureSection = () => {
    return (
        <section className="relative px-4 md:px-0">
            <div>
                <h1 className="text-SpecialBlue font-semibold text-lg text-center">
                    Compare
                </h1>
                <h1 className="md:text-4xl text-2xl font-bold text-center">
                    Compare Plans And Features
                </h1>
            </div>
            <div className="flex pr-10 bg-white sticky top-[4.6rem] justify-end mt-6 md:mt-12">
                <div className="flex  items-center md:space-x-20 space-x-3">
                    <div>
                        <h1 className="text-center font-semibold md:text-lg py-1">
                            Basic
                        </h1>
                        <button className="p-2 hidden md:flex px-4 bg-[#444CE7] text-white font-semibold rounded-lg">
                            Select Plan
                        </button>
                    </div>
                    <div className="">
                        <h1 className="text-center font-semibold md:text-lg py-1">
                            Growth
                        </h1>
                        <button className="p-2 hidden md:flex px-4 bg-[#039855] text-white font-semibold rounded-lg">
                            Select Plan
                        </button>
                    </div>
                    <div>
                        <h1 className="text-center font-semibold md:text-lg py-1">
                            Enterprise
                        </h1>
                        <button className="p-2 px-4 hidden md:flex bg-[#DC6803] text-white font-semibold rounded-lg">
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>

            <Accordion className="container lg:w-[90%] my-12">
                <AccordionItem>
                    <AccordionTrigger>Hirring Tools</AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature1.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex md:p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="md:space-x-52 gap-x-14 flex">
                                            <p>
                                                {item.basic ? (
                                                    <FaCheck className="text-blue-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.growth ? (
                                                    <FaCheck className="text-green-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.enterprise ? (
                                                    <FaCheck className="text-orange-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger>Applicant Tracking</AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature2.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex md:p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="gap-x-12 md:space-x-52 flex">
                                            <p>
                                                {item.basic ? (
                                                    <FaCheck className="text-blue-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.growth ? (
                                                    <FaCheck className="text-green-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.enterprise ? (
                                                    <FaCheck className="text-orange-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger>
                        Interviews and Assessments
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature3.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex md:p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="gap-x-12 md:space-x-52 flex">
                                            <p>
                                                {item.basic ? (
                                                    <FaCheck className="text-blue-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.growth ? (
                                                    <FaCheck className="text-green-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.enterprise ? (
                                                    <FaCheck className="text-orange-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger>Reports and Analytics</AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature4.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex md:p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="gap-x-12 md:space-x-52 flex">
                                            <p>
                                                {item.basic ? (
                                                    <FaCheck className="text-blue-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.growth ? (
                                                    <FaCheck className="text-green-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.enterprise ? (
                                                    <FaCheck className="text-orange-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger>
                        Templates and Pre-Built Tools
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature5.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex md:p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className=" gap-x-12 md:space-x-52 flex">
                                            <p>
                                                {item.basic ? (
                                                    <FaCheck className="text-blue-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.growth ? (
                                                    <FaCheck className="text-green-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.enterprise ? (
                                                    <FaCheck className="text-orange-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger>Support</AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature6.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex md:p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className=" gap-x-12 md:space-x-52 flex">
                                            <p>
                                                {item.basic ? (
                                                    <FaCheck className="text-blue-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.growth ? (
                                                    <FaCheck className="text-green-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.enterprise ? (
                                                    <FaCheck className="text-orange-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger>
                        Talent Management (HRIS)
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature7.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex md:p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm hover:text-blue-600 font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="gap-x-12 md:space-x-52 flex">
                                            <p>
                                                {item.basic ? (
                                                    <FaCheck className="text-blue-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.growth ? (
                                                    <FaCheck className="text-green-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                            <p>
                                                {item.enterprise ? (
                                                    <FaCheck className="text-orange-600 text-lg" />
                                                ) : (
                                                    "?"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
};

export default FeatureSection;

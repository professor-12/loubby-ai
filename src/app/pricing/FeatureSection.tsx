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

const FeatureSection = () => {
    return (
        <section className="relative">
            <div>
                <h1 className="text-SpecialBlue font-semibold text-lg text-center">
                    Compare
                </h1>
                <h1 className="text-4xl font-bold text-center">
                    Compare Plans And Features
                </h1>
            </div>
            <div className="flex pr-10 sticky top-[4.6rem] justify-end mt-12">
                <div className="flex items-center space-x-20">
                    <div>
                        <h1 className="text-center font-semibold text-lg py-1">
                            Basic
                        </h1>
                        <button className="p-2 px-4 bg-[#444CE7] text-white font-semibold rounded-lg">
                            Select Plan
                        </button>
                    </div>
                    <div>
                        <h1 className="text-center font-semibold text-lg py-1">
                            Growth
                        </h1>
                        <button className="p-2 px-4 bg-[#039855] text-white font-semibold rounded-lg">
                            Select Plan
                        </button>
                    </div>
                    <div>
                        <h1 className="text-center font-semibold text-lg py-1">
                            Enterprise
                        </h1>
                        <button className="p-2 px-4 bg-[#DC6803] text-white font-semibold rounded-lg">
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>

            <Accordion className="w-[90%] my-12">
                <AccordionItem>
                    <AccordionTrigger>Hirring Tools</AccordionTrigger>
                    <AccordionContent>
                        <div className="py-2 space-y-3">
                            {feature1.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="space-x-52 flex">
                                            <p>{item.basic ? "-" : "?"}</p>
                                            <p>{item.growth ? "-" : "?"}</p>
                                            <p>{item.enterprise ? "-" : "?"}</p>
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
                                        className="flex p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="space-x-52 flex">
                                            <p>{item.basic ? "-" : "?"}</p>
                                            <p>{item.growth ? "-" : "?"}</p>
                                            <p>{item.enterprise ? "-" : "?"}</p>
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
                                        className="flex p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="space-x-52 flex">
                                            <p>{item.basic ? "-" : "?"}</p>
                                            <p>{item.growth ? "-" : "?"}</p>
                                            <p>{item.enterprise ? "-" : "?"}</p>
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
                                        className="flex p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="space-x-52 flex">
                                            <p>{item.basic ? "-" : "?"}</p>
                                            <p>{item.growth ? "-" : "?"}</p>
                                            <p>{item.enterprise ? "-" : "?"}</p>
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
                                        className="flex p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="space-x-52 flex">
                                            <p>{item.basic ? "-" : "?"}</p>
                                            <p>{item.growth ? "-" : "?"}</p>
                                            <p>{item.enterprise ? "-" : "?"}</p>
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
                                        className="flex p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="space-x-52 flex">
                                            <p>{item.basic ? "-" : "?"}</p>
                                            <p>{item.growth ? "-" : "?"}</p>
                                            <p>{item.enterprise ? "-" : "?"}</p>
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
                                        className="flex p-2 border-b h-[4rem] items-center justify-between"
                                    >
                                        <h2 className="text-sm hover:text-blue-600 font-medium">
                                            {item.name}
                                        </h2>
                                        <div className="space-x-52 flex">
                                            <p>{item.basic ? "-" : "?"}</p>
                                            <p>{item.growth ? "-" : "?"}</p>
                                            <p>{item.enterprise ? "-" : "?"}</p>
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

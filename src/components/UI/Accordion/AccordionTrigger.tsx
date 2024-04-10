"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxCaretDown } from "react-icons/rx";
import { useGetValue } from "./AccordionItem";
const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
    const { expand, setExpand } = useGetValue();
    return (
        <div
            onClick={() => setExpand((prev: boolean) => !prev)}
            className="w-full cursor-pointer p-2 px-4 bg-[#F9FAFB] border-b flex justify-between items-center"
        >
            <div className={`${!expand && "hover:text-blue-800"} font-semibold`}>{children as React.ReactNode}</div>
            <motion.div animate={{ rotate: expand ? 180 : 0 }}>
                <RxCaretDown className="text-3xl font-semibold" />
            </motion.div>
        </div>
    );
};

export default AccordionTrigger;

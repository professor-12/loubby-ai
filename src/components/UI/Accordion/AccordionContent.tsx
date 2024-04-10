"use client";
import React from "react";
import { useGetValue } from "./AccordionItem";
import { AnimatePresence, motion } from "framer-motion";
const AccordionContent = ({ children }: { children: React.ReactNode }) => {
    const { expand } = useGetValue();

    return (
        <AnimatePresence>
            {expand && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto", transition: {duration:0.3} }}
                    exit={{ height: 0, transition: {duration: 0.3} }}
                    className="border-t px-3"
                >
                    {children}
                </motion.div>
            )}
            ;
        </AnimatePresence>
    );
};

export default AccordionContent;

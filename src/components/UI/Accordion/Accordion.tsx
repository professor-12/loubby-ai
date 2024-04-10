"use client"
import React from "react";
import { motion } from "framer-motion";
const Accordion = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            className={`${className}  mx-auto flex flex-col  rounded-xl overflow-hidden `}
        >
            {children}
        </motion.div>
    );
};

export default Accordion;

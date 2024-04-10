"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { motion } from "framer-motion";

const Store = createContext({ expand: true });
export const useExpand = () => {
    return useContext(Store);
};

const Card = ({ children }: { children: ReactNode }) => {
    const [expand, setExpand] = useState(false);
    return (
        <Store.Provider value={{ expand }}>
            <div
                onClick={(e) => setExpand((prev) => !prev)}
                className="border  space-y-4 cursor-pointer rounded-xl px-5 p-2 bg-white"
            >
                {children}
            </div>
        </Store.Provider>
    );
};

export const CardHeader = ({ children }: { children: ReactNode | any }) => {
    const { expand } = useExpand();
    return (
        <div className="flex items-center justify-between">
            <h1 className="font-semibold">{children}</h1>
            <motion.div animate={{ rotate: expand ? 180 : 0 }}>
                <RxCaretDown className="text-3xl font-semibold" />
            </motion.div>
        </div>
    );
};

export const CardBody = ({ children }: { children: ReactNode }) => {
    const { expand } = useExpand();
    return (
        <motion.div className="overflow-hidden">
            <motion.h1
                animate={{
                    height: expand ? "auto" : 0,
                    transition: { duration: 0.4 },
                }}
                className="text-gray-700"
            >
                {children}
            </motion.h1>
        </motion.div>
    );
};
export default Card;

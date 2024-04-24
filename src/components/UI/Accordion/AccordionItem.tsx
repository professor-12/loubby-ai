"use client";
import React, { useContext, createContext, useState } from "react";

interface initialStateType<T> {
    expand: boolean;
    setExpand: T | any;
}
const initialState = {
    expand: false,
    setExpand: () => {},
};

const Store = createContext<initialStateType<any>>(initialState);

export const useGetValue = () => {
    return useContext<initialStateType<any>>(Store);
};

const AccordionItem = ({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode => {
    const [expand, setExpand] = useState<boolean>(false);
    return (
        <Store.Provider value={{ expand, setExpand }}>
            <div className="h-auto bg-white">{children}</div>
        </Store.Provider>
    );
};

export default AccordionItem;

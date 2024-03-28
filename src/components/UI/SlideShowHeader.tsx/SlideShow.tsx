"use client";
import React from "react";

export const SlideShow = ({ children }: { children: React.ReactNode }) => {
    return <div className="container px-4 md:px-0 mx-auto my-10">{children}</div>;
};

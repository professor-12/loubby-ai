import React from "react";

const SlideShowHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1 className="lg:text-5xl text-2xl md:text-4xl tracking-wide md:leading-[3.1rem] text-center font-semibold">
                {children}
            </h1>
        </div>
    );
};

export default SlideShowHeader;

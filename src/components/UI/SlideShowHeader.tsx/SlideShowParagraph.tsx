import React from "react";

const SlideShowParagraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-center text-muted my-6 tracking-wide">
            {children as React.ReactNode}
        </p>
    );
};

export default SlideShowParagraph;

import React from "react";

const BackDrop = ({ onClick }: { onClick?: () => any }) => {
    return (
        <div
            onClick={()=> onClick && onClick()}
            className="fixed inset-0 bg-black/40"
        ></div>
    );
};
export default BackDrop;

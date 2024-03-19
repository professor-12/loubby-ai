import React from "react";

interface ButtonType {
    children?: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonType> = ({ children, className }) => {
    return (
        <button
            className={`${className}`}
        >
            <span>{children ?? "Button"}</span>
        </button>
    );
};

export default Button;

import React from "react";

interface ButtonType extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonType> = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`${className}`}
        >
            <span>{children ?? "Button"}</span>
        </button>
    );
};

export default Button;

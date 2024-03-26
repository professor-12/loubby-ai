import React from "react";

export interface SlideShowNavigationType<T = any> {
    array: { color: T; text: any }[];
    index: number;
    setIndex: (a: T) => void;
}

const SlideShowNavigation: React.FC<SlideShowNavigationType<any>> = ({
    array,
    index,

    setIndex,
}) => {
    return (
        <nav className="mx-auto flex justify-center gap-3">
            <ul className="flex justify-center flex-wrap space-x-4 text-[#DC6803]  text-lg  py-3">
                {array.map((text: any, i: number) => {
                    return (
                        <button
                            onClick={() => setIndex!(i)}
                            style={{
                                borderColor: array[i].color,
                                color: array[i].color,
                            }}
                            className={`font-[500] cursor-pointer p-3 ${
                                i == index && `border`
                            } px-9 rounded-lg`}
                            key={i + text.text}
                        >
                            <p
                                style={{ color: array[i].color }}
                                className="flex space-x-3 items-center"
                            >
                                <span className="text-xl">{text?.svg}</span>
                                <span className="hidden md:flex">{text.text}</span>
                            </p>
                        </button>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SlideShowNavigation;

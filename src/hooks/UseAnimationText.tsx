"use client";
import React, { useEffect, useState } from "react";

export type direction = "forwards" | "backwards";

const UseAnimationText = (
    listofWords: Array<string>,
    duration?: number,
    variants?: direction
) => {
    let time: NodeJS.Timeout;
    const [index, setIndex] = useState(0);
    const [Switch, setSwitch] = useState<direction>(variants ?? "forwards");
    const [nextWordIndex, setNextWordIndex] = useState(0);
    const nextWord = listofWords[nextWordIndex];
    const activeTextLength = listofWords[nextWordIndex]?.length;

    useEffect(() => {
        let time = setInterval(() => {
            if (Switch == "forwards") {
                setNextWordIndex((prev) => {
                    if (prev >= listofWords.length) return 0;
                    return prev;
                });
                if (index >= activeTextLength) {
                    return setSwitch("backwards");
                } else {
                    setIndex((prev) => {
                        return prev + 1;
                    });
                }
            } else if (Switch == "backwards") {
                if (index <= 0) {
                    setNextWordIndex((prev) => {
                        if (prev <= listofWords.length) {
                            return prev + 1;
                        }
                        return 0;
                    });
                    setSwitch("forwards");
                } else if (index <= activeTextLength && index > 0) {
                    setIndex((prev) => {
                        return prev - 1;
                    });
                }
            }
        }, duration || 150);
        return () => {
            clearInterval(time);
        };
    }, [Switch, activeTextLength, index, listofWords.length, duration]);

    return { nextWord, index };
};

export default UseAnimationText;

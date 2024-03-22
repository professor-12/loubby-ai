"use client";

import { useEffect, useState } from "react";

export default function useSlideShow(
    start: number,
    stop: number,
    duration: number
) {
    const [index, setIndex] = useState(start);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === stop) {
                    return start;
                } else {
                    return prev + 1;
                }
            });
        }, duration);

        return () => {
            clearInterval(interval);
        };
    }, [stop, duration, start]);

    return { index, setIndex };
}

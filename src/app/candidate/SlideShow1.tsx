import React from "react";
import { SlideShowList1 } from "./lib/slideShowList";
import { PiCheckBold } from "react-icons/pi";
import Image from "next/image";

const SlideShow1 = () => {
    return (
        <div className="flex justify-between space-x-12 my-12 items-center">
            <div className="md:flex md:space-y-5 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto mr-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] h-[20rem] border-blue-600 mr-12  md:w-full  border-8  rounded-xl">
                            <Image
                                src={"/Main-wrap.png"}
                                alt="slideShowImage"
                                width={700}
                                height={700}
                                className="rounded-2xl  xl:h-[28rem] h-[20rem] top-16 left-10 drop-shadow-md absolute"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-SpecialBlue text-lg font-semibold">
                    Job Discovery
                </h1>
                <p className="text-4xl font-semibold">
                    Discover Exciting Opportunities with Ease
                </p>
                <p className="text-lg">
                    With a user-friendly interface and advanced search
                    capabilities, candidates can easily navigate through job
                    listings, filter based on preferences, and discover relevant
                    positions tailored to their skills and aspirations.
                </p>
                <div className="grid gap-3 grid-cols-2">
                    {SlideShowList1.map((item) => (
                        <div
                            key={item}
                            className="space-x-2 items-center  flex"
                        >
                            <span>
                                <PiCheckBold className="text-blue-700 text-2xl  font-extrabold" />
                            </span>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow1;

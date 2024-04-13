import Image from "next/image";
import React from "react";
import { PiCheckBold } from "react-icons/pi";

const slideShow = [
    "Advanced Search",
    "Comprehensive Profiles",
    "Recommendations",
    "Talent Ratings",
    "Contact and Collaboration",
    "Real-time Availability",
];
const SlideShow3 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between px-4 md:space-x-12 my-12 md:my-20 items-center">
            <div className="md:flex md:space-y-5 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto mr-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] h-[20rem] border-primaryGreen mr-12  w-full  border-8  rounded-xl">
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
            <div className="space-y-4  mt-28 md:mt-0">
                <h1 className="text-primaryGreen text-lg font-semibold">
                    In-App Messaging
                </h1>
                <p className="text-2xl md:text-4xl font-semibold">
                    Easily communicate and collaborate with your team
                </p>
                <p className="md:text-lg">
                    Loubby’s Talent Directory is a comprehensive and extensive
                    database of talented professionals, empowering you to
                    discover and connect with top-notch candidates across
                    various industries and domains. With Loubby, finding the
                    right talent has never been easier.
                </p>
                <div className="grid md:gap-3 gap-2 md:grid-cols-2">
                    {slideShow.map((item: any) => (
                        <div
                            key={item}
                            className="space-x-2 items-center  flex"
                        >
                            <span>
                                <PiCheckBold className="text-primaryGreen text-2xl  font-extrabold" />
                            </span>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow3;

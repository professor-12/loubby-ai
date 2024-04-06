import Image from "next/image";
import React from "react";
import { SlideShowList1 } from "./lib/slideShowList";
import { PiCheckBold } from "react-icons/pi";

const SlideShow3 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between px-4 md:space-x-12 my-12 items-center">
            <div className="md:flex md:space-y-5 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto mr-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] h-[20rem] border-orange-600 mr-12  md:w-full  border-8  rounded-xl">
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
                <h1 className="text-orange-600 text-lg font-semibold">
                    Application Tracking
                </h1>
                <p className="text-3xl md:text-4xl font-semibold">
                    Stay Informed Throughout the Application Process
                </p>
                <p className="md:text-lg">
                    With Loubby’s application tracking feature, candidates can
                    effortlessly track the progress of their job applications in
                    real-time. Stay informed about the status of your
                    applications, receive notifications for interview requests,
                    and track each stage of the hiring process.
                </p>
                <div className="grid gap-3 grid-cols-2">
                    {SlideShowList1.map((item) => (
                        <div
                            key={item}
                            className="space-x-2 items-center  flex"
                        >
                            <span>
                                <PiCheckBold className="text-orange-700 text-2xl  font-extrabold" />
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

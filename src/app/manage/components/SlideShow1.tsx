import React from "react";
import { PiCheckBold } from "react-icons/pi";
import Image from "next/image";

const slideShow = [
    "Event Creation",
    "Scheduling Link",
    "Automated Reminders",
    "Calendar Sync",
    "Real-time Availability",
    "Time Zone Adjustment",
];
const SlideShow1 = () => {
    return (
        <div
            id="job-portal"
            className="flex px-4 flex-col lg:flex-row justify-between md:space-x-12 mt-12 items-center"
        >
            <div className="md:flex md:space-y-5 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto mr-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] w-full h-[20rem] border-SpecialBlue mr-12    border-8  rounded-xl">
                            <Image
                                src={"/Main-wrap.png"}
                                alt="slideShowImage"
                                width={700}
                                height={700}
                                className="rounded-2xl  xl:h-[28rem] h-[19rem] top-16 left-10 drop-shadow-md absolute"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-5 mt-16 md:mt-0">
                <h1 className="text-SpecialBlue text-lg font-semibold">
                    Schedule/Calendar{" "}
                </h1>
                <p className="md:text-4xl text-2xl font-semibold">
                    Efficient Schedule and Calendar Management
                </p>
                <p className="md:text-lg">
                    With an integrated calendar system, you can easily schedule
                    interviews, meetings, and other important events,
                    eliminating scheduling conflicts and improving overall
                    productivity.
                </p>
                <div className="grid md:gap-3 gap-2 md:grid-cols-2">
                    {slideShow.map((item) => (
                        <div
                            key={item}
                            className="space-x-2 items-center  flex"
                        >
                            <span>
                                <PiCheckBold className="text-SpecialBlue text-2xl  font-extrabold" />
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

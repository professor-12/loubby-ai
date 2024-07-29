import React from "react";
import Image from "next/image";
import { PiCheckBold } from "react-icons/pi";

const slideShow = [
    "User Roles",
    "Customizable Permission",
    "Team Delegation",
    "Activity Logs",
    "Multi-level Approval",
    "Access Control",
];
const SlideShow2 = () => {
    return (
        <div
            id="real-time-interview"
            className="flex px-4 flex-col lg:flex-row-reverse justify-between md:space-x-12 mt-36  items-center"
        >
            <div className="md:flex md:space-y-5 pr-10 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto lg:ml-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] h-[20rem] border-primaryGreen mr-12 w-full  border-8  rounded-xl">
                            <Image
                                src={"/Profile-card-2.png"}
                                alt="slideShowImage"
                                width={700}
                                height={700}
                                className="rounded-2xl  xl:h-[28rem] h-[20rem] top-16 left-10 drop-shadow-md absolute"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-3 mt-20 md:my-0">
                <h1 className="text-primaryGreen text-lg font-semibold">
                    Approval/Hierarchy
                </h1>
                <p className="text-2xl md:text-4xl font-semibold">
                    Streamlined Approval Processes with Hierarchical Control
                </p>
                <p className="md:text-lg">
                    Easily assign tasks, delegate responsibilities, and track
                    approval statuses within the system. With customizable
                    permission settings and a multi-level approval workflow, you
                    can establish clear decision-making hierarchies and ensure
                    smooth collaboration across teams.
                </p>
                <div className="grid md:gap-3 gap-2 md:grid-cols-2 p-2">
                    {slideShow.map((item) => (
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

export default SlideShow2;

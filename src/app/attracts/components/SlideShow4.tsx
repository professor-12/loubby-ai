import Image from "next/image";
import React from "react";
import { PiCheckBold } from "react-icons/pi";

const slideShow = [
    "Branding and Customization",
    "Company Descriptions",
    "Job Listings",
    "Rich Media Content",
    "Social Proof",
    "Employee Benefits and Perks",
];
const SlideShow4 = () => {
    return (
        <div
            id="talent-pool"
            className="flex  px-4 md:px-0 flex-col md:flex-row-reverse justify-between md:space-x-12  md:my-36 items-center"
        >
            <div className="md:flex md:space-y-5 pr-10 space-y-9 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
                <div className="relative h-auto lg:ml-8">
                    <div className="lg:w-[30rem] w-full md:w-[26rem]">
                        <div className="lg:h-[28rem] h-[20rem] border-primaryOrange w-full  border-8  rounded-xl">
                            <Image
                                src={"/Container.png"}
                                alt="slideShowImage"
                                width={700}
                                height={700}
                                className="rounded-2xl  xl:h-[28rem] h-[20rem] top-16 left-10 drop-shadow-md absolute"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-3 my-32 md:my-0">
                <h1 className="text-primaryOrange text-lg font-semibold">
                    Company Job Page
                </h1>
                <p className="md:text-4xl text-2xl font-semibold">
                    Create a catchy company job page to attract top talent
                </p>
                <p className="md:text-lg">
                    Loubby’s Company Job Page feature enables you to create an
                    informative job page that showcases your company’s culture,
                    values, and job opportunities. With customizable design
                    options and rich content, you can effectively attract top
                    talent and provide candidates with a comprehensive overview
                    of your organization.
                </p>
                <div className="grid md:gap-3 gap-2 md:grid-cols-2 p-2">
                    {slideShow.map((item) => (
                        <div
                            key={item}
                            className="space-x-2 items-center  flex"
                        >
                            <span>
                                <PiCheckBold className="text-primaryOrange text-2xl  font-extrabold" />
                            </span>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow4;

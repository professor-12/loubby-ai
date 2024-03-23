import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="bg-[rgb(249,250,251)] pb-16  relative">
            <div className="absolute -top-24 bg-heroBg bg-no-repeat z-10  w-full h-full" />
            <div className="z-30 mt-20 mb-5 space-y-5 pt-20 relative">
                <h1 className="text-center text-6xl font-bold leading-[4.4rem]">
                    Effortlessly Hire and Manage <br /> Remote{" "}
                    <span className="text-primaryBlue">
                        Talent from Africa{" "}
                    </span>
                    with AI
                </h1>
                <p className="text-center text-xl text-black/80 font-light  tracking-wide">
                    All-in-one solution to hire, manage and retain talents
                    globally. Free ATS, talent marketplace,
                    <br /> onboarding, payment & compliance, EOR and HR tools
                    for your remote contractors and employees.
                </p>
            </div>
            <div className="flex my-7 justify-center">
                <button className="bg-primaryBlue hover:bg-blue-700 text-white font-semibold p-3 px-6 rounded-lg">
                    Try Loubby For Free
                </button>
            </div>

            <div className="flex items-center relative z-50 justify-center">
                <Image
                    src={"/DashBoard.png"}
                    alt="HeroImageDashBoard"
                    className="drop-shadow-2xl rounded-xl"
                    width={1100}
                    height={100}
                />
            </div>
        </div>
    );
};

export default HeroSection;

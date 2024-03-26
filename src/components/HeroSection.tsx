import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="bg-[rgb(249,250,251)]  px-4 md:px-0 relative mx-auto">
            <div className="absolute -top-24 bg-heroBg bg-no-repeat z-10  w-full h-full" />
            <div className="z-30 md:mt-20 mt-12 mb-5 space-y-5 pt-20 relative">
                <h1 className="text-center lg:text-6xl text-4xl md:text-5xl font-bold xl:leading-[4.4rem]">
                    Effortlessly Hire and Manage <br /> Remote{" "}
                    <span className="text-primaryBlue">
                        Talent from Africa{" "}
                    </span>
                    with AI
                </h1>
                <p className="text-center text-sm md:text-lg lg:text-xl text-black/80 font-light  tracking-wide">
                    ATS, talent marketplace, onboarding, payment & compliance,
                    EOR and HR operations all-in-one for <br /> your remote
                    contractors, freelancers and employees.
                </p>
            </div>
            <div className="flex my-7 relative justify-center">
                <button className="bg-primaryBlue relative z-40 hover:bg-blue-700 text-white font-semibold p-3 px-6 rounded-lg">
                    Try Loubby For Free
                </button>
            </div>

            <div className="flex items-center relative z-50 px-6 md:px-0 justify-center">
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

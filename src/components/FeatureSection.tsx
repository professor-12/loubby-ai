import Image from "next/image";
import React from "react";

const FeatureSection = () => {
    return (
        <div className="container drop-shadow-2xl px-4 md:px-0 py-12  mx-auto xl:w-[75%]">
            <div className="space-y-12">
                <h1 className="text-center font-bold text-2xl md:text-4xl">
                    Featured In the Media
                </h1>
                <div className="flex  overflow-hidden flex-wrap space-x-5 lg:justify-between justify-center">
                    <Image
                        className="f"
                        src={"/Yahoo-Finance-5.png"}
                        alt=""
                        width={120}
                        height={50}
                    />
                    <Image
                        className="f"
                        src={"/Bloomberg-1.png"}
                        alt=""
                        width={120}
                        height={50}
                    />
                    <Image
                        className="f"
                        src={"/Benziga-1.png"}
                        alt=""
                        width={120}
                        height={50}
                    />
                    <Image
                        className=""
                        src={"/MarketWatch-1.png"}
                        alt=""
                        width={120}
                        height={10}
                    />
                    <Image src={"/NYT-1.png"} alt="" width={150} height={150} />
                    <Image
                        src={"/Digital-Journal-1.png"}
                        alt=""
                        width={120}
                        height={50}
                    />
                </div>
            </div>

            <div className="animategradient bg-no-repeat  my-32 flex relative overflow-hidden  items-center  justify-between rounded-3xl  md:p-12 p-5 md:py-24">
                <div className="bg-opacity-15  inset-0 bg-no-repeat -top-40  absolute bg-gradientBg" />
                <div className="relative space-y-3">
                    <h1 className="md:text-5xl text-2xl font-semibold leading-[1.4] text-white">
                        Ready to take your hiring to the <br /> next level?
                    </h1>
                    <p className="md:text-lg text-white font-semibold">
                        Sign up for Loubby now! and enjoy hiring at it’s best
                    </p>
                </div>
                <div className="bg-white md:p-4 p-2 md:px-6 rounded-xl text-black text-center flex items-center justify-center font-medium">
                    Get Started
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;

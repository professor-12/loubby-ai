import Image from "next/image";
import React from "react";

const FeatureSection = () => {
    return (
        <div className="container drop-shadow-2xl px-4 md:px-0 py-12  mx-auto xl:w-[75%]">
            <div className="space-y-12">
                <h1 className="text-center font-bold text-2xl md:text-4xl">
                    Featured In the Media
                </h1>
                <div className="flex gap-6 md:gap-0  overflow-hidden flex-wrap space-x-5 lg:justify-between justify-center">
                    <Image
                        src={"/Yahoo-Finance-5.png"}
                        alt=""
                        width={120}
                        height={50}
                    />
                    <Image
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

            
        </div>
    );
};

export default FeatureSection;

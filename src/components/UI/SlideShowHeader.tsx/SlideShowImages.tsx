"use client";
import Image from "next/image";

export const SlideShowImage = ({ context }: { context: any }) => {
    return (
        <div className="md:flex space-y-5 relative px-4 items-center justify-between w-full xl:w-[75%] mx-auto">
            <div className="md:w-[45%] space-y-4">
                <h1
                    style={{ color: context?.color }}
                    className="font-semibold text-lg md:text-xl text-primaryOrange"
                >
                    {context?.title}
                </h1>
                <h1 className="lg:text-4xl text-2xl w-[86%] font-semibold">
                    {context?.header}
                </h1>
                <p className="md:text-lg">{context?.body}</p>
            </div>
            <div className="relative h-auto mr-8">
                <div className="lg:w-[30rem] w-[26rem]">
                    <div
                        style={{ borderColor: context?.color }}
                        className="lg:h-[28rem] h-[24rem] md:h-[20rem]  md:w-full  border-8  rounded-xl"
                    >
                        <Image
                            src={context?.img}
                            alt="slideShowImage"
                            width={700}
                            height={700}
                            className="rounded-2xl  xl:h-[28rem] h-[24rem] md:h-[20rem] top-16 left-10 drop-shadow-md absolute"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

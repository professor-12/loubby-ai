"use client"
import Image from "next/image";

export const SlideShowImage = ({ context }: { context: any }) => {
 
    return (
        <div className="flex relative items-center justify-between lg:w-[75%] mx-auto">
            <div className="w-[45%] space-y-4">
                <h1
                    style={{ color: context?.color }}
                    className="font-semibold text-xl text-primaryOrange"
                >
                    {context?.title}
                </h1>
                <h1 className="text-4xl w-[86%] font-semibold">
                    {context?.header}
                </h1>
                <p className="text-lg">{context?.body}</p>
            </div>
            <div className="relative h-auto mr-8">
                <div className="w-[30rem]">
                    <div
                        style={{ borderColor: context?.color }}
                        className="h-[28rem] w-full  border-8  rounded-xl"
                    >
                        <Image
                            src={context?.img}
                            alt="slideShowImage"
                            width={700}
                            height={700}
                            className="rounded-2xl h-[28rem] top-16 left-10 drop-shadow-md absolute"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

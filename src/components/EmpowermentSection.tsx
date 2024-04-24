import Image from "next/image";
import React from "react";

const EmpowermentSection = () => {
    return (
        <div className="mx-auto my-12 xl:w-[75%] px-4 container">
            <div className="space-y-4">
                <h2 className="text-lg text-center text-[#1A73EC] font-semibold">
                    For candidates
                </h2>
                <h1 className="lg:text-5xl text-2xl md:text-3xl text-center font-bold">
                    Empower Your Job Search with Loubby&apos;s <br />{" "}
                    Candidate-Centric Features
                </h1>
                <p className="text-center md:text-lg py-1">
                    Unlock a seamless and empowering job search experience with
                    Loubby’s comprehensive features tailored for candidates.
                </p>
            </div>
            {/* {Grid section} */}
            <div className="grid md:grid-cols-5 gap-7 py-5 ">
                <div className="md:col-span-3 space-y-3  min-h-[12rem] rounded-xl p-8 border-[#D0D5DD]  border-8">
                    <div>
                        <Image
                            src={"/Frame-446.png"}
                            alt=""
                            width={1000}
                            height={800}
                            className="object-fill w-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-center font-semibold text-2xl">
                            Job Discovery
                        </h1>
                        <p className="text-center py-1">
                            With a user-friendly interface and advanced search
                            capabilities, candidates can easily navigate through
                            job listings, filter based on preferences, and
                            discover relevant positions tailored to their skills
                            and aspirations.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-2 space-y-4 p-8 rounded-xl border-[#D0D5DD]  border-8">
                    <div className="border rounded-lg p-4">
                        <Image
                            src={"/Section-3.png"}
                            alt=""
                            width={1000}
                            height={1000}
                            className="object-fill w-full"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-center font-semibold text-2xl">
                            Job Search Tips and Insights
                        </h1>
                        <p className="text-center py-1">
                            From crafting effective cover letters to acing
                            interviews, candidates gain access to expert advice,
                            valuable resources, and practical tips to boost
                            their confidence and stand out in the competitive
                            job market.
                        </p>
                    </div>
                </div>
                <div className="rounded-xl p-8 md:col-span-2  space-y-5 border-[#D0D5DD]  border-8">
                    <div className="border rounded-lg p-4">
                        <Image
                            src={"/Section-4.png"}
                            alt=""
                            width={1000}
                            height={800}
                            className="object-fill w-full"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-center font-semibold text-2xl">
                            Smart Job Recommendations
                        </h1>
                        <p className="text-center py-1">
                            By curating a tailored list of relevant job
                            opportunities, candidates can effortlessly discover
                            positions that align with their aspirations, saving
                            time and effort in their job search.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-3 rounded-xl p-8 space-y-4  border-[#D0D5DD]  border-8">
                    <div className="rounded-lg p-4">
                        <Image
                            src={"/Container-5-1024x619.png"}
                            alt=""
                            width={1000}
                            height={800}
                            className="object-fill w-full"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-center font-semibold text-2xl">
                            AI-Powered Resume Tailoring
                        </h1>
                        <p className="text-center py-1">
                            Generative AI technology assists candidates in
                            tailoring their resumes to match specific job
                            postings. By analyzing job requirements and
                            candidate profiles, the AI suggests personalized
                            improvements for greater job match accuracy and
                            increased chances of success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpowermentSection;

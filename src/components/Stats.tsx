import React from "react";

const Stats = () => {
    return (
        <div className="py-16 space-y-10">
            <h1 className="lg:text-4xl text-2xl font-semibold text-center">
                Behind every successful company is a <br /> perfect hire for the
                perfect role
            </h1>

            <div className="grid xl:w-[80%] mx-auto md:px-8 p-5 grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                <div className="text-center space-y-5">
                    <h1 className="md:text-6xl text-5xl text-SpecialBlue font-bold">
                        25k+
                    </h1>

                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold">
                            Active Job Seeking
                        </h3>
                        <p>
                            Loubby has over 10k active job seekers registered on
                            the platform
                        </p>
                    </div>
                </div>
                <div className="text-center space-y-5">
                    <h1 className="md:text-6xl text-5xl text-SpecialBlue font-bold">
                        80%
                    </h1>

                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold">
                            Reduction in Time to Hire
                        </h3>
                        <p>
                            Our platform has saved over 75% of the total time
                            spent on interviews
                        </p>
                    </div>
                </div>
                <div className="text-center space-y-5">
                    <h1 className="md:text-6xl text-5xl text-SpecialBlue font-bold">
                        150
                    </h1>

                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold">
                            Companies using Loubby
                        </h3>
                        <p>
                            From startups to Big Tech, over 75 companies trust
                            Loubby
                        </p>
                    </div>
                </div>
                <div className="text-center space-y-5">
                    <h1 className="md:text-6xl text-5xl text-SpecialBlue font-bold">
                        5x
                    </h1>
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold">
                            Faster Onboarding
                        </h3>

                        <p>
                            Experience easy hiring processes that are five times
                            faster with Loubby.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;

import React from "react";
import Card, { CardBody, CardHeader } from "./Card";

const FAQ = () => {
    return (
        <div className="my-16 px-4 bg-[rgb(249,250,251)] py-16">
            <div className="container space-y-8 lg:w-[70%] mx-auto">
                <div className="text-center space-y-3">
                    <h1 className="text-blue-600 font-semibold">
                        Frequently asked Questions
                    </h1>
                    <h2 className="lg:text-4xl text-2xl  font-bold ">
                        Frequently Asked Questions about <br className="hidden md:block"/> Loubby&apos;s
                        Features and How They Work
                    </h2>
                </div>

                <div className="lg:w-[70%] space-y-5 py-4 mx-auto container">
                    <Card>
                        <CardHeader>
                            What is Loubby and how can it benefit my
                            organization?What is Loubby and how can it benefit
                            my organization?
                        </CardHeader>

                        <CardBody>
                            Loubby is an employee-employer relationship
                            management software designed to simplify the hiring
                            process, streamline talent management, and enhance
                            collaboration. It benefits organizations by offering
                            tools to find, hire, and manage employees
                            efficiently while providing valuable insights.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Is there a free trial available?
                        </CardHeader>

                        <CardBody>
                            Yes, Loubby offers a 30-day free trial, allowing you
                            to explore its features and benefits risk-free.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Are there any additional costs or fees associated
                            with using Loubby&apos;s platform?
                        </CardHeader>

                        <CardBody>
                            Loubby’s pricing is transparent, and there are no
                            hidden costs or fees. However, additional services
                            or add-ons may be available for specific
                            customization or advanced features.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Can I change my pricing plan or cancel my
                            subscription at any time?
                        </CardHeader>

                        <CardBody>
                            Yes, you have the flexibility to upgrade, downgrade,
                            or cancel your subscription at any time. Changes in
                            your subscription plan will reflect in your billing
                            accordingly, either immediately or at the end of
                            your current billing cycle.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Can I manage employee payroll and onboarding with
                            Loubby?
                        </CardHeader>

                        <CardBody>
                            Yes, Loubby offers features to streamline employee
                            payroll management and onboarding, ensuring a smooth
                            and efficient process for managing your workforce.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Can I post job listings on Loubby?
                        </CardHeader>

                        <CardBody>
                            Yes, Loubby offers a Job Listing Portal where you
                            can easily create and manage job listings,
                            attracting potential candidates effortlessly.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            How can Loubby help me find the right talent for my
                            company?
                        </CardHeader>

                        <CardBody>
                            How can Loubby help me find the right talent for my
                            company?
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>Is my data secure on Loubby?</CardHeader>

                        <CardBody>
                            Yes, Loubby prioritizes data security, employing
                            industry-standard measures like encryption and
                            access controls to safeguard your data.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Can I post job listings on Loubby?
                        </CardHeader>

                        <CardBody>
                            Yes, Loubby offers a Job Listing Portal where you
                            can easily create and manage job listings,
                            attracting potential candidates effortlessly.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Can I customize my company&apos;s job application
                            pages on Loubby?
                        </CardHeader>

                        <CardBody>
                            Absolutely! Loubby allows you to create and
                            customize job application pages, providing a unique
                            and branded experience for candidates.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            How does Loubby handle the interview process?
                        </CardHeader>

                        <CardBody>
                            Loubby offers interview scheduling, communication
                            tools, and collaborative features to streamline
                            candidate interactions, making the process efficient
                            and effective.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            Can Loubby support multiple users within my
                            organization?
                        </CardHeader>

                        <CardBody>
                            Absolutely! Loubby offers an active hierarchical
                            system with approval and permission settings,
                            allowing you to set up teams with multiple users and
                            manage access control.
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

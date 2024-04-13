"use client";
import { links } from "@/lib/footerlistLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container  lg:w-[75%] px-4 md:px-0  md:mx-auto">
                <div className="animategradient  bg-no-repeat md:my-32 flex flex-col md:flex-row space-y-3 md:space-y-0 relative overflow-hidden  items-start md:items-center  justify-between rounded-3xl  md:p-12 p-5 md:py-24">
                    <div className="bg-opacity-15  inset-0 bg-no-repeat -top-40  absolute bg-gradientBg" />
                    <div className="relative space-y-3">
                        <h1 className="md:text-5xl text-2xl font-semibold leading-[1.4] text-white">
                            Ready to take your hiring to the <br /> next level?
                        </h1>
                        <p className="md:text-lg text-white font-semibold">
                            Sign up for Loubby now! and enjoy hiring at it’s
                            best
                        </p>
                    </div>
                    <div className="bg-white p-4 px-6 rounded-xl text-black text-center flex items-center justify-center font-medium">
                        Get Started
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-0 xl:w-[75%]">
                <div className="flex  flex-col md:flex-row  gap-12 md:gap-40 py-12 mb-12 ">
                    <div className="md:space-y-8">
                        <Link href={"/"}>
                            <Image
                                src={"/Logo.svg"}
                                alt="Logo"
                                width={120}
                                height={100}
                            />
                        </Link>
                        <p>
                            All-in-one hiring solution for remote African
                            talents
                        </p>
                    </div>
                    <div className="flex flex-col justify-center space-y-4  text-center md:text-start md:space-y-0 md:items-start lg:flex-row md:justify-between md:flex-row  flex-1">
                        <div>
                            <div className="font-semibold py-1">Product</div>
                            <ul className="space-y-3">
                                {links[0]!.products?.map((item) => {
                                    return (
                                        <li className="text-sm" key={item.name}>
                                            {item.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold py-1">Company</div>
                            <ul className="space-y-3">
                                {links[1]!.Company?.map((item) => {
                                    return (
                                        <li className="text-sm" key={item.name}>
                                            {item.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold py-1">Resources</div>
                            <ul className="space-y-3">
                                {links[2]!.Resources?.map((item) => {
                                    return (
                                        <li className="text-sm" key={item.name}>
                                            {item.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold py-1">Legal</div>
                            <ul className="space-y-3">
                                {links[3]!.Legal?.map((item) => {
                                    return (
                                        <li className="text-sm" key={item.name}>
                                            {item.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-t h-[.2rem]" />
                    <div className="md:flex px-2 md:px-0 space-y-5 md:space-y-0 py-8 justify-between">
                        <div>&copy; 2023 Loubby AI</div>
                        <div className="flex  space-x-3 md:space-x-8">
                            <Link href={"/"}>
                                <FaFacebook className="text-2xl text-[#3081EA] " />
                            </Link>
                            <Link href={"/"}>
                                <FaLinkedin className="text-2xl text-[#3081EA] " />
                            </Link>
                            <Link href={"/"}>
                                <FaInstagram className="text-2xl text-[#3081EA] " />
                            </Link>
                            <Link href={"/"}>
                                <FaYoutube className="text-2xl text-[#3081EA] " />
                            </Link>
                            <Link href={"/"}>
                                <FaTwitter className="text-2xl text-[#3081EA] " />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

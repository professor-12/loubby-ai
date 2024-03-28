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
                    <p>All-in-one hiring solution for remote African talents</p>
                </div>
                <div className="flex flex-wrap  text-center md:text-start space-y-8 md:space-y-0 md:items-start lg:flex-row justify-between flex-1">
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
    );
};

export default Footer;

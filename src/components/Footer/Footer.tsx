"use client";
import { links } from "@/lib/footerlistLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    console.log(Object.keys(links))
    return (
        <div className="flex container py-12 mb-12 mx-auto xl:w-[75%]">
            <div className="space-y-8">
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
            <div>
                <ul>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;

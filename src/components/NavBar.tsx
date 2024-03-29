"use client";
import Button from "@/utils/Button";

import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import BackDrop from "./UI/BackDrop";

import { IoMenu } from "react-icons/io5";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(!true);
    return (
        <header className="bg-white z-[10000]  left-0 right-0 shadow-inner  fixed  top-0  h-[5.25rem] flex items-center">
            <div className="container px-2 lg:px-0 bg-white items-center mx-auto xl:w-[75%] flex justify-between">
                <div className="flex w-full md:w-auto justify-between md:justify-start  bg-white gap-8 items-center">
                    <Link href={"/"}>
                        <Image
                            src={"/Logo.svg"}
                            alt="Logo"
                            width={120}
                            height={100}
                        />
                    </Link>
                    <nav className="hidden lg:flex">
                        <ul className="flex space-x-6 xl:space-x-8">
                            <Link href="/">Home</Link>
                            <Link href="/product" className="flex items-center">
                                <span>Products</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </Link>
                            <Link href="/candidate">Candidate</Link>
                            <Link href={"/pricing"}>Pricing</Link>
                            <Link
                                href={"/resources"}
                                className="flex items-center"
                            >
                                <span>Resources</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </Link>
                        </ul>
                    </nav>
                    <IoMenu
                        className="lg:hidden cursor-pointer text-3xl"
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                    {/* Small Screen */}
                    <nav
                        className="fixed lg:hidden hidden md:block transition-all duration-500 top-0 bottom-0 min-w-[40%] z-[100000] bg-white"
                        style={{ left: isOpen ? 0 : -1000 }}
                    >
                        <div className="flex justify-end p-4">
                            <IoClose
                                className="text-3xl font-bold self-end cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>

                        <ul className="space-y-8 my-12 p-4">
                            <Link href={"/home"}>Home</Link>

                            <Link href={"/"} className="flex items-center">
                                <span>Products</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </Link>
                            <Link href="/candidate">Candidate</Link>
                            <Link href={"/pricing"}>Pricing</Link>
                            <Link
                                href={"/resources"}
                                className="flex items-center"
                            >
                                <span>Resources</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </Link>
                        </ul>
                    </nav>
                    {/* { smaller devices} */}
                    <nav
                        className="fixed md:hidden  mx-1  transition-all duration-500 top-0 right-0 left-0 min-h-screen z-[100000] bg-white"
                        style={{ top: isOpen ? 88 : -100000 }}
                    >
                        <ul className="space-y-12 my-12 p-3">
                            <Link href={"/home"}>Home</Link>
                            <Link
                                href={"/products"}
                                className="flex items-center"
                            >
                                <span>Products</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </Link>
                            <Link href={"/"}>Candidate</Link>
                            <Link href={"/"}>Pricing</Link>
                            <Link href={"/"} className="flex items-center">
                                <span>Resources</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </Link>
                        </ul>

                        <div className="space-y-4">
                            <button className="bg-[#EAF3FF] text-[#1A73E8] text-center w-full p-3 rounded-xl">
                                Login
                            </button>
                            <button className="bg-[#1A73E8] text-white text-center w-full p-3 rounded-xl">
                                Get Started
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="lg:hidden hidden md:flex">
                    {isOpen && <BackDrop onClick={() => setIsOpen(false)} />}
                </div>

                <div className="space-x-2 hidden md:flex">
                    <Button className="bg-lightOpacityBlue  text-blue-800 font-semibold px-5 rounded-lg p-3">
                        Sign up/Login
                    </Button>
                    <Button className="bg-primaryBlue  text-white font-semibold px-5 rounded-lg p-3">
                        Book a Demo
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;

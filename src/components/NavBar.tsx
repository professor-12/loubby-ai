import Button from "@/utils/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCaretDown } from "react-icons/rx";

const NavBar = () => {
    return (
        <header className="bg-white z-[10000] left-0 right-0 shadow-inner  fixed w-full top-0  h-[5.25rem] flex items-center">
            <div className="container bg-white items-center mx-auto xl:w-[75%] flex justify-between">
                <div className="flex bg-white gap-8 items-center">
                    <Link href={"/"}>
                        <Image
                            src={"/Logo.svg"}
                            alt="Logo"
                            width={120}
                            height={100}
                        />
                    </Link>
                    <nav>
                        <ul className="flex space-x-8">
                            <li>Home</li>
                            <li className="flex items-center">
                                <span>Products</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </li>
                            <li>Candidate</li>
                            <li>Pricing</li>
                            <li className="flex items-center">
                                <span>Resources</span>{" "}
                                <span>
                                    <RxCaretDown className="text-2xl" />
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="space-x-2">
                    <Button className="bg-lightOpacityBlue  text-blue-800 font-semibold px-5 rounded-lg p-3">
                        Login
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

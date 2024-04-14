"use client";
import Button from "@/utils/Button";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import BackDrop from "./UI/BackDrop";
import { IoBookSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { LiaBoxesSolid } from "react-icons/lia";
import { FaPenFancy } from "react-icons/fa";
import { GrRobot } from "react-icons/gr";
import { FiPlayCircle } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { employee_management, productLinks } from "@/lib/productslinkslist";
import { NavLinks } from "@/lib/NavLinks";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";






const navLinkProducts = [
    { name: "assess", link: "" },
    { name: "hiring", link: "" },
    { name: "attract", link: "" },
    { name: "manage", link: "" },
    
]




const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openProductDropDown, setOpenProductDropDown] = useState(false);
    const navigate = useRouter();
    const active = usePathname();
    const [visible, setVisible] = useState<"a" | "b" | "c">("a");
    return (
        <header className="bg-white z-[10000] mb-42 left-0 right-0 shadow-inner  fixed  top-0  h-[5.25rem] flex items-center">
            <div className="container px-2 lg:px-0 bg-white items-center mx-auto xl:w-[75%] flex justify-between">
                <div className="flex w-full md:w-auto justify-between md:justify-start  bg-white gap-8 items-center">
                    <Link href={"/"}>
                        <Image
                            className="w-[80%] md:w-[100%]"
                            src={"/Logo.svg"}
                            alt="Logo"
                            width={120}
                            height={100}
                        />
                    </Link>
                    {/* Large Screen */}
                    <nav className="hidden lg:flex">
                        <ul className="flex  space-x-6 xl:space-x-8">
                            {NavLinks.map(({ link, name }, index) => {
                                if (index == 1) {
                                    return (
                                        <div
                                            key={name}
                                            className="inset-0  group items-center"
                                        >
                                            <Link href={link} className="flex">
                                                <span>{name}</span>
                                                <span>
                                                    <RxCaretDown className="text-2xl" />
                                                </span>
                                            </Link>{" "}
                                            <div className="absolute transition-all duration-1000 group-hover:block left-0  w-full drop-shadow-xl min-h-[20rem] pt-[2rem]  hidden">
                                                <div className="bg-white w-full h-full">
                                                    <div className="mx-auto transition-all duration-1000 flex py-12 container xl:w-[75%]">
                                                        <ul className="space-y-3 min-w-[16rem]">
                                                            <li
                                                                onMouseEnter={() =>
                                                                    setVisible(
                                                                        "a"
                                                                    )
                                                                }
                                                                className={`flex p-3 transition-colors duration-300 px-5 rounded-xl hover:bg-lightOpacityBlue  cursor-pointer  font-medium gap-4 items-center ${
                                                                    visible ==
                                                                        "a" &&
                                                                    "bg-lightOpacityBlue"
                                                                }`}
                                                            >
                                                                <FaUser />
                                                                <p>
                                                                    Talent
                                                                    Recuiting
                                                                </p>
                                                            </li>
                                                            <li
                                                                onMouseEnter={() =>
                                                                    setVisible(
                                                                        "b"
                                                                    )
                                                                }
                                                                className={`flex p-3 px-5 transition-colors duration-300 rounded-xl hover:bg-lightOpacityBlue cursor-pointer  font-medium gap-4 items-center ${
                                                                    visible ==
                                                                        "b" &&
                                                                    "bg-lightOpacityBlue"
                                                                }`}
                                                            >
                                                                <LiaBoxesSolid />
                                                                <p>
                                                                    Employee
                                                                    Management
                                                                </p>
                                                            </li>
                                                            <li
                                                                onMouseEnter={() =>
                                                                    setVisible(
                                                                        "c"
                                                                    )
                                                                }
                                                                className={`flex p-3 transition-colors duration-300 px-5 rounded-xl hover:bg-lightOpacityBlue cursor-pointer   font-medium gap-4 items-center ${
                                                                    visible ==
                                                                        "c" &&
                                                                    "bg-lightOpacityBlue"
                                                                }`}
                                                            >
                                                                <GrRobot />
                                                                <p>
                                                                    Jabari AI
                                                                    Assistant
                                                                </p>
                                                            </li>
                                                        </ul>
                                                        <div>
                                                            <div className="w-[1rem] h-[100%] border-r mr-5" />
                                                        </div>
                                                        <div
                                                            className={`${
                                                                visible !==
                                                                    "a" &&
                                                                "hidden"
                                                            }`}
                                                        >
                                                            <div className="grid grid-cols-3 gap-4">
                                                                <ul className="space-y-5">
                                                                    <li className="font-semibold">
                                                                        HIRING
                                                                    </li>
                                                                    {productLinks[0].map(
                                                                        (
                                                                            items,
                                                                            counter
                                                                        ) => (
                                                                            <Link
                                                                                href={
                                                                                    items.link
                                                                                }
                                                                                key={
                                                                                    items.title
                                                                                }
                                                                                className={`flex transition-all -space-y-[0.1rem] duration-500 cursor-pointer rounded-xl p-4 text-sm space-x-3 ${
                                                                                    counter ==
                                                                                    0
                                                                                        ? "hover:bg-red-100/30"
                                                                                        : "hover:bg-blue-100/30"
                                                                                }`}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: items.color,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        items.svg
                                                                                    }
                                                                                </span>
                                                                                <div className="flex text-sm flex-col">
                                                                                    <span className="font-semibold">
                                                                                        {
                                                                                            items.title
                                                                                        }
                                                                                    </span>
                                                                                    <span>
                                                                                        {
                                                                                            items.body
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    )}
                                                                </ul>
                                                                <ul className="space-y-5">
                                                                    <li className="font-semibold">
                                                                        ASSESMENT
                                                                    </li>
                                                                    {productLinks[1].map(
                                                                        (
                                                                            items,
                                                                            counter
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    items.title
                                                                                }
                                                                                className={`flex transition-all -space-y-[0.1rem] duration-500 cursor-pointer rounded-xl p-4 text-sm space-x-3 ${
                                                                                    counter ==
                                                                                    1
                                                                                        ? "hover:bg-red-100/30"
                                                                                        : "hover:bg-blue-100/30"
                                                                                }`}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: items.color,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        items.svg
                                                                                    }
                                                                                </span>
                                                                                <div className="flex text-sm flex-col">
                                                                                    <span className="font-semibold">
                                                                                        {
                                                                                            items.title
                                                                                        }
                                                                                    </span>
                                                                                    <span>
                                                                                        {
                                                                                            items.body
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                                <ul className="sapce-y-5">
                                                                    <li className="font-semibold">
                                                                        MANAGEMENT
                                                                    </li>
                                                                    {productLinks[2].map(
                                                                        (
                                                                            items,
                                                                            counter
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    items.title
                                                                                }
                                                                                className={`flex transition-all -space-y-[0.1rem] duration-500 cursor-pointer rounded-xl p-4 text-sm space-x-3 ${
                                                                                    counter ==
                                                                                    2
                                                                                        ? "hover:bg-red-100/30"
                                                                                        : "hover:bg-blue-100/30"
                                                                                }`}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: items.color,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        items.svg
                                                                                    }
                                                                                </span>
                                                                                <div className="flex text-sm flex-col">
                                                                                    <span className="font-semibold">
                                                                                        {
                                                                                            items.title
                                                                                        }
                                                                                    </span>
                                                                                    <span>
                                                                                        {
                                                                                            items.body
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`${
                                                                visible !==
                                                                    "b" &&
                                                                "hidden"
                                                            }`}
                                                        >
                                                            <div className="grid grid-cols-3 gap-4">
                                                                <ul className="space-y-5">
                                                                    {employee_management[0].map(
                                                                        (
                                                                            items,
                                                                            counter
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    items.title
                                                                                }
                                                                                className={`flex transition-all -space-y-[0.1rem] duration-500 cursor-pointer rounded-xl p-4 text-sm space-x-3 ${
                                                                                    counter ==
                                                                                    0
                                                                                        ? "hover:bg-red-100/30"
                                                                                        : "hover:bg-blue-100/30"
                                                                                }`}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: items.color,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        items.svg
                                                                                    }
                                                                                </span>
                                                                                <div className="flex text-sm flex-col">
                                                                                    <span className="font-semibold">
                                                                                        {
                                                                                            items.title
                                                                                        }
                                                                                    </span>
                                                                                    <span>
                                                                                        {
                                                                                            items.body
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                                <ul className="space-y-5">
                                                                    {employee_management[1].map(
                                                                        (
                                                                            items,
                                                                            counter
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    items.title
                                                                                }
                                                                                className={`flex transition-all -space-y-[0.1rem] duration-500 cursor-pointer rounded-xl p-4 text-sm space-x-3 ${
                                                                                    counter ==
                                                                                    1
                                                                                        ? "hover:bg-red-100/30"
                                                                                        : "hover:bg-blue-100/30"
                                                                                }`}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: items.color,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        items.svg
                                                                                    }
                                                                                </span>
                                                                                <div className="flex text-sm flex-col">
                                                                                    <span className="font-semibold">
                                                                                        {
                                                                                            items.title
                                                                                        }
                                                                                    </span>
                                                                                    <span>
                                                                                        {
                                                                                            items.body
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                                <div className="relative">
                                                                    <Link
                                                                        href={
                                                                            "/"
                                                                        }
                                                                    >
                                                                        <div className="bg-red-100/60 relative overflow-hidden rounded-xl p-4 flex items-center justify-center">
                                                                            <Image
                                                                                src={
                                                                                    "/Container-4.png"
                                                                                }
                                                                                width={
                                                                                    400
                                                                                }
                                                                                height={
                                                                                    400
                                                                                }
                                                                                alt="image"
                                                                            />
                                                                        </div>
                                                                        <FiPlayCircle className="text-[8rem] left-[5rem] absolute top-[4rem] mx-auto text-orange-400" />
                                                                    </Link>
                                                                    <h1 className="text-xl py-8 font-semibold">
                                                                        See
                                                                        Employee
                                                                        Management
                                                                        in
                                                                        Action
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`${
                                                                visible !==
                                                                    "c" &&
                                                                "hidden"
                                                            }`}
                                                        >
                                                            <div className="flex  space-x-4">
                                                                <div className="bg-blue-200/30 border rounded-xl p-5 space-y-2">
                                                                    <Image
                                                                        src={
                                                                            "/Loubby-Webapp-Header.png"
                                                                        }
                                                                        className="w-12 rounded h-12"
                                                                        alt=""
                                                                        width={
                                                                            100
                                                                        }
                                                                        height={
                                                                            100
                                                                        }
                                                                    />
                                                                    <h1 className="font-semibold">
                                                                        Custom
                                                                        AI
                                                                        Integration
                                                                        in one
                                                                        Click.
                                                                    </h1>
                                                                    <p className="text-lg">
                                                                        Integrate
                                                                        Jabari
                                                                        into
                                                                        your
                                                                        software
                                                                        in
                                                                        seconds.
                                                                        No
                                                                        Stress
                                                                        or
                                                                        Hassle
                                                                    </p>
                                                                    <div className="grid  py-4 gap-4 grid-cols-2">
                                                                        <p>
                                                                            Smart
                                                                            Task
                                                                            Automation
                                                                        </p>
                                                                        <p>
                                                                            Seamless
                                                                            Integration
                                                                        </p>
                                                                        <p>
                                                                            Adaptable
                                                                            Learning
                                                                        </p>
                                                                        <p>
                                                                            24/7
                                                                            Availability
                                                                        </p>
                                                                        <p>
                                                                            Enhanced
                                                                            Security
                                                                        </p>
                                                                        <p>
                                                                            Natural
                                                                            Language
                                                                            Processing
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="relative">
                                                                        <Link
                                                                            href={
                                                                                "/"
                                                                            }
                                                                        >
                                                                            <div className="bg-blue-100/60 relative overflow-hidden rounded-xl p-4 flex items-center justify-center">
                                                                                <Image
                                                                                    src={
                                                                                        "/Container-4.png"
                                                                                    }
                                                                                    width={
                                                                                        400
                                                                                    }
                                                                                    height={
                                                                                        400
                                                                                    }
                                                                                    alt="image"
                                                                                />
                                                                            </div>
                                                                            <FiPlayCircle className="text-[8rem] left-[5rem] absolute top-[4rem] mx-auto text-orange-400" />
                                                                        </Link>
                                                                        <h1 className="text-xl py-8 font-semibold">
                                                                            See
                                                                            Employee
                                                                            Management
                                                                            in
                                                                            Action
                                                                        </h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else if (index == 4) {
                                    return (
                                        <div
                                            key={name}
                                            className="inset-0  relative group items-center"
                                        >
                                            <Link className="flex" href={link}>
                                                <span>{name}</span>
                                                <span>
                                                    <RxCaretDown className="text-2xl" />
                                                </span>
                                            </Link>
                                            <div className="min-w-[18rem] space-y-4 shadow-md bg-white rounded-lg hidden absolute  group-hover:flex flex-col p-6 px-4">
                                                <div className="flex space-x-3 p-3 duration-700 transition-all cursor-pointer rounded hover:bg-[#FFFAEB]">
                                                    <FaPenFancy className="text-[#DC6905] text-2xl" />
                                                    <div className="">
                                                        <h1 className="font-semibold">
                                                            Blog
                                                        </h1>
                                                        <p className="text-sm">
                                                            Articles and posts
                                                            relevant for you
                                                            from us
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-3 p-3 duration-700 items-start transition-all cursor-pointer rounded hover:bg-[#ECFDF3]">
                                                    <IoBookSharp className="text-[#039855] text-lg" />
                                                    <div className="">
                                                        <h1 className="font-semibold">
                                                            Knowledge-Based
                                                        </h1>
                                                        <p className="text-sm">
                                                            How-To
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <Link key={name} href={link}>
                                            {name}
                                        </Link>
                                    );
                                }
                            })}
                        </ul>
                    </nav>
                    {/* endlarge screen */}
                    {/* Small Screen */}

                    <IoMenu
                        className="lg:hidden cursor-pointer text-3xl"
                        onClick={() => {
                            setIsOpen((_) => !_);
                        }}
                    />
                    <nav
                        className="fixed lg:hidden hidden md:block h-screen transition-all duration-500 top-0 bottom-0 min-w-[40%] z-[100000] bg-white"
                        style={{ left: isOpen ? 0 : -1000 }}
                    >
                        <div className="flex justify-end p-4">
                            <IoClose
                                className="text-3xl font-bold self-end cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>

                        <ul className="space-y-8 my-12 p-4">
                            {NavLinks.map((items, index) => {
                                if (index == 1) {
                                    return (
                                        <div key={items.name}>
                                            <li
                                                onClick={(e) =>
                                                    setOpenProductDropDown(
                                                        (prev) => !prev
                                                    )
                                                }
                                                className="flex font-medium  cursor-pointer space-x-1 items-center"
                                            >
                                                <div>{items.name}</div>
                                                <span>
                                                    <RxCaretDown className="text-2xl" />
                                                </span>
                                            </li>
                                            {openProductDropDown && (
                                                <ul className="px-6 space-y-5 text-lg p-3">
                                                    <li className="cursor-pointer">
                                                        Assess
                                                    </li>
                                                    <li className="cursor-pointer">
                                                        Hiring
                                                    </li>
                                                    <li className="cursor-pointer">
                                                        Attract
                                                    </li>
                                                    <li className="cursor-pointer">
                                                        Manage
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    );
                                }
                                if (index == 4) {
                                    return (
                                        <li
                                            key={items.name}
                                            className="flex font-medium  cursor-pointer space-x-1 items-center"
                                        >
                                            <div>{items.name}</div>
                                            <span>
                                                <RxCaretDown className="text-2xl" />
                                            </span>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li
                                            className={`${
                                                active == items.link &&
                                                "text-blue-500"
                                            } cursor-pointer font-medium`}
                                            key={items.name}
                                            onClick={() => {
                                                setIsOpen((prev) => !prev);
                                                navigate.push(items.link);
                                            }}
                                        >
                                            <div>{items.name}</div>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </nav>

                    {/* End of small screen */}
                    {/* { smaller devices} */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.nav
                                initial={{ height: 0 }}
                                animate={{ height: "100dvh" }}
                                exit={{ height: 0, opacity: [0, 0.3] }}
                                className="fixed md:hidden overflow-auto top-20 bg-white  mx-1  transition-all duration-500 right-0 left-0 z-10 "
                            >
                                <ul className="space-y-7  p-3 bg-white">
                                    {NavLinks.map((items, index) => {
                                        if (index == 1) {
                                            return (
                                                <div key={items.name}>
                                                    <li
                                                        onClick={(e) =>
                                                            setOpenProductDropDown(
                                                                (prev) => !prev
                                                            )
                                                        }
                                                        className="flex font-medium  cursor-pointer space-x-1 items-center"
                                                    >
                                                        <div>{items.name}</div>
                                                        <span>
                                                            <RxCaretDown className="text-2xl" />
                                                        </span>
                                                    </li>
                                                    {openProductDropDown && (
                                                        <ul className="px-6 space-y-5 text-lg p-3">
                                                            <li className="cursor-pointer">
                                                                Assess
                                                            </li>
                                                            <li className="cursor-pointer">
                                                                Hiring
                                                            </li>
                                                            <li className="cursor-pointer">
                                                                Attract
                                                            </li>
                                                            <li className="cursor-pointer">
                                                                Manage
                                                            </li>
                                                        </ul>
                                                    )}
                                                </div>
                                            );
                                        }

                                        if (index == 4) {
                                            return (
                                                <li
                                                    key={items.name}
                                                    className="flex font-medium  cursor-pointer space-x-1 items-center"
                                                >
                                                    <div>{items.name}</div>
                                                    <span>
                                                        <RxCaretDown className="text-2xl" />
                                                    </span>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li
                                                    className={`${
                                                        active == items.link &&
                                                        "text-blue-500"
                                                    } cursor-pointer font-medium`}
                                                    key={items.name}
                                                    onClick={() => {
                                                        setIsOpen(
                                                            (prev) => !prev
                                                        );
                                                        navigate.push(
                                                            items.link
                                                        );
                                                    }}
                                                >
                                                    <div>{items.name}</div>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>

                                <div className="space-y-4 px-4 my-6">
                                    <button className="bg-[#EAF3FF] text-[#1A73E8]  text-center w-full p-3 rounded-xl">
                                        Login
                                    </button>
                                    <button className="bg-[#1A73E8] hover:bg-blue-700 transition duration-200 text-white text-center w-full p-3 rounded-xl">
                                        Get Started
                                    </button>
                                </div>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
                <div className="lg:hidden hidden md:flex">
                    {isOpen && (
                        <BackDrop
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        />
                    )}
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

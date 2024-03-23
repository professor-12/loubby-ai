import { IoMdListBox } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { GrRobot } from "react-icons/gr";
import { MdOutlineDesktopMac } from "react-icons/md";

export const SlideShowItems = [
    {
        title: "Job Portal",
        header: "Find your dream candidate with job portal",
        body: "Loubby’s job listing portal makes it easy for you to post job openings and view potential matches and easily manage applications in one place.",
        img: "/Main-wrap.png",
        color: "#DC6803",
    },
    {
        title: "Real-Time Interview",
        header: "Seamless in-app interviews in one click",
        body: "Loubby’s in-app interview feature revolutionizes the way you conduct interviews, offering a convenient and time-saving solution for evaluating candidates. With built-in video and audio capabilities, you can effortlessly connect with candidates remotely and assess their skills.",
        img: "/Profile-card-2.png",
        color: "#1A73E8",
    },

    {
        title: "Talent Pool",
        header: "Detailed profile of tens of thousands of active talents",
        body: "Loubby offers access to detailed profiles of tens of thousands of active talents, providing unparalleled insights into each individual’s skills, experience, and qualifications. With our comprehensive database, businesses can effortlessly discover top talent that aligns with their specific requirements and organizational culture.",
        img: "/Frame-410.png",
        color: "#039855",
    },

    {
        title: "Company Job Page",
        header: "Create a catchy company job page to attract top talent",
        body: "Loubby’s Company Job Page feature enables you to create an informative job page that showcases your company’s culture, values, and job opportunities. With customizable design options and rich content, you can effectively attract top talent and provide candidates with a comprehensive overview of your organization.",
        img: "/Frame-446.png",
        color: "#1A73E8",
    },
];
export const SlideShowItems2 = [
    {
        title: "Quizzes and Assessments​",
        header: "Comprehensive Candidate Assessments",
        body: "Conduct thorogh candidate assessments with Loubby’s robust assessment platform. Customize assessments to evaluate skills, knowledge, and suitability for the job. Gain deeper insights into candidates’ abilities and make informed hiring decisions",
        img: "/Section.png",
        color: "#1A73E8",
    },
    {
        title: "Score Cards",
        header: "Objective Candidate Evaluation with Score Cards",
        body: "Make objective hiring decisions using Loubby’s score card feature. Define evaluation criteria and rate candidates consistently. Compare and rank candidates based on predefined metrics to select the best fit for your organization.",
        img: "/Frame-428.png",
        color: "#DC6803",
    },
    {
        title: "AI Screening",
        header: "Efficient Candidate Screening with AI-powered Tools",
        body: "Streamline your candidate screening process using Loubby’s AI-powered screening tools. Automate the initial screening phase to quickly identify top candidates and focus your attention on the most promising applicants.",
        img: "/Section-1.png",
        color: "#039855",
    },

    {
        title: "Collaborative Tools",
        header: "Enhance Collaboration in the Hiring Process",
        body: "Foster collaboration between hiring teams and candidates and streamline communication with Loubby’s collaborative tools. Enable seamless sharing of information and feedback exchange to ensure a cohesive and efficient hiring process.",
        img: "/Profile-card-2.png",
        color: "#1A73E8",
    },
];

export const array = [
    { text: "Job Portal", color: "#DC6803", svg: <FaBriefcase /> },
    { text: "Interviews", color: "#1A73E8", svg: <BiSolidMessageDetail /> },
    { text: "Talent Pool", color: "#039855", svg: <FaBriefcase /> },
    { text: "Company Job Page", color: "#1A73E8", svg: <IoMdListBox /> },
];

export const array2 = [
    { text: "Quiz Assesment", color: "#1A73E8", svg: <AiFillQuestionCircle /> },
    {
        text: "Score Cards",
        color: "#DC6803",
        svg: <BsFillCreditCard2FrontFill />,
    },
    { text: "Ai Screening", color: "#039855", svg: <GrRobot /> },
    {
        text: "Collaborative Tools",
        color: "#1A73E8",
        svg: <MdOutlineDesktopMac />,
    },
];

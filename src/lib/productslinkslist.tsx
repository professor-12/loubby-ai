import { MdPhone } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";
import { IoCardSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { RiBarChartBoxFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { IoTimeSharp } from "react-icons/io5";
import { BsFillPieChartFill } from "react-icons/bs";
import { MdOutlineZoomIn } from "react-icons/md";

export const productLinks = [
    [
        {
            title: "Job Posting",
            body: "Find your dream candidate with Loubby's customized job page",
            svg: <TbBriefcase2 className="text-2xl" />,
            color: "orange",
        },
        {
            title: "Real-Time Interview",
            body: "Seamless in-app interviews in one click",
            svg: <MdPhone className="text-xl text-blue-300" />,
            color: "blue",
        },
        {
            title: "In-App Messanging",
            body: "Easily communicate and collaborate with your team",
            svg: <IoChatbubbles className="text-xl text-blue-300" />,
            color: "green",
        },
        {
            title: "Talent Pool",
            body: "Detailed profile of tens of thousands of active talents",
            svg: "",
            color: "blue",
        },
    ],
    [
        {
            title: "Quizzes and Assessments",
            body: "Comprehensive andidate Assessments",
            svg: "",
            color: "blue",
        },
        {
            title: "Score Cards",
            body: "Objective Candidates Evaluation with Score Cards",
            svg: <IoCardSharp className="text-xl text-blue-300" />,
            color: "orange",
        },
        {
            title: "Ai Screening",
            body: "Efficient Candidate Screening with AI-powered tools",
            svg: <FaFilter className="text-xl text-blue-300" />,
            color: "green",
        },
        {
            title: "Collaborative Tools",
            body: "Enhance Collaboration in the Hiring Process",
            svg: "",
            color: "blue",
        },
    ],
    [
        {
            title: "Schedule/Calender",
            body: "Effieicient Schedule and Calender Management",
            svg: <FaCalendarCheck className="text-2xl text-blue-300" />,
            color: "blue",
        },
        {
            title: "Approval/Heirarchy",
            body: "Streamlined Approval Processes with Hierarchy",
            svg: <CiCircleCheck className="text-2xl" />,
            color: "green",
        },
        {
            title: "Insights/Analytics",
            body: "Actionable Insights and Powerful Analytics",
            svg: <MdOutlineZoomIn className="text-xl " />,
            color: "orange",
        },
        {
            title: "Pipeline Management",
            body: "Stremlined Candidate Pipeline MAnagement",
            svg: <MdOutlineSettingsInputComponent className="text-xl" />,
            color: "blue",
        },
    ],
];

export const employee_management = [
    [
        {
            title: "Candidate Onboarding",
            body: "Effortlessly streamline your new hire onboarding process",
            svg: <CiCircleCheck className="text-2xl feont-semibold" />,
            color: "orange",
        },
        {
            title: "Team Management",
            body: "Navigate your team dynamics effortlessly",
            svg: <RiTeamFill className="text-xl" />,
            color: "green",
        },
        {
            title: "Payroll Automation",
            body: "Experience error-free payday bliss with precise payroll processing",
            svg: <FaSackDollar className="text-xl" />,
            color: "blue",
        },
        {
            title: "Expenses Reporting",
            body: "Effortlessly track and manage expenses with a user-friendly reporting tool",
            svg: <RiBarChartBoxFill className="text-xl" />,
            color: "blue",
        },
    ],
    [
        {
            title: "Performance Review",
            body: "Fuel growth through stragic reviews and feedback",
            svg: <VscGraphLine className="text-xl" />,
            color: "blue",
        },
        {
            title: "Time Tracking",
            body: "Optimize productivity and amke every moment count",
            svg: <IoTimeSharp className="text-xl" />,
            color: "orange",
        },
        {
            title: "Actionable Insights",
            body: "Gain invaluable perspectives to enhance employee engagement",
            svg: <BsFillPieChartFill className="text-xl" />,
            color: "",
        },
    ],
];
import { Link } from "@inertiajs/react";
import {
    FaBookOpen,
    FaChalkboardTeacher,
    FaSchool,
    FaTachometerAlt,
    FaUsers,
} from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { PiStudentThin } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import ApplicationLogo from "./ApplicationLogo";

const Sidebar = () => {
    return (
        <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <ApplicationLogo />
            <ul className="flex flex-col mt-5 text-xl">
                <Link href={route("dashboard")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-sky-400 hover:text-white"
                    >
                        <FaTachometerAlt />

                        <span className="hidden md:inline">Dashboard</span>
                    </li>
                </Link>
                <Link href={route("role.index")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
            hover:bg-sky-400 hover:text-white"
                    >
                        <FaUsersGear />

                        <span className="hidden md:inline">Roles</span>
                    </li>
                </Link>
                <Link href={route("user.index")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
            hover:text-white hover:bg-sky-400"
                    >
                        <FaUsers />
                        <span className="hidden md:inline ">Personnels</span>
                    </li>
                </Link>
                <Link href={route("classe.index")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-sky-400"
                    >
                        <SiGoogleclassroom />
                        <span className="hidden md:inline ">Classes</span>
                    </li>
                </Link>
                <Link href={route("etudiant.index")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-sky-400"
                    >
                        <PiStudentThin />
                        <span className="hidden md:inline ">Etudiants</span>
                    </li>
                </Link>
                <Link href={route("cour.index")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-sky-400"
                    >
                        <FaBookOpen />
                        <span className="hidden md:inline ">Cours</span>
                    </li>
                </Link>
                <Link href={route("enseignant.index")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-sky-400"
                    >
                        <FaChalkboardTeacher />
                        <span className="hidden md:inline ">Enseignants</span>
                    </li>
                </Link>

                <Link href={route("salle.index")}>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-sky-400"
                    >
                        <FaSchool />
                        <span className="hidden md:inline ">
                            Salles de classe
                        </span>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;

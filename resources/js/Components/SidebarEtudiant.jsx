import { Link } from "@inertiajs/react";
import { FaTachometerAlt } from "react-icons/fa";
import ApplicationLogo from "./ApplicationLogo";

const SidebarEtudiant = () => {
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
            </ul>
        </div>
    );
};

export default SidebarEtudiant;

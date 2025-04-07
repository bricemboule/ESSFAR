import { Link, router } from "@inertiajs/react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
    FaCalendarAlt,
    FaChalkboardTeacher,
    FaTachometerAlt,
} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { GrResources } from "react-icons/gr";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdHomeWork } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

function ScolariteMenu() {
    const deconnect = () => {
        router.post("logout");
    };
    return (
        <ul className="flex flex-col mt-5 text-xl">
            <Link href={route("scolarite.dashboard")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                    hover:bg-sky-400 hover:text-white"
                >
                    <FaTachometerAlt />

                    <span className="hidden md:inline">Dashboard</span>
                </li>
            </Link>
            <Link href={route("etudiant.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
    hover:text-white hover:bg-sky-400"
                >
                    <PiStudent />
                    <span className="hidden md:inline ">Etudiants</span>
                </li>
            </Link>
            <Link href={route("enseignant.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
    hover:text-white hover:bg-sky-400"
                >
                    <LiaChalkboardTeacherSolid />
                    <span className="hidden md:inline ">Enseignants</span>
                </li>
            </Link>
            <Link href={route("devoir.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
    hover:text-white hover:bg-sky-400"
                >
                    <MdHomeWork />
                    <span className="hidden md:inline ">Devoirs</span>
                </li>
            </Link>
            <Link href={route("projet.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
    hover:text-white hover:bg-sky-400"
                >
                    <AiOutlineFolderOpen />
                    <span className="hidden md:inline ">Projets</span>
                </li>
            </Link>
            <Link href={route("cour.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                    hover:text-white hover:bg-sky-400"
                >
                    <FaChalkboardTeacher />
                    <span className="hidden md:inline ">Cours</span>
                </li>
            </Link>
            <Link href={route("resource.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                                hover:text-white hover:bg-sky-400"
                >
                    <GrResources />
                    <span className="hidden md:inline ">Ressources</span>
                </li>
            </Link>
            <Link href={route("cour.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                                hover:text-white hover:bg-sky-400"
                >
                    <FaCalendarAlt />
                    <span className="hidden md:inline ">Emploi du temps</span>
                </li>
            </Link>

            <Link href={route("scolarite.profile.edit")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-sky-400 hover:text-white"
                >
                    <CgProfile />

                    <span className="hidden md:inline">Mon profile</span>
                </li>
            </Link>

            <button onClick={() => deconnect()}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
hover:bg-sky-400 hover:text-white"
                >
                    <GoSignOut />

                    <span className="hidden md:inline">Se Déconnecter</span>
                </li>
            </button>
        </ul>
    );
}

export default ScolariteMenu;

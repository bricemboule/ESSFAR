import { Link, router } from "@inertiajs/react";
import { CgProfile } from "react-icons/cg";
import {
    FaChalkboardTeacher,
    FaRegCalendarAlt,
    FaTachometerAlt,
} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { GrUserSettings, GrUserWorker } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
function AdminMenu() {
    const deconnect = () => {
        router.post("logout");
    };
    return (
        <ul className="flex flex-col mt-5 text-xl">
            <Link href={route("admin.dashboard")}>
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
                    <GrUserSettings />

                    <span className="hidden md:inline">Roles</span>
                </li>
            </Link>
            <Link href={route("annee.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
            hover:bg-sky-400 hover:text-white"
                >
                    <FaRegCalendarAlt />

                    <span className="hidden md:inline">Année Académique</span>
                </li>
            </Link>
            <Link href={route("classe.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
            hover:bg-sky-400 hover:text-white"
                >
                    <SiGoogleclassroom />

                    <span className="hidden md:inline">Classes</span>
                </li>
            </Link>
            <Link href={route("personnel.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
            hover:text-white hover:bg-sky-400"
                >
                    <GrUserWorker />
                    <span className="hidden md:inline ">Personnels</span>
                </li>
            </Link>
            <Link href={route("admin.etudiant.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
            hover:text-white hover:bg-sky-400"
                >
                    <PiStudent />
                    <span className="hidden md:inline ">Etudiants</span>
                </li>
            </Link>
            <Link href={route("admin.enseignant.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
            hover:text-white hover:bg-sky-400"
                >
                    <FaChalkboardTeacher />
                    <span className="hidden md:inline ">Enseignants</span>
                </li>
            </Link>
            <Link href={route("admin.profile.edit")}>
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

export default AdminMenu;

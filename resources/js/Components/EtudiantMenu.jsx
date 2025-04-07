import { Link, router } from "@inertiajs/react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaClipboard } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { GrResources } from "react-icons/gr";
import { MdHomeWork } from "react-icons/md";
function EtudiantMenu() {
    const deconnect = () => {
        router.post("logout");
    };
    return (
        <ul className="flex flex-col mt-5 text-xl">
            <Link href={route("cour_et.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                    hover:text-white hover:bg-sky-400"
                >
                    <FaClipboard />
                    <span className="hidden md:inline ">Cours</span>
                </li>
            </Link>
            <Link href={route("devoir_et.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                    hover:text-white hover:bg-sky-400"
                >
                    <MdHomeWork />
                    <span className="hidden md:inline ">Devoir</span>
                </li>
            </Link>
            <Link href={route("projets.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                    hover:text-white hover:bg-sky-400"
                >
                    <AiOutlineFolderOpen />
                    <span className="hidden md:inline ">Projets</span>
                </li>
            </Link>
            <Link href={route("ressources.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                    hover:text-white hover:bg-sky-400"
                >
                    <GrResources />
                    <span className="hidden md:inline ">Resources</span>
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
            <Link href={route("etudiant.profile.edit")}>
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

export default EtudiantMenu;

import { Link, router } from "@inertiajs/react";
import { CgProfile } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
function EnseignantMenu() {
    const deconnect = () => {
        router.post("logout");
    };
    return (
        <ul className="flex flex-col mt-5 text-xl">
            <Link href={route("cour.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                hover:text-white hover:bg-sky-400"
                >
                    <FaBookOpen />
                    <span className="hidden md:inline ">Cours</span>
                </li>
            </Link>
            <Link href={route("cour.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                hover:text-white hover:bg-sky-400"
                >
                    <FaBookOpen />
                    <span className="hidden md:inline ">Devoir</span>
                </li>
            </Link>
            <Link href={route("cour.index")}>
                <li
                    className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                hover:text-white hover:bg-sky-400"
                >
                    <FaBookOpen />
                    <span className="hidden md:inline ">Resources</span>
                </li>
            </Link>
            <Link href={route("enseignant.profile.edit")}>
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

export default EnseignantMenu;

import Content from "@/Components/Content";
import Dropdown from "@/Components/Dropdown";
import Main from "@/Components/Main";
//import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Sidebar from "@/Components/Sidebar";
import { ThemeCotext } from "@/context/ThemeContextProvider";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Authenticated({
    user,
    header,
    children,
    isSideBarOpen,
    toggleDarkMode,
    darkMode,
}) {
    console.log(user);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const { theme, toggleTheme } = useContext(ThemeCotext);

    const info = () => {
        switch (user.role.nom_role) {
            case "personnel":
                return (
                    <>
                        {user.personnel.nom}- {user.personnel.poste}
                    </>
                );
            case "etudiant":
                return <>{/*{user.etudiant.nom}- {user.etudiant.prenom}*/}</>;
            case "enseignant":
                return (
                    <>
                        {user.enseignant.nom}- {user.etudiant.prenom}
                    </>
                );
            default:
                return <p>Statut inconnu.</p>;
        }
    };

    return (
        <div className="flex">
            <Sidebar user={user} />
            <div
                className="grow ml-16 md:ml-64 h-full  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white"
            >
                <nav className="bg-sky-400 text-white border-b border-gray-300 sm:p-1 lg:p-4 xl:p-4 md:p-3 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
                    <div className="flex">
                        <button className="inline-flex text-white items-center p-2 text-sm rounded-lg sm:block md:hidden lg:hidden xl:hidden  dark:text-gray-400 "></button>
                    </div>
                    <div className="hidden flex gap-4 sm:flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {info()}
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                            </Dropdown>
                        </div>
                    </div>
                    <button
                        className="text-2xl text-dark"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </button>
                </nav>
                <Main>
                    <Content>{children}</Content>
                </Main>
            </div>
        </div>
    );
}

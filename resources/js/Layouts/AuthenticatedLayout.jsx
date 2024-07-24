import Content from "@/Components/Content";
import Dropdown from "@/Components/Dropdown";
import Main from "@/Components/Main";
//import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Sidebar from "@/Components/Sidebar";
import { ThemeCotext } from "@/context/ThemeContextProvider";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Authenticated({
    user,
    header,
    children,
    isSideBarOpen,
    toggleDarkMode,
    darkMode,
}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const { theme, toggleTheme } = useContext(ThemeCotext);
    return (
        <div className="flex">
            <Sidebar />
            <div
                className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white"
            >
                <nav className="bg-sky-400 text-white border-b border-gray-300 sm:p-1 lg:p-4 xl:p-4 md:p-3 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
                    <div className="flex">
                        <button className="inline-flex text-white items-center p-2 text-sm rounded-lg sm:block md:hidden lg:hidden xl:hidden  dark:text-gray-400 ">
                            <HiOutlineMenuAlt2 className="text-2xl" />
                        </button>
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
                                            {user.nom}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Mon Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Se Deconnecter
                                    </Dropdown.Link>
                                </Dropdown.Content>
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

import Section from "@/Components/Section";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
//import ThemeContextProvider from "./context/ThemeContextProvider";

export default function Dashboard({
    auth,
    nombreClasse,
    nombreEtudiant,
    nombreEnseignant,
}) {
    const [darkMode, setDarkMode] = useState(false);
    const [isSideBarOpen, setIsSideOpen] = useState(false);
    console.log(auth);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleIsSideBarOpen = () => {
        setIsSideOpen(!isSideBarOpen);
    };
    return (
        <ThemeContextProvider>
            <AuthenticatedLayout
                user={auth.user}
                isSideBarOpen={isSideBarOpen}
                toggleIsSideBarOpen={toggleIsSideBarOpen}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <Section
                    nombreEtudiant={nombreEtudiant}
                    nombreEnseignant={nombreEnseignant}
                    nombreClasse={nombreClasse}
                />
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

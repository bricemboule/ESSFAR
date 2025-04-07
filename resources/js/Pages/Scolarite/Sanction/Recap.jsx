import PrimaryButton from "@/Components/PrimaryButton";
import SuccessButton from "@/Components/SuccessButton";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

function Recap({ auth, sanctions }) {
    // Grouper les sanctions par classe et cours
    const sanctionsParClasse = sanctions.reduce((acc, sanction) => {
        const classeId = sanction.classe.id;
        const matiereId = sanction.cour.id;

        if (!acc[classeId]) {
            acc[classeId] = { nom: sanction.classe.intitule, matieres: {} };
        }

        if (!acc[classeId].matieres[matiereId]) {
            acc[classeId].matieres[matiereId] = {
                nom: sanction.cour.intitule,
                sanctions: [],
            };
        }

        acc[classeId].matieres[matiereId].sanctions.push(sanction);
        console.log(acc);
        return acc;
    }, {});

    return (
        <ThemeContextProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        etudiants
                    </h2>
                }
            >
                <Head title="Etudiants" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex">
                                <div className=" p-2 text-xl">
                                    <Link href={route("sanction.create")}>
                                        <SuccessButton>
                                            Ajouter Retards/Absences
                                        </SuccessButton>
                                    </Link>
                                </div>
                                <div className=" p-2 text-xl">
                                    <Link href={route("sanction.recap")}>
                                        <PrimaryButton>
                                            Recap retards/Absences
                                        </PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="overflow-auto">
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border p-2">
                                                    Classe
                                                </th>
                                                <th className="border p-2">
                                                    Cours
                                                </th>
                                                <th className="border p-2">
                                                    Étudiant
                                                </th>
                                                <th className="border p-2 text-orange-500">
                                                    Retards
                                                </th>
                                                <th className="border p-2 text-red-500">
                                                    Absences
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.values(
                                                sanctionsParClasse
                                            ).map(
                                                ({ nom: intitule, matieres }) =>
                                                    Object.values(matieres).map(
                                                        (
                                                            {
                                                                nom: libelle,
                                                                sanctions,
                                                            },
                                                            matiereIndex
                                                        ) =>
                                                            sanctions.map(
                                                                (
                                                                    sanction,
                                                                    etudiantIndex
                                                                ) => (
                                                                    <tr
                                                                        key={
                                                                            sanction
                                                                                .etudiant
                                                                                .id
                                                                        }
                                                                        className="border"
                                                                    >
                                                                        {/* Fusionner la cellule de la classe uniquement pour la première matière de la classe */}
                                                                        {matiereIndex ===
                                                                            0 &&
                                                                            etudiantIndex ===
                                                                                0 && (
                                                                                <td
                                                                                    className="border p-2 font-bold text-center"
                                                                                    rowSpan={Object.values(
                                                                                        matieres
                                                                                    ).reduce(
                                                                                        (
                                                                                            sum,
                                                                                            m
                                                                                        ) =>
                                                                                            sum +
                                                                                            m
                                                                                                .sanctions
                                                                                                .length,
                                                                                        0
                                                                                    )}
                                                                                >
                                                                                    {
                                                                                        intitule
                                                                                    }
                                                                                </td>
                                                                            )}

                                                                        {/* Fusionner la cellule du cours pour tous les étudiants de cette matière */}
                                                                        {etudiantIndex ===
                                                                            0 && (
                                                                            <td
                                                                                className="border p-2 font-semibold text-center"
                                                                                rowSpan={
                                                                                    sanctions.length
                                                                                }
                                                                            >
                                                                                {
                                                                                    libelle
                                                                                }
                                                                            </td>
                                                                        )}

                                                                        <td className="border p-2">
                                                                            {
                                                                                sanction
                                                                                    .etudiant
                                                                                    .nom
                                                                            }{" "}
                                                                            {
                                                                                sanction
                                                                                    .etudiant
                                                                                    .prenom
                                                                            }
                                                                        </td>
                                                                        <td className="border p-2 text-orange-500 text-center">
                                                                            {
                                                                                sanction.total_retards
                                                                            }
                                                                        </td>
                                                                        <td className="border p-2 text-red-500 text-center">
                                                                            {
                                                                                sanction.total_absences
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )
                                                    )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Recap;

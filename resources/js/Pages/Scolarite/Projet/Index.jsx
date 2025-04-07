import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function Index({ auth, classes, cours, projets, queryParams = null }) {
    queryParams = queryParams || {};

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("projet.index", queryParams));
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searcheFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "desc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        router.get(route("projet.index", queryParams));
    };
    const deleteProjet = (devoir) => {
        if (!window.confirm("Voulez vous supprimer ce projet ?")) {
            return;
        }
        router.delete(route("projet.destroy", devoir.id));
    };

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
                <Head title="Devoirs" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex gap-2 p-2 text-xl">
                                <Link href={route("projet.create")}>
                                    <PrimaryButton>
                                        <IoMdAdd size={30} />
                                        Nouveau Projet
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="overflow-auto">
                                    <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th>ID</th>
                                                <th>Intitule</th>
                                                <th>Cours</th>
                                                <th>Classe</th>
                                                <th>Date Limite</th>
                                                <th className="p-3">
                                                    Ressource
                                                </th>

                                                <th className="p-3">Actions</th>
                                            </tr>
                                        </thead>
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="px-3 py-3"></th>

                                                <th className="p-3">
                                                    <TextInput
                                                        className="w-full p-2 border-2"
                                                        placeholder="..."
                                                        defaultValue={
                                                            queryParams.name
                                                        }
                                                        onBlur={(e) =>
                                                            searcheFieldChanged(
                                                                "intitule",
                                                                e.target.value
                                                            )
                                                        }
                                                        onKeyPress={(e) =>
                                                            onKeyPress(
                                                                "intitule",
                                                                e
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className="p-3">
                                                    <SelectInput
                                                        className="w-full p-2 border-2"
                                                        defaultValue={
                                                            queryParams.status
                                                        }
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "projet",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        {cours.data.map(
                                                            (classe) => (
                                                                <option
                                                                    value={
                                                                        classe.intitule
                                                                    }
                                                                >
                                                                    {
                                                                        classe.intitule
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectInput>
                                                </th>
                                                <th className="p-3">
                                                    <SelectInput
                                                        className="w-full p-2 border-2"
                                                        defaultValue={
                                                            queryParams.status
                                                        }
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "classe",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        {classes.data.map(
                                                            (classe) => (
                                                                <option
                                                                    value={
                                                                        classe.intitule
                                                                    }
                                                                >
                                                                    {
                                                                        classe.intitule
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectInput>
                                                </th>
                                                <th className="p-3"></th>

                                                <th className="p-3"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {projets.data.flatMap((devoir) =>
                                                devoir.classe.map((clas) => (
                                                    <tr
                                                        key={`${devoir.id}-${clas.id}`}
                                                        className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                    >
                                                        <td className="p-3">
                                                            {devoir.id}
                                                        </td>
                                                        <td className="p-3">
                                                            {devoir.intitule}
                                                        </td>

                                                        <td className="p-3">
                                                            {
                                                                devoir.cour
                                                                    .intitule
                                                            }
                                                        </td>
                                                        <td className="p-3">
                                                            {clas.intitule}
                                                        </td>
                                                        <td className="p-3">
                                                            {devoir.date_limite}
                                                        </td>
                                                        <td className="p-3">
                                                            {/* Bouton de téléchargement */}
                                                            {devoir.fichier && (
                                                                <a
                                                                    href={`/storage/${devoir.chemin}`} // Lien vers le fichier
                                                                    download
                                                                    className="text-blue-500 hover:underline"
                                                                >
                                                                    {
                                                                        devoir.fichier
                                                                    }
                                                                </a>
                                                            )}
                                                        </td>

                                                        <td className="p-3 flex gap-2">
                                                            <Link
                                                                href={route(
                                                                    "projet.edit",
                                                                    devoir.id
                                                                )}
                                                                className="font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1"
                                                            >
                                                                <HiOutlinePencilSquare />
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    deleteProjet(
                                                                        devoir
                                                                    )
                                                                }
                                                                className="font-medium text-red-600 dark:text-red-500 hover:text-underline mx-1"
                                                            >
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={projets.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

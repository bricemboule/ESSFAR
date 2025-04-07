import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

function Index({ auth, cours, classes, semestres, queryParams = null }) {
    queryParams = queryParams || {};
    console.log(cours);
    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("cour.index", queryParams));
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
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        router.get(route("cour.index", queryParams));
    };
    const deleteCour = (cour) => {
        if (!window.confirm("Voulez vous supprimer cet etudiant ?")) {
            return;
        }
        router.delete(route("cour.destroy", cour.id));
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
                <Head title="Cours" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex gap-2 p-2 text-xl">
                                <Link href={route("cour.create")}>
                                    <PrimaryButton>
                                        Ajouter un Cours
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="overflow-auto">
                                    <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="p-3">ID</th>
                                                <th className="p-3">
                                                    Intitule
                                                </th>
                                                <th className="p-3">
                                                    Volume Horaire
                                                </th>

                                                <th>Classe</th>
                                                <th className="p-3">
                                                    Enseignant
                                                </th>
                                                <th className="p-3">
                                                    Semestre
                                                </th>
                                                <th className="p-3">Actions</th>
                                            </tr>
                                        </thead>
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="p-3"></th>

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
                                                <th className="p-3"></th>
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
                                                                        classe.intitule +
                                                                        " " +
                                                                        classe.specialite
                                                                    }
                                                                >
                                                                    {classe.intitule +
                                                                        " " +
                                                                        classe.specialite}
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectInput>
                                                </th>
                                                <th className="p-3">
                                                    <TextInput
                                                        className="w-full p-2 border-2"
                                                        placeholder="..."
                                                        defaultValue={
                                                            queryParams.name
                                                        }
                                                        onBlur={(e) =>
                                                            searcheFieldChanged(
                                                                "nom",
                                                                e.target.value
                                                            )
                                                        }
                                                        onKeyPress={(e) =>
                                                            onKeyPress("nom", e)
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
                                                                "semestre",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        {semestres.data.map(
                                                            (sem) => (
                                                                <option
                                                                    value={
                                                                        sem.libelle
                                                                    }
                                                                >
                                                                    {
                                                                        sem.libelle
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectInput>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {cours.data.map((cour, index) => (
                                                <tr
                                                    key={cour.id}
                                                    className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="p-3">
                                                        {index + 1}
                                                    </td>
                                                    <td className="p-3">
                                                        {cour.intitule}
                                                    </td>
                                                    <td className="p-3">
                                                        {cour.volume_horaire}
                                                    </td>
                                                    <td className="p-3">
                                                        {cour.classe
                                                            .map(
                                                                (clas) =>
                                                                    clas.intitule +
                                                                    " "
                                                            )
                                                            .join("")}
                                                    </td>

                                                    <td className="px-3 py-3">
                                                        {cour.enseignant.nom +
                                                            " " +
                                                            cour.enseignant
                                                                .prenom}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {cour.semestre.libelle}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <span
                                                            className={
                                                                "px-2 py-1 rounded text-white "
                                                            }
                                                        ></span>
                                                    </td>

                                                    <td className="px-3 py-4 flex gap-2">
                                                        <Link
                                                            href={route(
                                                                "cour.edit",
                                                                cour.id
                                                            )}
                                                            className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                        >
                                                            <HiOutlinePencilSquare />
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                deleteCour(cour)
                                                            }
                                                            className=" font-medium text-red-600 dark:text-red-500 hover:text-underline mx-1 "
                                                        >
                                                            <RiDeleteBin6Line />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={cours.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

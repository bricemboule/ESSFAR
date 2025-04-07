import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import SuccessButton from "@/Components/SuccessButton";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoMdPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function Index({ auth, etudiants, classes, queryParams = null }) {
    console.log(etudiants);
    queryParams = queryParams || {};
    console.log(etudiants);

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("etudiant.index", queryParams));
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

        router.get(route("etudiant.index", queryParams));
    };
    const deleteStudent = (etudiant) => {
        if (!window.confirm("Voulez vous supprimer cet etudiant ?")) {
            return;
        }
        router.delete(route("etudiant.destroy", etudiant.id));
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
                <Head title="Etudiants" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex">
                                <div className="p-2 text-xl">
                                    <Link href={route("etudiant.create")}>
                                        <PrimaryButton>
                                            Ajouter un étudiant
                                        </PrimaryButton>
                                    </Link>
                                </div>
                                <div className=" p-2 text-xl">
                                    <Link href={route("sanction.index")}>
                                        <SuccessButton>
                                            Retards/Absences
                                        </SuccessButton>
                                    </Link>
                                </div>
                                <div className=" p-2 text-xl">
                                    <Link href={route("sanction.create")}>
                                        <DangerButton className="flex gap-1 text-xl p-2">
                                            <IoMdPrint /> Imprimer
                                        </DangerButton>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="overflow-auto">
                                    <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="p-2"> N°</th>

                                                <th className="p-2">
                                                    Matricule
                                                </th>
                                                <TableHeading
                                                    name="nom"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Noms
                                                </TableHeading>
                                                <th className="p-2">Prenoms</th>
                                                <th className="p-2">Email</th>
                                                <th className="p-2">
                                                    Date Naissance
                                                </th>
                                                <th className="p-2">
                                                    Lieu Naissance
                                                </th>
                                                <th>Téléphone 1</th>

                                                <th className="p-2">Classe</th>

                                                <th className="p-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="p-3"></th>

                                                <th className="p-2">
                                                    <TextInput
                                                        className="w-full p-2 border-2"
                                                        placeholder="..."
                                                        defaultValue={
                                                            queryParams.name
                                                        }
                                                        onBlur={(e) =>
                                                            searcheFieldChanged(
                                                                "matricule",
                                                                e.target.value
                                                            )
                                                        }
                                                        onKeyPress={(e) =>
                                                            onKeyPress(
                                                                "matricule",
                                                                e
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className="p-2">
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
                                                <th className="p-2"></th>
                                                <th className="p-2">
                                                    <TextInput
                                                        className="w-full p-2 border-2"
                                                        placeholder="..."
                                                        defaultValue={
                                                            queryParams.name
                                                        }
                                                        onBlur={(e) =>
                                                            searcheFieldChanged(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                        onKeyPress={(e) =>
                                                            onKeyPress(
                                                                "email",
                                                                e
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className="p-2"></th>
                                                <th className="p-2"></th>

                                                <th className="p-2">
                                                    <TextInput
                                                        className="w-full p-2 border-2"
                                                        placeholder="..."
                                                        defaultValue={
                                                            queryParams.name
                                                        }
                                                        onBlur={(e) =>
                                                            searcheFieldChanged(
                                                                "telephone1",
                                                                e.target.value
                                                            )
                                                        }
                                                        onKeyPress={(e) =>
                                                            onKeyPress(
                                                                "telephone1",
                                                                e
                                                            )
                                                        }
                                                    />
                                                </th>

                                                <th className="p-2">
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
                                                                        classe.id
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

                                                <th className="p-2"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {etudiants.data.map(
                                                (etudiant, index) => (
                                                    <tr
                                                        key={index + 1}
                                                        className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                    >
                                                        <td className="px-3 py-3">
                                                            {etudiant.id}
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {etudiant.matricule}
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {etudiant.nom}
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {etudiant.prenom}
                                                        </td>

                                                        <td className="px-3 py-3">
                                                            {
                                                                etudiant.user
                                                                    .email
                                                            }
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {
                                                                etudiant.dateNaissance
                                                            }
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {
                                                                etudiant.lieuNaissance
                                                            }
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {
                                                                etudiant.telephone1
                                                            }
                                                        </td>

                                                        <td className="px-3 py-3">
                                                            {etudiant.classe.map(
                                                                (clas) =>
                                                                    clas.intitule
                                                            )}
                                                        </td>
                                                        {/*<td className="px-3 py-3">
                                                            <span
                                                                className={
                                                                    "px-2 py-1 rounded text-white " +
                                                                    ETUDIANT_STATUS_CLASS_MAP[
                                                                        etudiant
                                                                            .status
                                                                    ]
                                                                }
                                                            >
                                                                {
                                                                    ETUDIANT_STATUS_TEXT_MAP[
                                                                        etudiant
                                                                            .status
                                                                    ]
                                                                }
                                                            </span>
                                                        </td>*/}

                                                        <td className="px-3 py-4 flex gap-2">
                                                            <Link
                                                                href={route(
                                                                    "etudiant.edit",
                                                                    etudiant.id
                                                                )}
                                                                className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                            >
                                                                <HiOutlinePencilSquare />
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    deleteStudent(
                                                                        etudiant
                                                                    )
                                                                }
                                                                className=" font-medium text-red-600 dark:text-red-500 hover:text-underline mx-1 "
                                                            >
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={etudiants.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

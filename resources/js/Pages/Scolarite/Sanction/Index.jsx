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
import { RiDeleteBin6Line } from "react-icons/ri";

function Index({ auth, sanctions, classes, queryParams = null }) {
    console.log(sanctions);
    queryParams = queryParams || {};

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("sanction.index", queryParams));
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

        router.get(route("sanction.index", queryParams));
    };
    const deleteSanction = (sanction) => {
        if (!window.confirm("Voulez vous supprimer cette sanction ?")) {
            return;
        }
        router.delete(route("sanction.destroy", sanction.id));
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
                                    <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="p-2">#</th>
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
                                                    Etudiants
                                                </TableHeading>
                                                <th className="p-2">Cours</th>

                                                <th className="p-2">
                                                    Sanction
                                                </th>
                                                <th className="p-2">Date</th>
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
                                                    <SelectInput
                                                        className="w-full p-2 border-2"
                                                        defaultValue={
                                                            queryParams.status
                                                        }
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "sanction",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        <option value="Retard">
                                                            Retard
                                                        </option>
                                                        <option value="Absence">
                                                            Absence
                                                        </option>
                                                    </SelectInput>
                                                </th>
                                                <th className="p-2"></th>
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
                                            {sanctions.data.map(
                                                (sanction, index) => (
                                                    <tr
                                                        key={index + 1}
                                                        className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                    >
                                                        <td className="p-3">
                                                            {index + 1}
                                                        </td>
                                                        <td className="p-3">
                                                            {sanction.etudiant}
                                                        </td>
                                                        <td className="p-3">
                                                            {sanction.cours}
                                                        </td>
                                                        <td className="p-3">
                                                            {sanction.sanction}
                                                        </td>
                                                        <td className="p-3">
                                                            {sanction.date}
                                                        </td>
                                                        <td className="p-3">
                                                            {sanction.classe}
                                                        </td>

                                                        <td className="px-3 py-4 flex gap-2">
                                                            <Link
                                                                href={route(
                                                                    "sanction.edit",
                                                                    sanction.id
                                                                )}
                                                                className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                            >
                                                                <HiOutlinePencilSquare />
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    deleteSanction(
                                                                        sanction
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

                                <Pagination links={sanctions.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

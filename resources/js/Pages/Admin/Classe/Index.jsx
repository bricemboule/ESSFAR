import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/Constante";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function Index({ auth, classes, queryParams = null }) {
    queryParams = queryParams || {};

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("classe.index", queryParams));
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

        router.get(route("classe.index", queryParams));
    };

    const deleteClasse = (classe) => {
        if (!window.confirm("Voulez vous supprimer ce classe ?")) {
            return;
        }
        router.delete(route("classe.destroy", classe.id));
    };

    return (
        <ThemeContextProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        Classes
                    </h2>
                }
            >
                <Head title="Classes" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex gap-2 p-2 text-xl">
                                <Link href={route("classe.create")}>
                                    <PrimaryButton>
                                        <IoMdAdd size={30} />
                                        Add Classe
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="overflow-auto">
                                    <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <TableHeading
                                                    name="id"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    ID
                                                </TableHeading>
                                                <th>Intitule</th>
                                                <th className="px-3 py-3">
                                                    Cycle
                                                </th>

                                                <TableHeading
                                                    name="etudiants"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Nombres étudiants
                                                </TableHeading>
                                                <th>Status</th>

                                                <th className="px-3 py-3">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="px-3 py-3"></th>
                                                <th className="px-3 py-3">
                                                    <TextInput
                                                        className="w-full"
                                                        placeholder="Entrer la classe ..."
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
                                                            onKeyPress(
                                                                "name",
                                                                e
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className="px-3 py-3">
                                                    <SelectInput
                                                        className="w-full"
                                                        defaultValue={
                                                            queryParams.status
                                                        }
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Selectionner un
                                                            cycle
                                                        </option>
                                                        <option value="1">
                                                            {" "}
                                                            Licence
                                                        </option>
                                                        <option value="0">
                                                            Master
                                                        </option>
                                                    </SelectInput>
                                                </th>

                                                <th className="px-3 py-3"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {classes.data.map((classe) => (
                                                <tr
                                                    key={classe.id}
                                                    className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-3 py-3">
                                                        {classe.id}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {classe.intitule}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {classe.cycle}
                                                    </td>

                                                    <td className="px-3 py-3">
                                                        {""}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <span
                                                            className={
                                                                "px-2 py-1 rounded text-white " +
                                                                USER_STATUS_CLASS_MAP[
                                                                    classe
                                                                        .status
                                                                ]
                                                            }
                                                        >
                                                            {
                                                                USER_STATUS_TEXT_MAP[
                                                                    classe
                                                                        .status
                                                                ]
                                                            }
                                                        </span>
                                                    </td>

                                                    <td className="px-3 py-4 flex gap-2">
                                                        <Link
                                                            href={route(
                                                                "classe.edit",
                                                                classe.id
                                                            )}
                                                            className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                        >
                                                            <HiOutlinePencilSquare />
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                deleteClasse(
                                                                    classe
                                                                )
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

                                <Pagination links={classes.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
                *
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

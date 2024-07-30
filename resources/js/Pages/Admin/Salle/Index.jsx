import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/Constante";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function Index({ auth, salles, success, queryParams = null }) {
    queryParams = queryParams || {};

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("salle.index", queryParams));
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

        router.get(route("salle.index", queryParams));
    };

    const deleteSalle = (salle) => {
        if (!window.confirm("Voulez vous supprimer ce salle ?")) {
            return;
        }
        router.delete(route("salle.destroy", salle.id));
    };

    return (
        <ThemeContextProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        salles
                    </h2>
                }
            >
                <Head title="salles" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        {success && (
                            <div className="bg-emerald-500 p-4 text-white text-xl rounded">
                                {success}
                            </div>
                        )}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="flex gap-2 p-2 text-xl">
                                    <Link href={route("salle.create")}>
                                        <PrimaryButton>
                                            <IoMdAdd size={30} />
                                            Add Salle
                                        </PrimaryButton>
                                    </Link>
                                </div>
                                <div className="overflow-auto">
                                    <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th>ID</th>

                                                <th className="p-3">
                                                    Intitule
                                                </th>

                                                <th className="px-3 py-3">
                                                    Capacité
                                                </th>

                                                <th className="p-3">Status</th>

                                                <th className="px-3 py-3">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="px-3 py-3"></th>

                                                <th className="p-3"></th>
                                                <th className="p-3"></th>

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
                                                        <option value=""></option>
                                                        <option value="1">
                                                            {" "}
                                                            Terminé
                                                        </option>
                                                        <option value="0">
                                                            En salles
                                                        </option>
                                                        <option value="0">
                                                            En attente
                                                        </option>
                                                    </SelectInput>
                                                </th>

                                                <th className="p-3"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {salles.data.map((salle) => (
                                                <tr
                                                    key={salle.id}
                                                    className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-3 py-3">
                                                        {salle.id}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {salle.nomSalle}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {salle.capacite}
                                                    </td>

                                                    <td className="px-3 py-3">
                                                        <span
                                                            className={
                                                                "px-2 py-1 rounded text-white " +
                                                                USER_STATUS_CLASS_MAP[
                                                                    salle.status
                                                                ]
                                                            }
                                                        >
                                                            {
                                                                USER_STATUS_TEXT_MAP[
                                                                    salle.status
                                                                ]
                                                            }
                                                        </span>
                                                    </td>

                                                    <td className="px-3 py-4 flex gap-2">
                                                        <Link
                                                            href={route(
                                                                "salle.edit",
                                                                salle.id
                                                            )}
                                                            className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                        >
                                                            <HiOutlinePencilSquare />
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                deleteSalle(
                                                                    salle
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

                                <Pagination links={salles.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

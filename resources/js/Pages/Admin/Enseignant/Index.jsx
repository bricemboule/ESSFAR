import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

function Index({ auth, enseignants, queryParams = null }) {
    console.log(enseignants);
    queryParams = queryParams || {};
    const deleteEnseignant = (enseignant) => {
        if (!window.confirm("Voulez vous supprimer cet enseignant ?")) {
            return;
        }
        router.delete(route("admin.enseignant.destroy", enseignant.id));
    };

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("admin.enseignant.index", queryParams));
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

        router.get(route("admin.enseignant.index", queryParams));
    };

    return (
        <ThemeContextProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        enseignants
                    </h2>
                }
            >
                <Head title="enseignants" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex gap-2 p-2 text-xl">
                                <Link href={route("admin.enseignant.create")}>
                                    <PrimaryButton>
                                        Ajouter un enseignant
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
                                                <th className="p-3">Prenoms</th>
                                                <th className="p-3">Email</th>

                                                <th className="p-3">
                                                    Téléphone 1
                                                </th>
                                                <th>Téléphone 2</th>

                                                <th className="p-3">Grade</th>
                                                <th className="p-3">Cours</th>

                                                <th className="px-3 py-3">
                                                    Actions
                                                </th>
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

                                                <th className="p-3">
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
                                                                "name",
                                                                e
                                                            )
                                                        }
                                                    />
                                                </th>
                                                <th className="p-3"></th>
                                                <th className="px-3 py-3">
                                                    <SelectInput
                                                        className="w-full p-2 border-2"
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
                                                        <option value="Pr">
                                                            {" "}
                                                            Pr
                                                        </option>
                                                        <option value="MC">
                                                            MC
                                                        </option>
                                                        <option value="CC">
                                                            CC
                                                        </option>
                                                        <option value="Pro">
                                                            Pro
                                                        </option>

                                                        <option value="Vac">
                                                            Vac
                                                        </option>
                                                    </SelectInput>
                                                </th>

                                                <th className="px-3 py-3"></th>

                                                {/*<th className="p-3">
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
                                                            L1
                                                        </option>
                                                        <option value="0">
                                                            L2
                                                        </option>
                                                        <option value="0">
                                                            L3
                                                        </option>
                                                        <option value="0">
                                                            M1 ACT
                                                        </option>
                                                        <option value="0">
                                                            M1 INF
                                                        </option>
                                                        <option value="0">
                                                            M1 SBD
                                                        </option>
                                                        <option value="0">
                                                            M2 ACT
                                                        </option>
                                                        <option value="0">
                                                            M2 INF
                                                        </option>
                                                        <option value="0">
                                                            M2 SBD
                                                        </option>
                                                    </SelectInput>
                                                </th>*/}
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {enseignants.data.map(
                                                (enseignant, index) => (
                                                    <tr
                                                        key={index + 1}
                                                        className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                    >
                                                        <td className="px-3 py-3">
                                                            {enseignant.id}
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {enseignant.nom}
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            {enseignant.prenom}
                                                        </td>

                                                        <td className="px-3 py-3">
                                                            {
                                                                enseignant.user
                                                                    .email
                                                            }
                                                        </td>

                                                        <td className="p-3">
                                                            {
                                                                enseignant.telephone1
                                                            }
                                                        </td>
                                                        <td className="p-3">
                                                            {
                                                                enseignant.telephone2
                                                            }
                                                        </td>
                                                        <th className="p-3">
                                                            {enseignant.grade}
                                                        </th>
                                                        <th className="p-3">
                                                            {enseignant.cours
                                                                .map(
                                                                    (cr) =>
                                                                        cr.intitule +
                                                                        ""
                                                                )
                                                                .join("")}
                                                        </th>

                                                        <td className="px-3 py-4 flex gap-2">
                                                            <Link
                                                                href={route(
                                                                    "admin.enseignant.edit",
                                                                    enseignant.id
                                                                )}
                                                                className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                            >
                                                                <HiOutlinePencilSquare />
                                                            </Link>
                                                            <button
                                                                onClick={() => {
                                                                    deleteEnseignant(
                                                                        enseignant
                                                                    );
                                                                }}
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

                                <Pagination links={enseignants.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

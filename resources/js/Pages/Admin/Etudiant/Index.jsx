import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

function Index({ auth, etudiants, queryParams = null }) {
    queryParams = queryParams || {};

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
                queryParams.sort_direction = "desc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        router.get(route("etudiant.index", queryParams));
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
                                                <th className="p-3"></th>
                                                <TableHeading
                                                    name="matricule"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Matricule
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
                                                <TableHeading
                                                    name="prenom"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Prenoms
                                                </TableHeading>
                                                <TableHeading
                                                    name="email"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Email
                                                </TableHeading>
                                                <th className="px-3 py-3">
                                                    Date Naissance
                                                </th>
                                                <th className="px-3 py-3">
                                                    Lieu Naissance
                                                </th>
                                                <TableHeading
                                                    name="telephone1"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Téléphone 1
                                                </TableHeading>
                                                <TableHeading
                                                    name="telephone2"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Téléphone 2
                                                </TableHeading>

                                                <TableHeading
                                                    name="classe"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Classe
                                                </TableHeading>
                                                <TableHeading
                                                    name="status"
                                                    sort_field={
                                                        queryParams.sort_field
                                                    }
                                                    sort_direction={
                                                        queryParams.sort_direction
                                                    }
                                                    sortChanged={sortChanged}
                                                >
                                                    Status
                                                </TableHeading>

                                                <th className="px-3 py-3">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="px-3 py-3"></th>
                                                <th className="p-3"></th>
                                                <th className="p-3">
                                                    <TextInput
                                                        className="w-full"
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
                                                        className="w-full"
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
                                                <th className="p-3"></th>
                                                <th className="p-3"></th>
                                                <th className="p-3">
                                                    <TextInput
                                                        className="w-full"
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
                                                <th className="px-3 py-3"></th>

                                                <th className="px-3 py-3"></th>

                                                <th className="p-3">
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
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {etudiants.data.map((etudiant) => (
                                                <tr
                                                    key={etudiant.id}
                                                    className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-3 py-3">
                                                        {etudiant.id}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {etudiant.intitule}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {etudiant.cycle}
                                                    </td>

                                                    <td className="px-3 py-3">
                                                        {""}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <span
                                                            className={
                                                                "px-2 py-1 rounded text-white " +
                                                                USER_STATUS_CLASS_MAP[
                                                                    etudiant
                                                                        .status
                                                                ]
                                                            }
                                                        >
                                                            {
                                                                USER_STATUS_TEXT_MAP[
                                                                    etudiant
                                                                        .status
                                                                ]
                                                            }
                                                        </span>
                                                    </td>

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
                                                        <Link
                                                            href={route(
                                                                "etudiant.destroy",
                                                                etudiant.id
                                                            )}
                                                            className=" font-medium text-red-600 dark:text-red-500 hover:text-underline mx-1 "
                                                        >
                                                            <RiDeleteBin6Line />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
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

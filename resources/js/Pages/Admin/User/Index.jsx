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

function Index({ auth, users, success, queryParams = null }) {
    const deleteUser = (user) => {
        if (!window.confirm("Voulez vous supprimer ce personnel ?")) {
            return;
        }
        router.delete(route("user.destroy", user.id));
    };
    queryParams = queryParams || {};

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("user.index", queryParams));
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

        router.get(route("user.index", queryParams));
    };

    return (
        <ThemeContextProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        Personnels
                    </h2>
                }
            >
                <Head title="Personnels" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        {success && (
                            <div className="bg-emerald-500 p-4 text-white text-xl rounded">
                                {success}
                            </div>
                        )}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex gap-2 p-2 text-xl">
                                <Link href={route("user.create")}>
                                    <PrimaryButton>
                                        <IoMdAdd size={30} />
                                        Add User
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
                                                    Nom
                                                </TableHeading>
                                                <th className="px-3 py-3">
                                                    Prénom
                                                </th>
                                                <th className="px-3 py-3">
                                                    Téléphone 1
                                                </th>

                                                <th className="px-3 py-3">
                                                    Email
                                                </th>
                                                <th className="p-3">Status</th>
                                                <th className="p-3">Role</th>
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
                                                        placeholder="Entrer le nom ..."
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
                                                <th className="px-3 py-3"></th>

                                                <th className="px-3 py-3"></th>
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
                                                            Select status
                                                        </option>
                                                        <option value="1">
                                                            {" "}
                                                            En activité
                                                        </option>
                                                        <option value="0">
                                                            Suspendu
                                                        </option>
                                                    </SelectInput>
                                                </th>
                                                <th className="px-3 py-3">
                                                    <SelectInput
                                                        className="w-full"
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "role",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Select role
                                                        </option>
                                                        <option value="DG">
                                                            Dg
                                                        </option>
                                                        <option value="DAC">
                                                            Dac
                                                        </option>
                                                        <option value="Admin">
                                                            {" "}
                                                            Admin
                                                        </option>
                                                    </SelectInput>
                                                </th>
                                                <th className="px-3 py-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.data.map((user) => (
                                                <tr
                                                    key={user.id}
                                                    className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-3 py-3">
                                                        {user.id}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {user.nom}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {user.prenom}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {user.telephone1}
                                                    </td>

                                                    <td className="px-3 py-3">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <span
                                                            className={
                                                                "px-2 py-1 rounded-lg text-white " +
                                                                USER_STATUS_CLASS_MAP[
                                                                    user.status
                                                                ]
                                                            }
                                                        >
                                                            {
                                                                USER_STATUS_TEXT_MAP[
                                                                    user.status
                                                                ]
                                                            }
                                                        </span>
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {user.role.nom_role}
                                                    </td>

                                                    <td className="px-3 py-4 flex gap-2">
                                                        <Link
                                                            href={route(
                                                                "user.edit",
                                                                user.id
                                                            )}
                                                            className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                        >
                                                            <HiOutlinePencilSquare />
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                deleteUser(user)
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

                                <Pagination links={users.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

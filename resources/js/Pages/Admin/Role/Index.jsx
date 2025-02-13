import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
function Index({ auth, roles, success }) {
    const deleteRole = (role) => {
        if (!window.confirm("Voulez vous supprimer ce role ?")) {
            return;
        }
        router.delete(route("role.destroy", role.id));
    };
    return (
        <ThemeContextProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        Roles
                    </h2>
                }
            >
                <Head title="Roles" />

                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        {success && (
                            <div className="bg-emerald-500 p-4 text-white text-xl rounded">
                                {success}
                            </div>
                        )}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg my-2">
                            <div className="flex gap-2 pt-4 px-4">
                                <Link href={route("role.create")}>
                                    <PrimaryButton>
                                        <IoMdAdd size={40} />
                                        Ajouter Role
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                    <thead className="text-xl text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3">N°</th>
                                            <th className="px-3 py-3">Role</th>
                                            <th className="px-3 py-3">
                                                Description
                                            </th>
                                            <th className="px-3 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.data.map((role) => (
                                            <tr
                                                key={role.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <td className="px-3 py-3">
                                                    {role.id}
                                                </td>
                                                <td className="px-3 py-3">
                                                    {role.nom_role}
                                                </td>
                                                <td className="px-3 py-3">
                                                    {role.description}
                                                </td>

                                                <td className="px-3 py-4 flex gap-2">
                                                    <Link
                                                        href={route(
                                                            "role.edit",
                                                            role.id
                                                        )}
                                                        className=" font-medium text-green-500 dark:text-blue-500 hover:text-underline mx-1 "
                                                    >
                                                        <HiOutlinePencilSquare />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            deleteRole(role)
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

                                <Pagination links={roles.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

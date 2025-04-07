import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SuccessButton from "@/Components/SuccessButton";
import TextInput from "@/Components/TextInput";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

function Index({ auth, annees, success, queryParams = null }) {
    queryParams = queryParams || {};

    const desactivedYear = (annee) => {
        router.delete(route("annee.destroy", annee.id));
    };

    const activedYear = (annee) => {
        router.put(route("annee_activated", annee.id));
    };

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("annee.index", queryParams));
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searcheFieldChanged(name, e.target.value);
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
                <Head title="Annees" />

                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        {success && (
                            <div className="bg-emerald-500 p-4 text-white text-xl rounded">
                                {success}
                            </div>
                        )}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg my-2">
                            <div className="flex gap-2 pt-4 px-4">
                                <Link href={route("annee.create")}>
                                    <PrimaryButton>
                                        Ajouter une année académique
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                    <thead className="text-xl text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3">N°</th>
                                            <th className="px-3 py-3">
                                                Intitule
                                            </th>
                                            <th className="px-3 py-3">
                                                Statut
                                            </th>
                                            <th className="px-3 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="p-3"></th>

                                            <th className="p-3">
                                                <TextInput
                                                    className="w-full p-2 border-2"
                                                    placeholder="entrer une année académique ..."
                                                    defaultValue={
                                                        queryParams.intitule
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

                                            <th className="p-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {annees.data.map((role, index) => (
                                            <tr
                                                key={role.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <td className="px-3 py-3">
                                                    {index + 1}
                                                </td>
                                                <td className="px-3 py-3 ">
                                                    {role.intitule}
                                                </td>

                                                <td
                                                    className={
                                                        role.status ===
                                                        "activée"
                                                            ? "text-green-500 p-3"
                                                            : "text-red-500 p-3"
                                                    }
                                                >
                                                    {role.status}
                                                </td>

                                                <td className="px-3 py-4 flex gap-2">
                                                    <SuccessButton
                                                        onClick={() =>
                                                            activedYear(role)
                                                        }
                                                        className=" font-medium text-red-600 dark:text-white hover:text-underline mx-1 "
                                                    >
                                                        Activer
                                                    </SuccessButton>
                                                    <DangerButton
                                                        onClick={() =>
                                                            desactivedYear(role)
                                                        }
                                                        className=" font-medium text-red-600 dark:text-white hover:text-underline mx-1 "
                                                    >
                                                        Desactiver
                                                    </DangerButton>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <Pagination links={annees.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

function Index({ auth, resources, types, annees, cours, queryParams = null }) {
    console.log(annees);
    queryParams = queryParams || {};

    const searcheFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("resource.index", queryParams));
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

        router.get(route("resource.index", queryParams));
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
                <Head title="Ressources" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div className="overflow-auto">
                                    <table className="w-full text-xl text-left rtl:text-righr text-gray-500 dark:text-gray-400">
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th>ID</th>
                                                <th>Intitule</th>
                                                <th>Type</th>
                                                <th>Cours</th>

                                                <th className="p-3">
                                                    Ressource
                                                </th>
                                                <th className="p-3">Année</th>
                                            </tr>
                                        </thead>
                                        <thead className="text-sm text-gray-700 capitalize bg-gray-50 dark:gn-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                            <tr className="text-nowrap">
                                                <th className="px-3 py-3"></th>

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
                                                    <SelectInput
                                                        className="w-full"
                                                        defaultValue={
                                                            queryParams.status
                                                        }
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "type",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        {types.data.map(
                                                            (type) => (
                                                                <option
                                                                    value={
                                                                        type.intitule
                                                                    }
                                                                >
                                                                    {
                                                                        type.intitule
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectInput>
                                                </th>
                                                <th className="p-3">
                                                    <SelectInput
                                                        className="w-full"
                                                        defaultValue={
                                                            queryParams.status
                                                        }
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "type",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        {cours.data.map(
                                                            (type) => (
                                                                <option
                                                                    value={
                                                                        type.intitule
                                                                    }
                                                                >
                                                                    {
                                                                        type.intitule
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectInput>
                                                </th>

                                                <th className="p-3"></th>
                                                <th className="p-3">
                                                    <SelectInput
                                                        className="w-full"
                                                        defaultValue={
                                                            queryParams.status
                                                        }
                                                        onChange={(e) =>
                                                            searcheFieldChanged(
                                                                "annee",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value=""></option>
                                                        {annees.data.map(
                                                            (type) => (
                                                                <option
                                                                    value={
                                                                        type.intitule
                                                                    }
                                                                >
                                                                    {
                                                                        type.intitule
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </SelectInput>
                                                </th>
                                                <th className="p-3"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {resources.data.map((resource) => (
                                                <tr
                                                    key={resource.id}
                                                    className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-3 py-3">
                                                        {resource.id}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {resource.intitule}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {resource.type.intitule}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {resource.cour.intitule}
                                                    </td>

                                                    <td className="px-3 py-3">
                                                        {/* Bouton de téléchargement */}
                                                        {resource.fichier && (
                                                            <a
                                                                href={`/storage/${resource.chemin}`} // Lien vers le fichier
                                                                download
                                                                className="text-blue-500 hover:underline"
                                                            >
                                                                {
                                                                    resource.fichier
                                                                }
                                                            </a>
                                                        )}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {
                                                            resource.annee
                                                                .intitule
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ThemeContextProvider>
    );
}

export default Index;

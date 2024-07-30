import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Create({ auth }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        nom_role: "",
        description: "",
        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("role.store"));
    };
    return (
        <ThemeContextProvider>
            <Authenticated
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        Roles
                    </h2>
                }
            >
                <Head title="Create Role" />
                <div className="py-12">
                    <div className="max-w-7xl max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="flex gap-6 pt-4 px-4">
                                <form
                                    onSubmit={onSubmit}
                                    className="mt-6 space-y-6"
                                >
                                    <div>
                                        <InputLabel
                                            htmlFor="nom_role"
                                            value="Nom"
                                        />

                                        <TextInput
                                            id="nom_role"
                                            className="mt-1 block w-full"
                                            value={data.nom_role}
                                            onChange={(e) =>
                                                setData(
                                                    "nom_role",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            isFocused
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.nom_role}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="description"
                                            value="Description"
                                        />

                                        <TextAreaInput
                                            id="description"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.description}
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton>
                                            Créer un role
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </ThemeContextProvider>
    );
}

export default Create;

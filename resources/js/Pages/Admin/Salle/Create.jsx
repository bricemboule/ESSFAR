import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
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
        nomSalle: "",
        capacite: "",
        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("salle.store"));
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
                <Head title="Create Salle" />
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
                                            htmlFor="intitule"
                                            value="Intitule"
                                        />

                                        <TextInput
                                            id="intitule"
                                            className="mt-1 block w-full"
                                            value={data.intitule}
                                            onChange={(e) =>
                                                setData(
                                                    "nomSalle",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            isFocused
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.nomSalle}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="capacite"
                                            value="Capacite"
                                        />

                                        <TextInput
                                            id="capacite"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.capacite}
                                            onChange={(e) =>
                                                setData(
                                                    "capacite",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.capacite}
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton>Créer</PrimaryButton>
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

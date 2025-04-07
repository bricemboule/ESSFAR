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
        intitule: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("annee.store"));
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
                            <div className="pt-4 px-4 w-112">
                                <form
                                    onSubmit={onSubmit}
                                    className="mt-6 space-y-6"
                                >
                                    <div className="text-xl font-bold">
                                        <InputLabel
                                            htmlFor="intitule"
                                            value="Intitulé"
                                            className=""
                                        />

                                        <TextInput
                                            id="intitule"
                                            className="mt-1 p-3 border-2 block w-3/5"
                                            value={data.intitule}
                                            onChange={(e) =>
                                                setData(
                                                    "intitule",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            isFocused
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.intitule}
                                        />
                                    </div>

                                    <div className="flex items-center gap-4 py-2">
                                        <PrimaryButton>
                                            Enregistrer
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

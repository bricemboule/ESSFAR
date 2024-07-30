import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Create({ auth, enseignants }) {
    console.log(enseignants);
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
        volumeHoraire: "",
        enseignant: "",
        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("cour.store"));
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
                <Head title="Nouveau cours" />
                <div className="py-12">
                    <div className="w-full max-auto sm:px-6 lg:px-8">
                        <div className=" bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="pt-4 px-4 w-112">
                                <form
                                    onSubmit={onSubmit}
                                    className="mt-6 space-y-6"
                                >
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="intitule"
                                                value="Intitulé du cours"
                                            />

                                            <TextInput
                                                id="intitule"
                                                type="text"
                                                className="mt-1 block w-full"
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
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="volumeHoraire"
                                                value="Volume Horaire"
                                            />

                                            <TextInput
                                                id="volumeHoraire"
                                                type="text"
                                                className="mt-1 block w-full"
                                                value={data.volumeHoraire}
                                                onChange={(e) =>
                                                    setData(
                                                        "volumeHoraire",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.volumeHoraire}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="enseignant"
                                                value="Enseignant"
                                            />

                                            <SelectInput
                                                id="enseignant"
                                                className="mt-1 block w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "enseignant",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                {enseignants.data.map(
                                                    (enseignant) => {
                                                        return (
                                                            <option
                                                                value={
                                                                    enseignant.nom
                                                                }
                                                            >
                                                                {enseignant.nom}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.enseignant}
                                            />
                                        </div>
                                        <div className="l">
                                            <InputLabel
                                                htmlFor="classe"
                                                value="Classe(s)"
                                            />

                                            <div className="flex gap-8">
                                                <Checkbox
                                                    id="classe"
                                                    className="mt-1 block"
                                                    value={data.classe}
                                                    onChange={(e) =>
                                                        setData(
                                                            "classe",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    isFocused
                                                />
                                                <Checkbox
                                                    id="classe"
                                                    className="mt-1 block"
                                                    value={data.classe}
                                                    onChange={(e) =>
                                                        setData(
                                                            "classe",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    isFocused
                                                />
                                                <Checkbox
                                                    id="classe"
                                                    className="mt-1 block"
                                                    value={data.classe}
                                                    onChange={(e) =>
                                                        setData(
                                                            "classe",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    isFocused
                                                />
                                            </div>

                                            <InputError
                                                className="mt-2"
                                                message={errors.classe}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex text-sm items-center gap-4">
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

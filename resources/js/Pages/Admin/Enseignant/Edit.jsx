import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Edit({ auth, enseignant }) {
    const {
        data,
        setData,
        put,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        nom: enseignant.data.nom || "",
        prenom: enseignant.data.prenom || "",
        telephone1: enseignant.data.telephone1 || "",
        telephone2: enseignant.data.telephone2 || "",
        dateNaissance: enseignant.data.dateNaissance || "",
        lieu_naissance: enseignant.data.lieu_naissance || "",
        email: enseignant.data.email || "",
        grade: enseignant.data.grade || "",
        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        put(route("enseignant.update", enseignant.data.id));
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
                <Head title="Update Enseigant" />
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
                                                htmlFor="nom"
                                                value="Nom"
                                            />

                                            <TextInput
                                                id="nom"
                                                type="text"
                                                className="mt-1 block w-full"
                                                value={data.nom}
                                                onChange={(e) =>
                                                    setData(
                                                        "nom",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.nom}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="prenom"
                                                value="Prenom"
                                            />

                                            <TextInput
                                                id="prenom"
                                                type="text"
                                                className="mt-1 block w-full"
                                                value={data.prenom}
                                                onChange={(e) =>
                                                    setData(
                                                        "prenom",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.prenom}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="telephone1"
                                                value="Telephone 1"
                                            />

                                            <TextInput
                                                id="telephone1"
                                                className="mt-1 block w-full"
                                                value={data.telephone1}
                                                onChange={(e) =>
                                                    setData(
                                                        "telephone1",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.telephone}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="telephone2"
                                                value="Telephone 2"
                                            />

                                            <TextInput
                                                id="telephone2"
                                                className="mt-1 block w-full"
                                                value={data.telephone2}
                                                onChange={(e) =>
                                                    setData(
                                                        "telephone2",
                                                        e.target.value
                                                    )
                                                }
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.telephone}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="dateNaissance"
                                                value="Date de Naissance"
                                            />

                                            <TextInput
                                                id="dateNaissance"
                                                type="date"
                                                className="mt-1 block w-full"
                                                value={data.dateNaissance}
                                                onChange={(e) =>
                                                    setData(
                                                        "dateNaissance",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.dateNaissance}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="lieu_naissance"
                                                value="Lieu de naissance"
                                            />

                                            <TextInput
                                                id="lieu_naissance"
                                                type="text"
                                                className="mt-1 block w-full"
                                                value={data.lieu_naissance}
                                                onChange={(e) =>
                                                    setData(
                                                        "lieu_naissance",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.lieu_naissance}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="email"
                                                value="Email"
                                            />

                                            <TextInput
                                                id="email"
                                                type="email"
                                                className="mt-1 block w-full"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="Poste de responsabilite"
                                                value="Poste de responsabilite"
                                            />

                                            <SelectInput
                                                id="grade"
                                                name="grade"
                                                value={data.grade}
                                                className="mt-1 block w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "grade",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                <option value="Pr">
                                                    Professeur
                                                </option>
                                                <option value="CC">
                                                    Charger de cours
                                                </option>
                                                <option value="Pro">
                                                    Professionnel
                                                </option>
                                                <option value="Vac">
                                                    Vacataire
                                                </option>
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.grade}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex text-sm items-center gap-4">
                                        <PrimaryButton>Modifier</PrimaryButton>
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

export default Edit;

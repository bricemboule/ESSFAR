import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Edit({ auth, personnel }) {
    const {
        data,
        setData,
        put,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        nom: personnel.data.nom || "",
        prenom: personnel.data.prenom || "",
        telephone1: personnel.data.telephone1 || "",
        telephone2: personnel.data.telephone2 || "",

        email: personnel.data.user.email || "",
        poste: personnel.data.poste || "",

        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        put(route("personnel.update", personnel.data.id));
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
                <Head title="Update user" />
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
                                                className="mt-1 block w-full"
                                                value={data.nom}
                                                onChange={(e) =>
                                                    setData(
                                                        "nom",
                                                        e.target.value
                                                    )
                                                }
                                                required
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
                                                className="mt-1 block w-full"
                                                value={data.prenom}
                                                onChange={(e) =>
                                                    setData(
                                                        "prenom",
                                                        e.target.value
                                                    )
                                                }
                                                required
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
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.telephone1}
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
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.telephone2}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="Fonction"
                                                value="Fonction"
                                            />

                                            <SelectInput
                                                id="Fonction"
                                                name="fonction"
                                                type="text"
                                                className="mt-1 block w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "poste",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value={data.poste}>
                                                    {data.poste}
                                                </option>
                                                <option value="Admin">
                                                    Admin
                                                </option>
                                                <option value="Directeur General">
                                                    Directeur Generale
                                                </option>
                                                <option value="Directeur General">
                                                    Directeur Academique
                                                </option>
                                                <option value="Chef Scolarite">
                                                    Chef Scolarite
                                                </option>
                                                <option value="Gestionnaire Scolarite">
                                                    Gestionnaire Scolarite
                                                </option>
                                                <option value="Comptabilite">
                                                    Comptabilite
                                                </option>
                                                <option value="Gestionnaire Stock">
                                                    Gestionnaire Stock
                                                </option>
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.poste}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="email"
                                                value="Email"
                                            />

                                            <TextInput
                                                id="email"
                                                className="mt-1 block w-full"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
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

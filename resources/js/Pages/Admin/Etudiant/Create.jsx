import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Create({ auth, classes }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        nom: "",
        prenom: "",
        telephone1: "",
        telephone2: "",
        dateNaissance: "",
        lieuNaissance: "",
        email: "",
        classe: "",
        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("admin.etudiant.store"));
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
                <Head title="Nouvel Etudiant" />
                <div className="py-12">
                    <div className="w-full max-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shaddow-sm sm:rounded-lg">
                            <div className="pt-4 px-4 w-112">
                                <form
                                    onSubmit={onSubmit}
                                    className="mt-6 space-y-6"
                                >
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="nom"
                                                value={
                                                    <>
                                                        Nom{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="nom"
                                                type="text"
                                                className="mt-1 block p-2 border-2 w-full"
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
                                                value={
                                                    <>
                                                        Prénom{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="prenom"
                                                type="text"
                                                className="mt-1 block w-full p-2 border-2"
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
                                                value={
                                                    <>
                                                        Téléphone 1{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="telephone1"
                                                type="text"
                                                className="mt-1 block w-full p-2 border-2"
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
                                                value="
                                                   
                                                        Téléphone 2"
                                            />

                                            <TextInput
                                                id="telephone2"
                                                type="text"
                                                className="mt-1 block w-full p-2 border-2"
                                                value={data.telephone2}
                                                onChange={(e) =>
                                                    setData(
                                                        "telephone2",
                                                        e.target.value
                                                    )
                                                }
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
                                                htmlFor="dateNaissance"
                                                value={
                                                    <>
                                                        Date Naissance{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="dateNaissance"
                                                type="date"
                                                className="mt-1 block w-full p-2 border-2"
                                                value={data.dateNaissance}
                                                onChange={(e) =>
                                                    setData(
                                                        "dateNaissance",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.dateNaissance}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="lieuNaissance"
                                                value={
                                                    <>
                                                        Lieu Naissance{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="lieuNaissance"
                                                type="text"
                                                className="mt-1 block w-full p-2 border-2"
                                                value={data.lieuNaissance}
                                                onChange={(e) =>
                                                    setData(
                                                        "lieuNaissance",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.lieuNaissance}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="email"
                                                value={
                                                    <>
                                                        Adresse mail{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="email"
                                                type="email"
                                                className="mt-1 block w-full p-2 border-2"
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
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="classe"
                                                value={
                                                    <>
                                                        Classe{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="classe"
                                                name="classe"
                                                className="mt-1 block w-full p-2 border-2"
                                                onChange={(e) =>
                                                    setData(
                                                        "classe",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                {classes.data.map((classe) => {
                                                    return (
                                                        <option
                                                            value={
                                                                classe.intitule +
                                                                " " +
                                                                classe.specialite
                                                            }
                                                        >
                                                            {classe.intitule +
                                                                " " +
                                                                classe.specialite}
                                                        </option>
                                                    );
                                                })}
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.classe}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex text-sm items-center p-3 gap-4">
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

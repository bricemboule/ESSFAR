import Checkbox from "@/Components/Checkbox";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Create({ auth, classes, types, cours, annees }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        type: "",
        classes: [],
        intitule: "",
        annee: "",
        ressource: null,
        cour: "",
    });

    const handleFileChange = (e) => {
        setData("ressource", e.target.files[0]); // Met à jour le champ fichier
    };

    const handleCheckboxChange = (e) => {
        const value = parseInt(e.target.value);
        if (e.target.checked) {
            setData("classes", [...data.classes, value]);
        } else {
            setData(
                "classes",
                data.classes.filter((id) => id !== value)
            );
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            if (key !== "ressource") {
                formData.append(key, data[key]);
            }
        });

        if (data.ressource instanceof File) {
            formData.append("ressource", data.ressource);
        }

        post(route("resource.store"), {
            data: formData,
        });
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
                <Head title="Nouvelle ressource" />
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
                                                htmlFor="type"
                                                value={
                                                    <>
                                                        Type{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="type"
                                                name="type"
                                                className="mt-1 block w-full p-2 border-2"
                                                onChange={(e) =>
                                                    setData(
                                                        "type",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                {types.data.map((type) => (
                                                    <option
                                                        value={type.intitule}
                                                    >
                                                        {type.intitule}
                                                    </option>
                                                ))}
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.classe}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="">
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

                                            {classes.data.map((classe) => (
                                                <>
                                                    <div className="flex gap-2">
                                                        <Checkbox
                                                            id="classe"
                                                            name="classe"
                                                            className="mt-1 sm:flex md:flex lg:flex xl:flex gap-2 "
                                                            value={classe.id}
                                                            onChange={
                                                                handleCheckboxChange
                                                            }
                                                        ></Checkbox>
                                                        <label
                                                            htmlFor={`classe-${classe.id}`}
                                                        >
                                                            {classe.intitule +
                                                                " " +
                                                                classe.specialite}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}

                                            <InputError
                                                className="mt-2"
                                                message={errors.classe}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="cour"
                                                value={
                                                    <>
                                                        Cours{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="cour"
                                                className="mt-1 block w-full p-2 border-2"
                                                onChange={(e) =>
                                                    setData(
                                                        "cour",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                {cours.data.map((cour) => (
                                                    <option
                                                        value={cour.intitule}
                                                    >
                                                        {cour.intitule}
                                                    </option>
                                                ))}
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.classe}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="intitule"
                                                value={
                                                    <>
                                                        Intitulé{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="intitule"
                                                className="mt-1 block w-full p-2 border-2"
                                                onChange={(e) =>
                                                    setData(
                                                        "intitule",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                <option value="Devoir Surveillé 1">
                                                    {" "}
                                                    Devoir Surveillé 1
                                                </option>
                                                <option value="Devoir Surveillé 2">
                                                    {" "}
                                                    Devoir Surveillé 2
                                                </option>
                                                <option value="Devoir Surveillé 3">
                                                    {" "}
                                                    Devoir Surveillé 3
                                                </option>
                                                <option value="Examen Normal">
                                                    {" "}
                                                    Examen Normal
                                                </option>
                                                <option value="Examen Rattrapage">
                                                    {" "}
                                                    Examen Rattrapage
                                                </option>
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.classe}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="annee"
                                                value={
                                                    <>
                                                        Annee académique{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="annee"
                                                className="mt-1 block w-full p-2 border-2"
                                                onChange={(e) =>
                                                    setData(
                                                        "annee",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                {annees.data.map((annee) => {
                                                    return (
                                                        <option
                                                            value={
                                                                annee.intitule
                                                            }
                                                        >
                                                            {annee.intitule}
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
                                    <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                        <InputLabel
                                            htmlFor="ressource"
                                            value={
                                                <>
                                                    Ressource{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </>
                                            }
                                        />

                                        <FileInput
                                            id="ressource"
                                            name="ressource"
                                            className="mt-1 block w-full p-2 border-2"
                                            onChange={handleFileChange}
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.ressource}
                                        />
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

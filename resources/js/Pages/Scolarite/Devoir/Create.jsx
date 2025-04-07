import Checkbox from "@/Components/Checkbox";
import DateLocal from "@/Components/DateLocal";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
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
        classes: [],
        intitule: "",
        date_limite: "",
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

        post(route("devoir.store"), {
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
                                                htmlFor="intitule"
                                                value="Intitule"
                                            />

                                            <TextInput
                                                id="intitule"
                                                className="mt-1 block w-full"
                                                value={data.intitule}
                                                onChange={(e) =>
                                                    setData(
                                                        "intitule",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.intitule}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="">
                                            <InputLabel
                                                htmlFor="classe"
                                                value="Classe"
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
                                                value="Cours"
                                            />

                                            <SelectInput
                                                id="cour"
                                                className="mt-1 block w-full"
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
                                                htmlFor="date_limite"
                                                value="Date Limite"
                                            />
                                            <DateLocal
                                                id="date_limite"
                                                className="mt-1 block w-full"
                                                value={data.date_limite}
                                                onChange={(e) =>
                                                    setData(
                                                        "date_limite",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                className="mt-2"
                                                message={errors.classe}
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                        <InputLabel
                                            htmlFor="ressource"
                                            value="Ressource"
                                        />

                                        <FileInput
                                            id="ressource"
                                            name="ressource"
                                            className="mt-1 block w-full"
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

import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Create({ auth, classes, annees, semestres, enseignants }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        volume_horaire: "",
        classes: [],
        intitule: "",
        enseignant: "",
        semestre: "",
    });

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
        console.log("Jarrive ici");
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
                                                value={
                                                    <>
                                                        Intitule{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="intitule"
                                                className="mt-1 block w-full p-2 border-2"
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
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="enseignant"
                                                value={
                                                    <>
                                                        Enseignant{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="enseignant"
                                                className="mt-1 block w-full p-2 border-2"
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
                                                    (enseignant) => (
                                                        <option
                                                            value={
                                                                enseignant.nom +
                                                                " " +
                                                                enseignant.prenom
                                                            }
                                                        >
                                                            {enseignant.nom +
                                                                " " +
                                                                enseignant.prenom}
                                                        </option>
                                                    )
                                                )}
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.enseignat}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="volume_horaire"
                                                value={
                                                    <>
                                                        Volume horaire{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <TextInput
                                                id="volume_horaire"
                                                className="mt-1 block w-full p-2 border-2"
                                                value={data.volume_horaire}
                                                onChange={(e) =>
                                                    setData(
                                                        "volume_horaire",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.volume_horaire}
                                            />
                                        </div>
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="semestre"
                                                value={
                                                    <>
                                                        Semestre{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="semestre"
                                                className="mt-1 block w-full p-2 border-2"
                                                onChange={(e) =>
                                                    setData(
                                                        "semestre",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value=""></option>
                                                {semestres.data.map((sem) => (
                                                    <option value={sem.libelle}>
                                                        {sem.libelle}
                                                    </option>
                                                ))}
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.semestre}
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
                                                            className="mt-1 sm:flex md:flex lg:flex xl:flex gap-2 "
                                                            value={classe.id}
                                                            onChange={
                                                                handleCheckboxChange
                                                            }
                                                        ></Checkbox>
                                                        <span>
                                                            {classe.intitule +
                                                                " " +
                                                                classe.specialite}
                                                        </span>
                                                    </div>
                                                </>
                                            ))}

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

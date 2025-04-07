import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

function Create({ auth, classes }) {
    console.log(classes);
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        classe_id: "",
        etudiant_id: [],
        cour_id: "",
        type: "",
    });

    const [etudiants, setEtudiants] = useState([]);
    const [cours, setCours] = useState([]);

    const handleClasseChange = async (e) => {
        const classeId = e.target.value;
        setData("classe_id", classeId);
        console.log(classeId);
        if (classeId) {
            console.log("Deuxieme log", classeId);
            try {
                const response = await axios.get(
                    `/scolarite/etudiants_classe`,
                    {
                        params: { classe_id: classeId },
                    }
                );
                setEtudiants(response.data);
                const response1 = await axios.get(`/scolarite/cours`, {
                    params: { classe_id: classeId },
                });
                setCours(response1.data);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des étudiants",
                    error
                );
            }
        } else {
            setEtudiants([]);
            setCours([]);
        }
    };

    const handleCheckboxChange = (e) => {
        const value = parseInt(e.target.value);
        if (e.target.checked) {
            setData("etudiant_id", [...data.etudiant_id, value]);
        } else {
            setData(
                "etudiant_id",
                data.etudiant_id.filter((id) => id !== value)
            );
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("sanction.store"));
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
                <Head title="Sanction" />
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
                                                value={data.classe_id}
                                                onChange={handleClasseChange}
                                                required
                                            >
                                                <option value="">
                                                    Sélectionner la classe
                                                </option>
                                                {classes.data.map((classe) => {
                                                    return (
                                                        <option
                                                            value={classe.id}
                                                            key={classe.id}
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

                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="etudiant"
                                                value={
                                                    <>
                                                        Etudiant{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            {etudiants.map((etudiant) => (
                                                <>
                                                    <div className="flex gap-2">
                                                        <Checkbox
                                                            id="classe"
                                                            className="mt-1 sm:flex md:flex lg:flex xl:flex gap-2 "
                                                            value={etudiant.id}
                                                            onChange={
                                                                handleCheckboxChange
                                                            }
                                                        ></Checkbox>
                                                        <span>
                                                            {etudiant.nom +
                                                                " " +
                                                                etudiant.prenom}
                                                        </span>
                                                    </div>
                                                </>
                                            ))}

                                            <InputError
                                                className="mt-2"
                                                message={errors.etudiant_id}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="cours"
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
                                                id="cours"
                                                name="cours"
                                                className="mt-1 block w-full p-2 border-2"
                                                value={data.cour_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "cour_id",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Choisir le cours
                                                </option>
                                                {cours.map((cour) => {
                                                    return (
                                                        <option
                                                            key={cour.id}
                                                            value={cour.id}
                                                        >
                                                            {cour.intitule}
                                                        </option>
                                                    );
                                                })}
                                            </SelectInput>

                                            <InputError
                                                className="mt-2"
                                                message={errors.cour_id}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex-cols md:flex lg:flex xl:flex gap-2 ">
                                        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                            <InputLabel
                                                htmlFor="sanction"
                                                value={
                                                    <>
                                                        Sanction{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </>
                                                }
                                            />

                                            <SelectInput
                                                id="sanction"
                                                name="sanction"
                                                className="mt-1 block w-full p-2 border-2"
                                                value={data.type}
                                                onChange={(e) =>
                                                    setData(
                                                        "type",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Choisir une sanction
                                                </option>
                                                <option value="Retard">
                                                    Retard
                                                </option>
                                                <option value="Absence">
                                                    Absence
                                                </option>
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

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Edit({ auth, user, roles }) {
    console.log(user);
    const {
        data,
        setData,
        put,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        nom: user.data.nom || "",
        prenom: user.data.prenom || "",
        telephone1: user.data.telephone1 || "",
        email: user.data.email || "",
        role: user.data.role.nom_role || "",
        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        put(route("user.update", user.data.id));
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
                                                value="Telephone"
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
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                        <InputLabel
                                            htmlFor="Poste de responsabilite"
                                            value="Poste de responsabilite"
                                        />

                                        <SelectInput
                                            id="Poste de responsabilite"
                                            name="role"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.role}
                                            onChange={(e) =>
                                                setData("role", e.target.value)
                                            }
                                            required
                                        >
                                            <option value=""></option>
                                            {roles.data.map((role) => {
                                                return (
                                                    <option
                                                        key={role.nom_role}
                                                        value={role.nom_role}
                                                    >
                                                        {role.nom_role}
                                                    </option>
                                                );
                                            })}
                                        </SelectInput>

                                        <InputError
                                            className="mt-2"
                                            message={errors.role}
                                        />
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

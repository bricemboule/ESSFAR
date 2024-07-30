import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import { Head, useForm } from "@inertiajs/react";

function Edit({ auth, classe }) {
    console.log(classe);
    const {
        data,
        setData,
        put,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        intitule: classe.data.intitule || "",
        cycle: classe.data.cycle || "",
        status: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        put(route("classe.update", classe.data.id));
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
                <Head title="Update classe" />
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
                                                isFocused
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.intitule}
                                            />
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full">
                                        <InputLabel
                                            htmlFor="cyce"
                                            value="Cycle"
                                        />

                                        <SelectInput
                                            id="cycle"
                                            name="cycle"
                                            className="mt-1 block w-full"
                                            value={data.cycle}
                                            onChange={(e) =>
                                                setData("cycle", e.target.value)
                                            }
                                            required
                                        >
                                            <option value=""></option>
                                            <option value="Licence">
                                                Licence
                                            </option>
                                            <option value="Master">
                                                Master
                                            </option>
                                        </SelectInput>

                                        <InputError
                                            className="mt-2"
                                            message={errors.cycle}
                                        />
                                    </div>

                                    <div className="flex text-sm items-center gap-4 py-4">
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

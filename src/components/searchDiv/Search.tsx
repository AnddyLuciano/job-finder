import { themeState } from "../../states/GlobalStates";
import React from "react";
import { useRecoilState } from "recoil";
import Options from "../input/Options";
import { Select } from "../input/Select";
import { useSortByOption } from "../../hooks/useSortByOption";
import { useTypeOption } from "../../hooks/useTypeOption";
import { useLevelOption } from "../../hooks/useLevelOption";
import { FieldValues, useForm } from "react-hook-form";
import { TextInput } from "../input/TextInput";
import { ResetAllInput } from "../input/ResetAllInput";

const Search = () => {
    const [isDark] = useRecoilState(themeState);
    const { register, handleSubmit, resetField, reset } = useForm();

    const sortByOption = useSortByOption();
    const typeOption = useTypeOption();
    const levelOption = useLevelOption();

    const handleSearchSubmit = (values: FieldValues) => {
        alert(JSON.stringify(values));
    };

    return (
        <div
            className={`search-box grid gap-10 ${
                isDark ? "bg-gray-800" : "bg-secondary"
            } rounded-md p-12`}
        >
            <form onSubmit={handleSubmit(handleSearchSubmit)}>
                <div
                    className={`grid-one flex items-center justify-between flex-wrap ${
                        isDark ? "bg-gray-700" : "bg-white"
                    } shadow-sm py-3 px-5 rounded-md`}
                >
                    <TextInput
                        name="inputJobSearch"
                        register={register}
                        resetField={resetField}
                        placeholder="Search Job Here"
                        isDark={isDark}
                    />
                    <TextInput
                        name="inputCompanySearch"
                        register={register}
                        resetField={resetField}
                        placeholder="Search By Company"
                        isDark={isDark}
                    />
                    <TextInput
                        name="inputLocationSearch"
                        register={register}
                        resetField={resetField}
                        placeholder="Search By Location"
                        isDark={isDark}
                    />
                    <input
                        type="submit"
                        className="py-3 px-5 rounded-md bg-primary text-white hover:opacity-90"
                        value={"Search"}
                    />
                </div>
            </form>
            <div className="filter-box flex items-center justify-center gap-10">
                <Select isDark={isDark} label="Sort by" {...register("sortBy")}>
                    <Options options={sortByOption} />
                </Select>
                <Select isDark={isDark} label="Level" {...register("level")}>
                    <Options options={levelOption} />
                </Select>
                <Select isDark={isDark} label="Type" {...register("type")}>
                    <Options options={typeOption} />
                </Select>
                <ResetAllInput isDark={isDark} reset={reset} />
            </div>
        </div>
    );
};

export default Search;

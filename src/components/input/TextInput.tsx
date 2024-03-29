import React from "react";
import { FieldValues, UseFormRegister, UseFormResetField } from "react-hook-form";

export const TextInput = ({ isDark, register, name, placeholder, resetField }: TextInputProps) => {
    return (
        <div className="input-job-search flex gap-2 items-center">
            <i className="fa-solid fa-magnifying-glass hover:cursor-pointer text-base"></i>
            <input
                type="text"
                id="input-search"
                {...register(name)}
                className={`bg-transparent focus:outline-none w-full text-gray-500 ${
                    isDark ? "focus:text-white" : "focus:text-gray-950"
                }`}
                placeholder={placeholder}
            />
            <i
                className="fa-regular fa-circle-xmark text-base hover:opacity-70 hover:cursor-pointer"
                onClick={() => resetField(name)}
            ></i>
        </div>
    );
};

export type TextInputProps = Omit<Partial<HTMLInputElement>, "name"> & {
    name: string;
    isDark: boolean;
    register: UseFormRegister<FieldValues>;
    resetField: UseFormResetField<FieldValues>;
};

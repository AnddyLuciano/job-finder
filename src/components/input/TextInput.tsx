import React from "react";
import { FieldValues, UseFormRegister, UseFormResetField } from "react-hook-form";
import { BaseControl } from "../control/BaseControl";

export const TextInput = (props: TextInputProps) => {
    return (
        <BaseControl {...props}>
            <div className="input-text flex gap-2 items-center">
                <i className="fa-solid fa-magnifying-glass hover:cursor-pointer text-base"></i>
                <input
                    type="text"
                    id="input-search"
                    {...props.register(props.name)}
                    className={`bg-transparent focus:outline-none w-full text-gray-500 ${
                        props.isDark ? "focus:text-white" : "focus:text-gray-950"
                    }`}
                    placeholder={props.placeholder}
                />
                <i
                    className="fa-regular fa-circle-xmark text-base hover:opacity-70 hover:cursor-pointer"
                    onClick={() => props.resetField(props.name)}
                ></i>
            </div>
        </BaseControl>
    );
};

export type TextInputProps = Omit<Partial<HTMLInputElement>, "name"> & {
    name: string;
    isDark: boolean;
    register: UseFormRegister<FieldValues>;
    resetField: UseFormResetField<FieldValues>;
};

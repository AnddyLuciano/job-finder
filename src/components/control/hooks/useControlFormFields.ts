import { ReactNode, useMemo } from "react";
import { TextInput } from "../../input/TextInput";

export const useControlFormFields = (fields?: ControlFormFields) =>
    useMemo(
        () => ({
            text: TextInput,
            ...(fields || []),
        }),
        [fields]
    );

export type ControlFormFields = {
    [x: string]: ReactNode;
};

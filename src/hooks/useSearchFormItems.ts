import { useMemo } from "react";
import { ControlListProps } from "../components/control/ControlList";

export const useSearchFormItem = () => {
    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: "text",
                        name: "inputSearchJob",
                        placeholder: "Search Job Here",
                    },
                    {
                        type: "text",
                        name: "inputSearchCompany",
                        placeholder: "Search By Company",
                    },
                    {
                        type: "text",
                        name: "inpuSearchLocation",
                        placeholder: "Search By Location",
                    },
                ],
                hideBack: true,
                SubmitBtn: {
                    type: "submit",
                    value: "Search",
                },
            },
            onSubmit: (values) => {
                console.log(values);
                alert(JSON.stringify(values));
            },
        };
    }, []);
};

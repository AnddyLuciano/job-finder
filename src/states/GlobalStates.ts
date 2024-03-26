import { atom } from "recoil";

export const themeState = atom({
    key: "themeState",
    default: Boolean(),
});

export const jobFilterState = atom({
    key: "jobFilterState",
    default: {
        inputJobSearch: "",
        inputCompanySearch: "",
        inputLocationSearch: "",
    },
});

import { create } from "zustand";

const getTheme = () => {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "false");
    }
    const theme = JSON.parse(localStorage.getItem("theme")!) as boolean;
    return theme;
};

export const useThemeStore = create<Action & State>((set) => ({
    isDark: getTheme(),
    setTheme: (isDark) =>
        set(() => {
            localStorage.setItem("theme", isDark.toString());
            return {
                isDark: isDark,
            };
        }),
}));

type State = {
    isDark: boolean;
};

type Action = {
    setTheme: (isDark: State["isDark"]) => unknown;
};

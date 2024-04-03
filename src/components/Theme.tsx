import { useEffect } from "react";
import { useThemeStore } from "../states/GlobalZustandStates";

export const Theme = () => {
    const { isDark, setTheme } = useThemeStore((state) => ({
        isDark: state.isDark,
        setTheme: state.setTheme,
    }));

    const handleClick = () => {
        setTheme(!isDark);
    };

    useEffect(() => {
        if (isDark) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }
    }, [isDark]);

    return (
        <div
            className={`fixed hover:cursor-pointer bottom-10 right-10 rounded-full border-2 w-14 h-14 hover:opacity-80 ${
                isDark
                    ? "bg-gray-800 text-white shadow-white"
                    : "bg-white text-gray-800 shadow-gray-800"
            }`}
            onClick={handleClick}
        >
            {isDark ? (
                <div className="h-full flex items-center justify-center text-2xl">
                    <i className="fa-regular fa-sun"></i>
                </div>
            ) : (
                <div className="h-full flex items-center justify-center text-2xl">
                    <i className="fa-regular fa-moon"></i>
                </div>
            )}
        </div>
    );
};

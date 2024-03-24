import { useRecoilState } from "recoil";
import { themeState } from "../states/GlobalStates";
import { useEffect } from "react";

export const Theme = () => {
    const [isDark, setIsDark] = useRecoilState(themeState);
    const handleClick = () => {
        setIsDark(!isDark);
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
                    ? "bg-slate-600 text-white shadow-white"
                    : "bg-white text-slate-600 shadow-slate-600"
            }`}
            onClick={handleClick}
        >
            <div className="h-full flex items-center justify-center text-2xl">
                <i className="fa-regular fa-moon"></i>
            </div>
        </div>
    );
};

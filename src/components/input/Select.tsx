import { jobFilterState } from "../../states/GlobalStates";
import React, { ChangeEvent, PropsWithChildren, useEffect } from "react";
import { useRecoilState } from "recoil";
export function Select({
    isDark,
    children,
    label,
    name,
}: { isDark: boolean; label: string; name: string } & PropsWithChildren) {
    const [filter, setFilter] = useRecoilState(jobFilterState);

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log(filter);
    }, [filter]);

    return (
        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="font-semibold">
                {/* Sort by: */}
                {label}
            </label>
            <select
                name={name}
                id="relevance"
                className={`py-2 px-4  ${
                    isDark
                        ? "[&>*]:bg-gray-950 bg-gray-900 border border-white"
                        : "[&>*]:bg-white bg-white"
                } focus:outline-none`}
                onChange={handleSelectChange}
            >
                {children}
            </select>
        </div>
    );
}

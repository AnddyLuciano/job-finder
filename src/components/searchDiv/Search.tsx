import { jobFilterState, themeState } from "../../states/GlobalStates";
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import Options from "../input/Options";
import { Select } from "../input/Select";
import { useSortByOption } from "../../hooks/useSortByOption";
import { useTypeOption } from "../../hooks/useTypeOption";
import { useLevelOption } from "../../hooks/useLevelOption";

const Search = () => {
    const [isDark] = useRecoilState(themeState);
    const [filter, setFilter] = useRecoilState(jobFilterState);

    const sortByOption = useSortByOption();
    const typeOption = useTypeOption();
    const levelOption = useLevelOption();

    const handleInputSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };
    const handleEraseJobInput = () => {
        setFilter({ ...filter, inputJobSearch: "" });
    };

    const handleEraseCompanyInput = () => {
        setFilter({ ...filter, inputCompanySearch: "" });
    };
    const handleEraseLocationInput = () => {
        setFilter({ ...filter, inputLocationSearch: "" });
    };

    return (
        <div
            className={`search-box grid gap-10 ${
                isDark ? "bg-gray-800" : "bg-secondary"
            } rounded-md p-12`}
        >
            <form>
                <div
                    className={`grid-one flex items-center justify-between flex-wrap ${
                        isDark ? "bg-gray-700" : "bg-white"
                    } shadow-sm py-3 px-5 rounded-md`}
                >
                    <div className="input-job-search flex gap-2 items-center">
                        <i className="fa-solid fa-magnifying-glass hover:cursor-pointer text-base"></i>
                        <input
                            type="text"
                            id="input-search"
                            name="inputJobSearch"
                            className={`bg-transparent focus:outline-none w-full text-gray-500 ${
                                isDark ? "focus:text-white" : "focus:text-gray-950"
                            }`}
                            placeholder="Search Job Here"
                            onChange={handleInputSearchChange}
                            value={filter.inputJobSearch}
                        />
                        <i
                            className="fa-regular fa-circle-xmark text-base hover:opacity-70 hover:cursor-pointer"
                            onClick={handleEraseJobInput}
                        ></i>
                    </div>

                    <div className="input-company-search flex gap-2 items-center">
                        <span className="material-symbols-outlined hover:cursor-pointer">home</span>
                        <input
                            type="text"
                            id="input-search"
                            name="inputCompanySearch"
                            className={`bg-transparent focus:outline-none w-full text-gray-500 ${
                                isDark ? "focus:text-white" : "focus:text-gray-950"
                            }`}
                            placeholder="Search By Company"
                            onChange={handleInputSearchChange}
                            value={filter.inputCompanySearch}
                        />
                        <i
                            className="fa-regular fa-circle-xmark text-base hover:opacity-70 hover:cursor-pointer"
                            onClick={handleEraseCompanyInput}
                        ></i>
                    </div>

                    <div className="flex gap-2 items-center">
                        <span className="material-symbols-outlined">location_on</span>
                        <input
                            type="text"
                            id="input-search"
                            name="inputLocationSearch"
                            className={`bg-transparent focus:outline-none w-full text-gray-500 ${
                                isDark ? "focus:text-white" : "focus:text-gray-950"
                            }`}
                            placeholder="Search By Location"
                            onChange={handleInputSearchChange}
                            value={filter.inputLocationSearch}
                        />
                        <i
                            className="fa-regular fa-circle-xmark text-base hover:opacity-70 hover:cursor-pointer"
                            onClick={handleEraseLocationInput}
                        ></i>
                    </div>
                    <button className="py-3 px-5 rounded-md bg-primary text-white hover:opacity-90">
                        <strong>Search</strong>
                    </button>
                </div>
            </form>
            <div className="filter-box flex items-center justify-center gap-10">
                <Select isDark={isDark} label="Sort by" name="sortBy">
                    <Options options={sortByOption} />
                </Select>
                <Select isDark={isDark} label="Level" name="level">
                    <Options options={levelOption} />
                </Select>
                <Select isDark={isDark} label="Type" name="type">
                    <Options options={typeOption} />
                </Select>
                <p
                    className={`hover:cursor-pointer hover:opacity-80 ${
                        isDark ? "bg-gray-900 border border-white text-white" : "bg-white text-body"
                    } shadow-sm py-1 px-3 rounded-full`}
                >
                    Clear all
                </p>
            </div>
        </div>
    );
};

export default Search;

import React from "react";
import { useMenuList } from "../../hooks/useMenuList";

const Navbar = () => {
    const menulists = useMenuList();
    return (
        <div className="flex items-center justify-between py-8">
            <div className="logo-box">
                <p className="text-xl">
                    <strong className="text-primary">Job</strong> Finder
                </p>
            </div>
            <div className="menu-box flex gap-10">
                {menulists.map((list) => (
                    <li key={list.key} className="menuList hover:text-primary">
                        {list.item}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Navbar;

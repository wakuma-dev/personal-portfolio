import React from "react";
import useThemeStore from "../app/store/useThemeStore";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
export default function ThemeToggle(){
    const {theme, toggleTheme} = useThemeStore();
    return(
    <button onClick={toggleTheme}>
     {theme === "light" ? <FaRegMoon /> : <FiSun />}
    </button>
    );
}
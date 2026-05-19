import { NavLink } from "react-router-dom";
import useThemeStore from "../../../app/store/useThemeStore";

export default function Logo() {
  const { theme } = useThemeStore();

  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <NavLink
      to="/"
      className={`text-[24px] leading-[22px] tracking-tight font-medium transition-all duration-150 ${textColor}`}
    >
      Wakuma H<span className="text-[#800020] font-bold">.</span>
    </NavLink>
  );
}

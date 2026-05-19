import React, {memo} from 'react';
import ThemeToggle from '../../ThemeToggle';
import useThemeStore from '../../../app/store/useThemeStore';
const Navbar = memo(function Navbar({isScrolled}){
    const { theme } = useThemeStore();
    return(
    <nav className={`${theme === "light" ? "bg-white text-black"
    : "bg-black text-white"} fixed top-0 left-0 w-full transition-all backdrop-blur-xl duration-150 flex items-center justify-between px-4 md:px-8 
     lg:px-12 py-3 lg:py-5 ${isScrolled ? "shadow-md" : "" }`}>
        <ThemeToggle />
    </nav>
    )
});
export default Navbar;
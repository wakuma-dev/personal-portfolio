import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from '../../../constants/navLinks';
import useThemeStore from '../../../app/store/useThemeStore';
const NavMenu = memo(function NavMenu(){
    const {theme} = useThemeStore();
    return(
        <div className="hidden lg:flex items-center gap-4">
            <ul className='flex items-center gap-6'>
                {navLinks.map((item)=> {
                    return (
                      <li key={item.path}>
                      <NavLink to={item.path}
                        className= {({isActive}) => `relative after:absolute after:-bottom-1 after:left-0 after:h-[1px]
                         after:bg-[#800020] after:w-0 after:transition-all after:duration-150 hover:after:w-full
                         transition-all duration-150 ${theme === "light" ? "text-black" : "text-white"}
                         ${isActive ? "text-[#800020]" : "" }`}>
                            {item.name}
                         </NavLink>
                      </li>
                    );
                })}
            </ul>
        </div>
    )
});
export default NavMenu;
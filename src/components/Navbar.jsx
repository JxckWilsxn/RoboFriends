import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <ul className='flex justify-center sm:justify-start sm:ml-10 gap-15 my-[25px] text-2xl text-[#181818] dark:text-[#f5f5f5] font-semibold'>
            <li>
                <NavLink to='/'>
                    <button className="hover-underline-animation active:text-[#0077FF]">Browse</button>
                </NavLink>
            </li>
            <li>
                <NavLink to='/friendlist'>
                    <button className="hover-underline-animation active:text-[#0077FF]">Friends</button>
                </NavLink>
            </li>
        </ul>
    )
}
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <ul className='flex gap-15 justify-center m-[50px] text-2xl text-[#181818] dark:text-[#f5f5f5] font-semibold'>
            <li>
                <NavLink to='/'>
                    <button className="hover-underline-animation uppercase">Browse</button>
                </NavLink>
            </li>
            <li>
                <NavLink to='/friendlist'>
                    <button className="hover-underline-animation uppercase">Friends</button>
                </NavLink>
            </li>
        </ul>
    )
}
import React from "react";
import { useOutletContext } from 'react-router-dom';
import { TbMessage } from "react-icons/tb";

const RemoveButton = ({ id }) => {
    const { removeFriend, messageClick } = useOutletContext(); // get the function from Layout

    const handleClick = () => {
        console.log(id);
        removeFriend(id); // remove this robot's ID from the friend list
    }

    return (
        <div className="flex">
            <button className='bg-black hover:bg-red-600 text-white cursor-pointer p-2 rounded-xl w-[100%]' onClick={handleClick}>
                Remove Friend
            </button>
            <div className="flex justify-center">
                <button onClick={messageClick} className="bg-[#ffffff] text-black  dark:bg-[#474747] dark:text-white text-xl p-2 px-4 ml-5 rounded-lg hover:bg-[#0077FF] hover:text-white">
                    <TbMessage />
                </button>
            </div>
        </div>
    )
}
export default RemoveButton; 
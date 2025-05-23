import React from "react";
import { useOutletContext } from 'react-router-dom';

const RemoveButton = ({ id }) => {
    const { removeFriend } = useOutletContext(); // get the function from Layout

    const handleClick = () => {
        console.log(id);
        removeFriend(id); // add this robot's ID to the friend list
    }

    return (
        <button className='bg-black hover:bg-red-600 text-white cursor-pointer p-2 rounded-xl w-[100%]' onClick={handleClick}>
            Remove Friend
        </button>
    )
}
export default RemoveButton; 
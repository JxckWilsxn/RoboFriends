import React from 'react';
import { useOutletContext } from 'react-router-dom';

const AddButton = ({ id }) => {
    const { addFriend } = useOutletContext(); // get the function from Layout
    
    const handleClick = () => {
        console.log(id);
        addFriend(id); // add this robot's ID to the friend list
    }

    return (
        <button className='bg-white dark:bg-[#474747] hover:bg-blue-500 hover:text-white cursor-pointer p-2 rounded-xl w-[100%]' onClick={handleClick}>
            Add Friend
        </button>
    )
};

export default AddButton;
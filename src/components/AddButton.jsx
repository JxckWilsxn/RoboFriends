import React from 'react';
import { useOutletContext } from 'react-router-dom';

const AddButton = ({ id }) => {
    const { addFriend } = useOutletContext(); // get the function from Layout
    
    const handleClick = () => {
        console.log(id);
        addFriend(id); // add this robot's ID to the friend list
    }

    return (
        <div className='flex justify-center'>
        <button className='bg-white dark:bg-[#474747] hover:bg-[#0077FF] hover:text-white cursor-pointer p-2 rounded-xl w-[100%]' onClick={handleClick}>
            Add Friend
        </button>
        </div>
    )
};

export default AddButton;
import React from 'react'
import AddButton from './AddButton'
import RemoveButton from  './RemoveButton'
import { useOutletContext } from 'react-router-dom';

const Card = ({ name, email, id }) => {
    const { friendsIds } = useOutletContext(); // get the function from friendlist

    return (
        <div className="text-center bg-[#00000027] dark:bg-[#202020] backdrop-blur-sm text-black dark:text-white inline-block rounded-xl p-3 m-2 shadow-xl duration-100 hover:scale-105 active:scale-95">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{email}</p>
              
                { friendsIds.includes(id) ? (
                    <RemoveButton id={id}/>
                ) : (
                    <AddButton id={id}/>        
                )}
       
            </div>
        </div>
    );
}

export default Card;
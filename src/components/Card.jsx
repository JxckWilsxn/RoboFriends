import React from 'react';
import AddButton from './AddButton';
import RemoveButton from  './RemoveButton';
import Pin from './Pin';
import Unpin from './Unpin';
import { useOutletContext } from 'react-router-dom';

const Card = ({ name, email, id }) => {
    const { friendsIds, pinnedIds } = useOutletContext(); // get the function from friendlist

    return (
        <div className="text-center bg-[#00000027] dark:bg-[rgb(32,32,32)] backdrop-blur-sm text-black dark:text-white inline-block rounded-xl p-5 m-3 shadow-xl w-[400px] duration-100 hover:scale-105 active:scale-95 group">
            { pinnedIds.includes(id) ? (
                <Unpin id={id}/>
            ) : (
                <Pin id={id}/>      
            )}

            <img src={`https://ui-avatars.com/api/?name=${name}&size=75&background=random&rounded=true`} alt="robots" className="m-auto p-2.5"/>

            <div className='m-2.5'>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{email}</p>
            </div>

   
            { friendsIds.includes(id) ? (
                <RemoveButton id={id}/>
            ) : (
                <AddButton id={id}/>        
            )}
        </div>
    );
}

export default Card;
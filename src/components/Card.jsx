import React from 'react';
import AddButton from './AddButton';
import RemoveButton from  './RemoveButton';
import Pin from './Pin';
import Unpin from './Unpin';
import { useOutletContext } from 'react-router-dom';

const Card = ({ name, email, id }) => {
    const { friendsIds, pinnedIds } = useOutletContext(); // get the function from friendlist

    return (
        <div className="text-center bg-[#a5a3a355] dark:bg-[#2b2b2b55] backdrop-blur-sm text-black dark:text-white inline-block rounded-xl p-5 m-3 shadow-xl w-[300px] sm:w-[350px] duration-100 hover:scale-105 active:scale-95 group">
            {friendsIds.includes(id) ? (
                pinnedIds.includes(id) ? (
                    <Unpin id={id}/>
                ) : (
                    <Pin id={id}/>
                )   
            ) : (
                ''        
            )}

            <img src={`https://ui-avatars.com/api/?name=${name}&size=75&background=random&rounded=true`} alt="people" className="m-auto p-2.5"/>

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
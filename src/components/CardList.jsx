import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {  
    return (
        <div>
            {
                people.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={people[i].id}
                            name={people[i].name} 
                            email={people[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;
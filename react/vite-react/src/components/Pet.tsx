import React from 'react';

interface PetProps {
    name: string;
    type: string;
    age: number;
    breed?: string;
}

const Pet: React.FC<PetProps> = ({ name, type, age, breed = 'Unknown' }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
        </div>
    );
};

export default Pet;

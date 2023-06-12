import React from 'react';

interface MovieProps {
    title: string;
    director: string;
    year: number;
    studio: string;
}

const Movie: React.FC<MovieProps> = ({ title, director, year, studio }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Director: {director}</p>
            <p>Year: {year}</p>
            <p>Studio: {studio}</p>
        </div>
    );
};

export default Movie;

import React from 'react'
import Texttruncate from "react-text-truncate";
import './card.css'


const baseURL = "https://image.tmdb.org/t/p/original/";

function Card({movies}) {
    return (
        <div className="card">
            <img src={`${baseURL}${movies.backdrop_path || movies.poster_path}`} alt="hulu"/>

            <Texttruncate
            line={1}
            element="p"
            truncateText="...."
            text={movies?.overview}
            />

            <h2>{movies?.title || movies?.original_title || movies?.name}</h2>

           
        </div>
    )
}

export default Card

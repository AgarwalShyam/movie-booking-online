import React from "react";

// src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}

export const MovieCard = movie => {
    const imageUrl = "images" + movie.poster_path;
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            <img
                src={imageUrl}
                alt={`${movie.title} Poster`}
            />
            <h5><b>Title: {movie.title}</b></h5>
            <p>Release Date : {movie.release_date}</p>
            <p>Cast : {movie.cast}</p>
            <p>Rating : {movie.vote_average}</p>
        </div>

    );
};

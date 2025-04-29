import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movieData = {
  1: { title: "Inception", time: "148 min", genres: ["Action", "Sci-Fi"] },
  2: { title: "The Dark Knight", time: "152 min", genres: ["Action", "Drama"] },
  3: { title: "Interstellar", time: "169 min", genres: ["Adventure", "Drama"] },
};

function Movie() {
  const { id } = useParams();
  const movie = movieData[id];

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;

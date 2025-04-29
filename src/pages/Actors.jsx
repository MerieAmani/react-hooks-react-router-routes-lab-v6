import React from "react";
import NavBar from "../components/NavBar";

const actors = [
  { name: "Leonardo DiCaprio", movies: ["Inception", "The Revenant", "Titanic"] },
  { name: "Christian Bale", movies: ["The Dark Knight", "American Psycho", "Ford v Ferrari"] },
];

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;

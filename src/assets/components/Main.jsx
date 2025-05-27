import { useState } from "react";
import { useEffect } from "react";

import moviesData from "../data/movies.js";
import MovieList from "./movieComponents/MovieList.jsx";

export default function Main() {
  const [filteredCategory, setFilteredCategory] = useState("");
  const [filteredFormTitle, setFilteredFormTitle] = useState("");
  const [movies, setMovies] = useState(moviesData);

  function handleSubmit(e) {
    e.preventDefault();
    setFilteredFormTitle("");
  }

    useEffect(() => {
    const newMovies = moviesData.filter((movie) => {
      return movie.title.includes(filteredFormTitle);
      });
      setMovies(newMovies);

      // const filteredMovies = moviesData.filter((movie) => {
      //   return movie.category == filteredCategory;
      //  });
      // setMovies(filteredMovies);

  
    }, [filteredFormTitle, filteredCategory]);

  return (
    <div className="container">
      <div className="d-flex gap-2">


        <select className="form-select mb-3" 
        onChange={(e) => {setFilteredCategory(e.target.value)}}
        value={filteredCategory}
        >
            <option value={""}>Seleziona genere</option>

          {movies.map((movie, index) => (
            <option value={movie.category} key={index}>
              {movie.category}
            </option>
          ))}
        </select>


        <form className="form-control p-0 mb-3" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            onChange={(e) => {
              setFilteredFormTitle(e.target.value);
            }}
            value={filteredFormTitle}
          />
        </form>
      </div>

      <MovieList movies={movies} />
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import './MovieList.css';
import CardComponent from "../CardComponents/CardComponent";

const MovieListComponent = () => {
  const [movieList, setmovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=ba459dac6cdd108489a812d21d100cde&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setmovieList(data.results));
  }, [type]);

  return (
    <>
      <div className="movie-list">
        <h2 className="list-title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list-cards">
          {movieList.map((movie,index) => {
            return <CardComponent key={index} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieListComponent;

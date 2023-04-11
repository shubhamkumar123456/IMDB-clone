import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import MovieListComponent from "..//Components/MovieComponent/MovieList";

const Home = () => {
  const [movies, setmovies] = useState([]);

  // const dataMovies = async ()=>{
  //   const { data }= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ba459dac6cdd108489a812d21d100cde&language=en-US&page=1")
  //   console.log(data);
  // }
  // dataMovies();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ba459dac6cdd108489a812d21d100cde&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setmovies(data.results));
  }, []);
  return (
    <>
      <div>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map((movie,index) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`movies/${movie.id}`} key={index}
              >
                <div className="carasooul-image">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt="CarasoulImage"
                  />
                </div>
                <div className="image-over-content">
                  <div className="movie-title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="movie-overview">
                    {movie.overview}
                  </div>
                  <div className="movie-release-date">
                    {movie ? movie.release_date : ""}
                    <span className="movie-rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
        <MovieListComponent/>
      </div>
    </>
  );
};

export default Home;

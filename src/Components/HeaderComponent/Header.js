import react from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="img-container">
          <Link to="/">
            <img
              className="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="imdb"
              height="50px"
            />
          </Link>
          <Link className="link" to="/movies/popular">
            Popular
          </Link>
          <Link className="link" to="/movies/top_rated">
            Top Rated
          </Link>
          <Link className="link" to="/movies/now_playing">
            Now Playing
          </Link>

          <Link className="link" to="/movies/upcoming">
            Upcoming
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;

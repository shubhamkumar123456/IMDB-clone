import React from "react";
import "./SearchComponent.css";
import { useState, useEffect } from "react";
import CardComponent from "../CardComponents/CardComponent";

const SearchComponent = () => {
  const [Searchtext, setSearchtext] = useState("");
  const [result, setresult] = useState([]);

  const searchMovie = (event) => {
    const searchKey = event.target.value;
    setSearchtext(searchKey);
  };
  const movieSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ba459dac6cdd108489a812d21d100cde&language=en-US&query=${Searchtext}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => setresult(data.results));
  }, [Searchtext]);
  return (
    <>
      <div className="search_box">
        <form action="" >
          <label>Search Movie Here : </label>
          <input
            onChange={searchMovie}
            className="input"
            type="text"
            value={Searchtext}
            name="seacrhMovie"
            id=""
            size="50"
            placeholder=" Movie Name Here"
          />
          {/* <button className="btn">Submit</button> */}
        </form>
      </div>
      <div className="search-container">{result.map((movie) => {
        return <CardComponent movie={movie}/>
      })}</div>
    </>
  );
};

export default SearchComponent;

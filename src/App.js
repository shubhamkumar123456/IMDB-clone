import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/HeaderComponent/Header"
import Home from "./Pages/Home";
import MovieListComponent from "./Components/MovieComponent/MovieList";
import MovieDetails from "./Pages/MovieDeatails/MovieDetail"
import SearchComponent from "./Components/SearchComponent/SearchComponent"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SearchComponent/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<MovieDetails/>}></Route>
          <Route path="movies/:type" element={<MovieListComponent/>}></Route>
          <Route path="/*" element={"error"}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

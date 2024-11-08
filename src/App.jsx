import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import MovieInfo from "./Components/MovieInfo";
import { getGenres, getMovies, getMovieInfo } from "./assets/api-functions";

export default function App() {

  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(28);
  const [movie, setMovie] = useState({});


  useEffect(() => {
    async function fetchGenres() {
      const genres = await getGenres();
      setGenreList(genres);
      setSelectedGenre(genres[0].id);
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    async function fetchNewMovie() {
      const movies = await getMovies(selectedGenre);
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      const info = await getMovieInfo(randomMovie);
      setMovie(info);
    }
    fetchNewMovie();
  }, [selectedGenre]);

  function onChange(e) {
    setSelectedGenre(e.target.value);
  }

  return (
    <div className="container">
    <Header />
    <Form genreList={genreList} onChange={onChange}/>
    <MovieInfo movie={movie}/>
  </div>
  )
}

export default function MovieInfo({movie}) {
const moviePosterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <div id="movieInfo">
      <h2 id="movieTitle">{movie.title}</h2>
        <div id="moviePoster">
          <img src={moviePosterUrl} id="moviePoster"/>
        </div>
        <div id="movieText">
          <p id="movieOverview">{movie.overview}</p>
          <p id="releaseDate">{movie.release_date}</p>
        </div>
    </div>
  );
}
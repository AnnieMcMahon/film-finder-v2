const getGenres = async () => {
  const tmdbKey = import.meta.env.VITE_TMDB_KEY;
  const tmdbBaseUrl = "https://api.themoviedb.org/3";
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.genres;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async (genre) => {
  const tmdbKey = import.meta.env.VITE_TMDB_KEY;
  const tmdbBaseUrl = "https://api.themoviedb.org/3";
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=${tmdbKey}&with_genres=${genre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.results;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const tmdbKey = import.meta.env.VITE_TMDB_KEY;
  const tmdbBaseUrl = "https://api.themoviedb.org/3";
  const movieEndpoint = `/movie/${movie.id}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getGenres, getMovies, getMovieInfo };

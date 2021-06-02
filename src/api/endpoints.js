const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`,
  fetchAnimeMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=true&with_genres=16&with_original_language=ja&with_watch_monetization_types=flatrate`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=popularity.desc`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc`,
  fetchIndianMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=true&with_original_language=hi&with_watch_monetization_types=flatrate`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc`,
  fetchAnime: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16&with_original_language=ja&with_watch_monetization_types=flatrate`,
  fetchWebSeries: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
};

export default requests;

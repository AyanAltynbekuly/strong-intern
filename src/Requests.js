const key = "b35975b395cd8f8fc8d2b7b04f349634";

const requests = {
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestRecommendations: `https://api.themoviedb.org/3/movie/550/recommendations?api_key=${key}&language=en-US&page=1`,
  requestBollywoodClassics: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=hi-IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  requestSearchMulti: `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=1&include_adult=false`,
};

export default requests;

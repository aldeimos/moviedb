const API_KEY = '52f110ad1b13b1b6c28850d706a5eb73';
const BASE_END_POINT = 'https://api.themoviedb.org/3/';

export const getMovie = async (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then((response) => response.json());
};

export const getPopularFilms = async (page = 1) => {
    return fetch(`${BASE_END_POINT}movie/popular?api_key=${API_KEY}&page=${page}`)
      .then((response) => response.json());
};

export const getGenres = async () => {
    return fetch(`${BASE_END_POINT}genre/movie/list?api_key=${API_KEY}`)
      .then((response) => response.json());
};




import * as types from './actions';

export const loadPopular = (popular_films) => {
  return {
    type: types.LOAD_POPULAR,
    popular_films
  }
};

export const loadMorePopular = (films) => {
  return {
    type: types.LOAD_MORE_POPULAR,
    films
  }
};

export const loadGenres = (genres) => {
  return {
    type: types.LOAD_GENRES,
    genres
  }
};

export const loadFilmDetails = (film_details) => {
  return {
    type: types.LOAD_FILM_DETAILS,
    film_details
  }
};

export const addToFavorites = (film) => {
  return {
    type: types.ADD_TO_FAVORITES,
    film
  }
};

export const deleteFromFavorites = (filmId) => {
  return {
    type: types.DELETE_FROM_FAVORITES,
    filmId
  }
};

export const setFilterMode = (filterMode) => {
  return {
    type: types.SET_FILTER_MODE,
    filterMode
  }
};

export const setSortMode = (sortMode) => {
  return {
    type: types.SET_SORT_MODE,
    sortMode
  }
};

export const setSearchValue = (searchValue) => {
  return {
    type: types.SET_SEARCH_VALUE,
    searchValue
  }
};

import * as types from './actions';

export const loadPopular = (popular_films) => {
  return {
    type: types.LOAD_POPULAR,
    popular_films
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

import * as types from './actions';

const initialState = {
  popular_films: [],
  favorites_films: [],
  genres: [],
  film_details: {},
  filterMode: 'popular',
  sortMode: 'default'
};


const films = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_POPULAR:
      const { popular_films } = action;
      return {
        ...state,
        popular_films
      };
    case types.LOAD_MORE_POPULAR:
      const { films } = action;
      return {
        ...state,
        popular_films: [...state.popular_films, ...films]
      };
    case types.LOAD_GENRES:
      const { genres } = action;
      return {
        ...state,
        genres
      };
    case types.LOAD_FILM_DETAILS:
      const { film_details } = action;
      return {
        ...state,
        film_details
      };
    case types.ADD_TO_FAVORITES:
      const { film } = action;
      return {
        ...state,
        favorites_films: [...state.favorites_films, film]
      };
    case types.DELETE_FROM_FAVORITES:
      const { filmId } = action;
      return {
        ...state,
        favorites_films: state.favorites_films.filter((stateFilm) => stateFilm.id !== filmId)
      };
    case types.SET_FILTER_MODE:
      const { filterMode } = action;
      return {
        ...state,
        filterMode
      };
    default: return state;
  }
};

export default films;

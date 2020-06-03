import * as types from './actions';

const initialState = {
  popular_films: [],
  favorites_films: JSON.parse(localStorage.getItem('favorites_films') || "[]"),
  genres: [],
  film_details: {},
  filterMode: 'popular',
  sortMode: 'default',
  searchValue: ''
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
      const added = [...state.favorites_films, film];
      localStorage.setItem('favorites_films', JSON.stringify(added));
      return {
        ...state,
        favorites_films: added
      };
    case types.DELETE_FROM_FAVORITES:
      const { filmId } = action;
      const deleted = state.favorites_films.filter((stateFilm) => stateFilm.id !== filmId);
      localStorage.setItem('favorites_films', JSON.stringify(deleted));
      return {
        ...state,
        favorites_films: deleted
      };
    case types.SET_FILTER_MODE:
      const { filterMode } = action;
      return {
        ...state,
        filterMode
      };
    case types.SET_SORT_MODE:
      const { sortMode } = action;
      return {
        ...state,
        sortMode
      };
    case types.SET_SEARCH_VALUE:
      const { searchValue } = action;
      return {
        ...state,
        searchValue
      };
    default: return state;
  }
};

export default films;

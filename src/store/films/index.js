import * as types from './actions';

const initialState = {
  popular_films: [],
  favorites_films: []
};


const films = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_POPULAR:
      const { popular_films } = action;
      return {
        ...state,
        popular_films
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
      }
  }
};

export default films;

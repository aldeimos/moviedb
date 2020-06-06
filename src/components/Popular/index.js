import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmCard } from '../FilmCard';

import './index.scss';
import { sortFilms } from '../../utils/sortingFilms';

export const Popular = ({genres, favoritesFilms, sortMode, searchValue}) => {
  const popularFilms = useSelector((store) => store.films.popular_films);


  const sortedFilms = sortFilms(popularFilms, sortMode);

  return (
    <>
      {sortedFilms && sortedFilms
        .filter((film) => film.title.toLowerCase().includes(searchValue.toLowerCase())).length !== 0 ?
        sortedFilms
          .filter((film) => film.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((film) => <FilmCard
          key={film.id}
          id={film.id}
          vote_average={film.vote_average}
          release_date={film.release_date}
          overview={film.overview}
          poster_path={film.poster_path}
          title={film.title}
          runtime={film.runtime}
          genreIds={film.genre_ids}
          genres={genres}
          favoritesFilms={favoritesFilms}/>) :
          <div>Unfortunately we did not find anything :(</div>
      }
    </>
  )
};

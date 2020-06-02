import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmCard } from '../FilmCard';

import './index.scss';
import { sortFilms } from '../../utils/sortingFilms';

export const Popular = ({genres}) => {
  const dispatch = useDispatch();
  const popularFilms = useSelector((store) => store.films.popular_films);
  const favoritesFilms = useSelector((store) => store.films.favorites_films);
  const sortMode = useSelector((store) => store.films.sortMode);

  console.log(popularFilms);

  const sortedFilms = sortFilms(popularFilms, sortMode);

  return (
    <>
      {sortedFilms.length !== 0 ?
        sortedFilms.map((film) => <FilmCard
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
          <div>loader</div>
      }
    </>
  )
};

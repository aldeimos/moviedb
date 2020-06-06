import React from 'react';
import { FilmCard } from '../FilmCard';
import { useSelector } from "react-redux";
import { sortFilms } from '../../utils/sortingFilms';

export const Favorites = ({genres, favoritesFilms, sortMode, searchValue}) => {

  const sortedFilms = sortFilms(favoritesFilms, sortMode);

  console.log(sortedFilms, 'sorted films at favorites')

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



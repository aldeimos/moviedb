import React from 'react';
import {FilmCard} from '../FilmCard';
import {useSelector} from "react-redux";

export const Favorites = ({genres}) => {
  const favoritesFilms = useSelector((store) => store.films.favorites_films);

  return (
    <>
      {favoritesFilms.length !== 0 ?
        favoritesFilms.map((film) => <FilmCard
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
        <div>Your favorite list is empty</div>
      }
    </>
  )
};



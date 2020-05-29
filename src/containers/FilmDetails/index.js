import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFilmDetails } from '../../store/films/actionCreators';
import * as API from '../../api';

export const FilmDetails = ({match}) => {
  const dispatch = useDispatch();
  const detailedFilm = useSelector((store) => store.films.film_details);

  useEffect(() => {
    API.getMovie(match.params.id)
      .then((details) => dispatch(loadFilmDetails(details)));
  }, []);

  return (
    <div className="film-details">
      <div className="film-details__poster">
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt=""/>
      </div>
    </div>
  )
};


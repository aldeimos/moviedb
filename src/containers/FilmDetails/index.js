import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFilmDetails } from '../../store/films/actionCreators';
import * as API from '../../api';

import './index.scss';

import * as parseDetails from '../../utils/parseFilmsDetails';

export const FilmDetails = ({match}) => {
  const dispatch = useDispatch();
  const detailedFilm = useSelector((store) => store.films.film_details);
  const { title, tagline, runtime, budget, genres, revenue, release_date, vote_average, poster_path, overview } = detailedFilm;

  console.log(detailedFilm);

  useEffect(() => {
    API.getMovie(match.params.id)
      .then((details) => dispatch(loadFilmDetails(details)));
  }, []);


  return (
    <div className="film-details">
      <div className="film-details__poster">
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt=""/>
      </div>
      <div className="film-details__content">
        <h3 className="film-details__title">
          {title}
        </h3>
        <p className="film-details__tagline">{tagline}</p>
        <p className="film-details__paragraph film-details__runtime">Runtime: {parseDetails.parseRuntime(runtime)}</p>
        <p className="film-details__paragraph film-details__release-date">Release date: {parseDetails.parseReleaseDate(release_date)}</p>
        <p className="film-details__paragraph film-details__budget">Budget: $ {parseDetails.parseBigInt(String(budget))}</p>
        <p className="film-details__paragraph film-details__revenue">Revenue: $ {parseDetails.parseBigInt(String(revenue))}</p>
        <p className="film-details__paragraph film-details__rating">Rating: {vote_average}</p>
        <p className="film-details__paragraph film-details__genres">Genres: {genres && genres.map((genre) => genre.name).join(', ')}</p>
      </div>
      <div className="film-details__overview">
        <h3>Description:</h3>
        {overview}
      </div>
      <div className="film-details__recommended-films">
        <h3>Recommended films:</h3>
      </div>
    </div>
  )
};


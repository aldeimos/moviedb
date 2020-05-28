import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const FilmCard = ({title, release_date, poster_path, vote_average, runtime, genres, overview}) => {

    const chooseRatingClass = () => {
      if (vote_average >= 7) {
        return 'film-card__rating_high'
      } else if (vote_average < 7 && vote_average > 4) {
        return 'film-card__rating_medium';
      } else {
        return 'film-card__rating_medium'
      }
    };

    return (
        <div className="film-card">
            <div className="film-card__poster">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt="Film's Poster"/>
            </div>
            <div className="film-card__title">
                <h3>{title}</h3>
                <span className={`film-card__rating ${chooseRatingClass()}` }>
                    {vote_average}
                </span>
            </div>
            <div className="film-card__info">
                <div className="film-card__release-date">
                    {release_date}
                </div>
                <div className="film-card__runtime">
                    {runtime}
                </div>
                <div className="film-card__genres">
                    {genres[0]}
                </div>
            </div>
            <div className="film-card__desc">
                {overview.slice(0, 200)}...
            </div>
        </div>
    )
};

FilmCard.propTypes = {
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired
};

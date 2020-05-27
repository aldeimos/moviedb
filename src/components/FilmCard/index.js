import React from 'react';
import PropTypes from 'prop-types';

export const FilmCard = ({title, release_date, poster_path, vote_average, runtime, genres, overview}) => {
    return (
        <div className="film-card">
            <div className="film-card__poster">
                <img src={poster_path} alt="Film's Poster"/>
            </div>
            <div className="film-card__title">
                {title}
                <span className="film-card__raging">
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
                {overview}
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

import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {addToFavorites, deleteFromFavorites} from '../../store/films/actionCreators';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import './index.scss';
import favorite_off from '../../assets/favorite_off.svg';
import favorite_on from '../../assets/favorite_on.svg';

export const FilmCard = ({id, title, release_date, poster_path, vote_average, genres, genreIds, overview, favoritesFilms}) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(
      favoritesFilms.filter((favFilm) => favFilm.id === id).length !== 0
    );
    const [filmGenres, setFilmGenres] = useState([]);


    const chooseRatingClass = () => {
      if (vote_average >= 7) {
        return 'film-card__rating_high'
      } else if (vote_average < 7 && vote_average > 4) {
        return 'film-card__rating_medium';
      } else {
        return 'film-card__rating_low'
      }
    };

    const favoriteManage = (e) => {
      e.preventDefault();

      if (isFavorite) {
        dispatch(deleteFromFavorites(id));
        setIsFavorite(false);
        return;
      }

      dispatch(addToFavorites({
        id,
        title,
        release_date,
        poster_path,
        vote_average,
        genres,
        genre_ids: genreIds,
        overview,
      }));
      setIsFavorite(true);
    };

    useEffect(() => {
      genreIds.forEach((genreId) => {
        genres.forEach((genre) => {
          if (genre.id === genreId) {
            setFilmGenres(prev => [...prev, genre.name])
          }
        })
      });
    }, [genres]);

    return (
          <div className="film-card">
            <NavLink to={`/details/${id}`}>
            <div className="film-card__poster">
              <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt="Film's Poster"/>
              <div
                className="film-card__to-fav"
                onClick={favoriteManage}
              >
                <img src={isFavorite ? favorite_on : favorite_off} alt="Favorite" width={48} height={48}/>
              </div>
            </div>
            <div className="film-card__title">
              <h3>{title} |</h3>
              <span className={`film-card__rating ${chooseRatingClass()}` }>
                  {vote_average}
                </span>
            </div>
            <div className="film-card__info">
              <div className="film-card__release-date">
                {moment(release_date).format('LL')}
              </div>
              <div className="film-card__genres">
                {filmGenres
                  .slice(0, filmGenres.length <= 3 ? filmGenres.length : 3)
                  .join(', ')
                }
              </div>
            </div>
            <div className="film-card__desc">
              {overview.slice(0, 200)}...
            </div>
            </NavLink>
          </div>
    )
};

FilmCard.propTypes = {
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genreIds: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired
};

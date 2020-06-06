import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

export const RecommendedFilm = ({id, poster_path, title, vote_average}) => {


  return (
    <div className="recommended-film">
      <NavLink to={`/details/${id}`}>
        <div className="recommended-film__poster">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
            srcSet={`https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`}
            alt=""/>
        </div>
        <div className="recommended-film__title">
          {title}
        </div>
        <div className="recommended-film__rating">
          {vote_average}
        </div>
        </NavLink>
      </div>
  )
};

import React from 'react';

import './index.scss';

export const RecommendedFilm = ({poster, title, vote_average}) => {


  return (
    <div className="recommended-film">
      <div className="recommended-film__poster">
        <img src={poster} alt=""/>
      </div>
      <div className="recommended-film__title">
        {title}
      </div>
      <div className="recommended-film__rating">
        {vote_average}
      </div>
    </div>
  )
};

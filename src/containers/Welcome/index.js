import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadPopular} from '../../store/films/actionCreators';
import * as API from '../../api';

import { Filter } from '../../components/Filter';
import { SearchBar } from '../../components/SearchBar';
import {Sort} from '../../components/Sort';


import './index.scss'
import {FilmCard} from "../../components/FilmCard";

export const Welcome = () => {
  const dispatch = useDispatch();
  const popularFilms = useSelector((store) => store.films.popular_films);

  console.log(popularFilms);

  useEffect(() => {
    API.getPopularFilms()
      .then((popular_films) => dispatch(loadPopular(popular_films.results)));
  }, []);

  return (
    <div className="welcome">
      <div className="welcome__controls">
        <div className="welcome__controls-row welcome__controls-row_1">
          <Filter/>
        </div>
        <div className="welcome__controls-row welcome__controls-row_2">
          <SearchBar/>
        </div>
      </div>
      <div className="welcome__sort">
        <Sort/>
      </div>
      <section className="welcome__content">
        {popularFilms.length !== 0 ?
          popularFilms.map((film) => <FilmCard
                                      vote_average={film.vote_average}
                                      release_date={film.release_date}
                                      overview={film.overview}
                                      poster_path={film.poster_path}
                                      title={film.title}
                                      runtime={film.runtime}
                                      genres={film.genre_ids}/>) :
          <div>Тут пусто</div>
        }
      </section>
    </div>
  )
};

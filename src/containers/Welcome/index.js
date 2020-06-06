import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadGenres, loadMorePopular, loadPopular} from '../../store/films/actionCreators';
import * as API from '../../api';

import { Filter } from '../../components/Filter';
import { SearchBar } from '../../components/SearchBar';
import { Sort } from '../../components/Sort';
import { Popular } from '../../components/Popular';
import { Favorites } from '../../components/Favorites';
import { Loader } from '../../components/Loader';


import './index.scss'

export const Welcome = ({loading, setLoading}) => {
  const [loadedPage, setLoadedPage] = useState(1);
  const dispatch = useDispatch();
  const favoritesFilms = JSON.parse(localStorage.getItem('favorites_films') || "[]");
  const filterMode = useSelector((store) => store.films.filterMode);
  const sortMode = useSelector((store) => store.films.sortMode);
  const searchValue = useSelector((store) => store.films.searchValue);
  const genres = useSelector((store) => store.films.genres);



  const loadMore = (page) => {
    setLoadedPage(page);
    setLoading(true);
    API.getPopularFilms(page)
      .then((popular_films) => {
        setLoading(false);
        dispatch(loadMorePopular(popular_films.results));
      });
  };

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
      <div className="welcome__content">
        {loading ?
          <Loader/> :
          filterMode === 'popular' ?
            <Popular
              favoritesFilms={favoritesFilms}
              sortMode={sortMode}
              searchValue={searchValue}
              genres={genres}
            /> :
            <Favorites
              favoritesFilms={favoritesFilms}
              sortMode={sortMode}
              searchValue={searchValue}
              genres={genres}
            />
        }
      </div>
      {filterMode === 'popular' &&
      !loading &&
        <button
          className="welcome__show-more"
          type="button"
          onClick={() => loadMore(loadedPage + 1)}
        >
          Show more
        </button>
      }
    </div>
  )
};

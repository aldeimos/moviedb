import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSortMode } from '../../store/films/actionCreators' ;

import { SortItem } from './SortItem';

import './index.scss';

export const Sort = () => {
  const dispatch = useDispatch();
  const sortMode = useSelector((store) => store.films.sortMode);

  const changeSortMode = (mode) => {
    dispatch(setSortMode(mode));
  };
    return (
        <section className="sort">
            <SortItem
              title="Sort by default"
              handler={() => changeSortMode('default')}
              active={sortMode === 'default'}
            />
            <SortItem
              title="Sort by date"
              handler={() => changeSortMode('release_date')}
              active={sortMode === 'release_date'}
            />
            <SortItem
              title="Sort by rating"
              handler={() => changeSortMode('vote_average')}
              active={sortMode === 'vote_average'}
            />
        </section>
    )
};

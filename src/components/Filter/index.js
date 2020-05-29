import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setFilterMode} from '../../store/films/actionCreators';
import { FilterItem } from './FilterItem';

import './index.scss';

export const Filter = () => {
    const dispatch = useDispatch();
    const filterMode = useSelector((store) => store.films.filterMode);

    const changeFilterMode = (mode) => {
      dispatch(setFilterMode(mode));
    };

    return (
        <section className="filter">
            <FilterItem
                title="Popular"
                handler={() => changeFilterMode('popular')}
                active={filterMode === 'popular'}
            />
            <FilterItem
                title="Favorites"
                handler={() => changeFilterMode('favorites')}
                active={filterMode === 'favorites'}
            />
        </section>
    )
};

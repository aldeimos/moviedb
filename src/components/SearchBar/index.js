import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../store/films/actionCreators';

import './index.scss'

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((store) => store.films.searchValue);

    return (
        <section className="search">
            <label className="search__label" htmlFor="search">Search films</label>
            <input
                className="search__input"
                id="search"
                type="text"
                name="search"
                placeholder="Search whatever you want"
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
            />
        </section>
    )
};

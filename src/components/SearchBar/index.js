import React from 'react';

import './index.scss'

export const SearchBar = () => {
    return (
        <section className="search">
            <label className="search__label" htmlFor="search">Search films</label>
            <input
                className="search__input"
                id="search"
                type="text"
                name="search"
                placeholder="Search whatever you want"
            />
        </section>
    )
};

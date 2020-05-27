import React from 'react';

export const SearchBar = () => {


    return (
        <section className="search">
            <label htmlFor="search">Search films</label>
            <input
                id="search"
                type="text"
                name="search"
                placeholder="Search whatever you want"
            />
        </section>
    )
};

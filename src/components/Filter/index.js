import React from 'react';
import { FilterItem } from './FilterItem';

import './index.scss';

export const Filter = () => {

    const dummyHandler = () => {
        console.log('Clicked');
    };

    return (
        <section className="filter">
            <FilterItem
                title="Popular"
                handler={dummyHandler}
            />
            <FilterItem
                title="Favorites"
                handler={dummyHandler}
            />
        </section>
    )
};

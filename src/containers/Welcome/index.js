import React from 'react';
import { Filter } from '../../components/Filter';
import { SearchBar } from '../../components/SearchBar';
import {Sort} from '../../components/Sort';

import './index.scss'

export const Welcome = () => {
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

      </section>
    </div>
  )
};

import React from 'react';
import { SortItem } from './SortItem';

import './index.scss';

export const Sort = () => {
    return (
        <section className="sort">
            <SortItem
              handler={() => console.log('')}
              title="Sort by default"
            />
            <SortItem
              handler={() => console.log('')}
              title="Sort by date"
            />
            <SortItem
              handler={() => console.log('')}
              title="Sort by rating"
            />
        </section>
    )
};

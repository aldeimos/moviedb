import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const SortItem = ({title, handler, active}) => {

    return (
        <div
          className={`sort-item ${active && 'sort-item_active'}`}
            onClick={handler}
        >
            {title}
        </div>
    )
};

SortItem.propTypes = {
    title: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
};

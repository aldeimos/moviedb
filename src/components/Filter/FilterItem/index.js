import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const FilterItem = ({title, handler, active}) => {
    return (
        <div
            className={`filter-item ${active && 'filter-item_active'}`}
            onClick={handler}
        >
            {title}
        </div>
    )
};

FilterItem.propTypes = {
    title: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
};

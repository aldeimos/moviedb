import React from 'react';
import PropTypes from 'prop-types';

export const FilterItem = ({title, handler}) => {
    return (
        <div
            className="filter-item"
            onClick={handler}
        >
            {title}
        </div>
    )
};

FilterItem.propTypes = {
    title: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
};

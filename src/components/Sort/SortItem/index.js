import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const SortItem = ({title, handler}) => {
    const dummyHandler = () => {
        console.log('dummy');
    };

    return (
        <div
            className="sort-item"
            onClick={dummyHandler}
        >
            {title}
        </div>
    )
};

SortItem.propTypes = {
    title: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
};

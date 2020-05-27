import React, { useEffect } from 'react';
import * as API from '../../api';

export const App = () => {

    useEffect(() => {
        API.getMovie()
            .then(data => console.log(data));
    });

    return (
        <div>
            <h1>Привет мир</h1>
        </div>
    )
};

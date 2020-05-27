import React, { useEffect } from 'react';
import * as API from '../../api';

import { Header } from '../../components/Header';
import {Welcome} from '../Welcome';

import './index.scss';

export const App = () => {

    useEffect(() => {
        API.getMovie()
            .then(data => console.log(data));
    });

    return (
        <>
            <Header/>
            <div className="container">
              <Welcome/>
            </div>
        </>
    )
};

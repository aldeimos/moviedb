import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Welcome } from '../Welcome';
import { FilmDetails } from '../FilmDetails';

import './index.scss';
import 'materialize-css';
import {useDispatch} from 'react-redux';
import {loadGenres, loadPopular} from '../../store/films/actionCreators';
import * as API from '../../api';

export const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.getPopularFilms(1)
      .then((popular_films) => {
        setLoading(false);
        dispatch(loadPopular(popular_films.results));
      });
  }, []);

  useEffect(() => {
    API.getGenres().then(genres => dispatch(loadGenres(genres.genres)));
  }, []);

    return (
           <Router>
             <Header/>
             <div className="container">
               <Switch>
                 <Route path="/" exact>
                   <Welcome
                     loading={loading}
                     setLoading={setLoading}
                   />
                 </Route>
                 <Route path="/details/:id" exact component={FilmDetails}/>
                 <Redirect from="/details" to="/"/>
               </Switch>
             </div>
           </Router>
    )
};

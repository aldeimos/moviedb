import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Welcome } from '../Welcome';
import { FilmDetails } from '../FilmDetails';

import './index.scss';

export const App = () => {
    return (
           <Router>
             <Header/>
             <div className="container">
               <Switch>
                 <Route path="/" exact>
                   <Welcome/>
                 </Route>
                 <Route path="/details/:id" exact component={FilmDetails}/>
                 <Redirect from="/details" to="/"/>
               </Switch>
             </div>
           </Router>
    )
};

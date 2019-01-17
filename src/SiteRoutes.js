import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import HomePage from './Components/HomePage';
import NewPage from './Components/NewPage';

const SiteRoutes = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <App>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/location/:id' component={NewPage}/>
      </Switch>
    </App>
  </BrowserRouter>
  );

export default SiteRoutes;

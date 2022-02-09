import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ResultPage, SearchPage } from './page';
import './assets/styles/app.scss';
import { ProvideSearch } from './hooks/useSearch';


export const ClientApp:React.FC =() => {
  return(
    <ProvideSearch>
      <Switch>
        <Redirect from='/' to='/search' exact/>
        <Route path='/search' exact component={SearchPage}/>
        <Route path='/results' exact  component={ResultPage}/>
      </Switch>
    </ProvideSearch>
  )
}


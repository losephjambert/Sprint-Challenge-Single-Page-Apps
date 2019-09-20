import React from 'react';
import Header from './components/Header.js';
import { Switch, Route } from 'react-router-dom';

import CharactersContainer from './components/CharactersContainer';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/' render={routerProps => <WelcomePage {...routerProps} />}></Route>
        <Route path='/characters' render={routerProps => <CharactersContainer {...routerProps} />}></Route>
      </Switch>
    </main>
  );
}

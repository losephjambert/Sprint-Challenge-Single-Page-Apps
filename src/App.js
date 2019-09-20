import React, { useState } from 'react';
import Header from './components/Header.js';
import { Switch, Route } from 'react-router-dom';

import CharactersContainer from './components/CharactersContainer';
import CharacterCard from './components/CharacterCard';
import WelcomePage from './components/WelcomePage';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const addSearchResults = data => {
    setSearchResults(data);
  };
  return (
    <main>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={routerProps => <WelcomePage {...routerProps} addSearchResults={addSearchResults} />}></Route>
        <Route exact path='/characters' render={routerProps => <CharactersContainer {...routerProps} />}></Route>
        <Route
          path='/characters/:id'
          render={routerProps => <CharacterCard {...routerProps} searchResults={searchResults} />}></Route>
      </Switch>
    </main>
  );
}

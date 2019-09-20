import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import { Switch, Route } from 'react-router-dom';

import CharactersContainer from './components/CharactersContainer';
import CharacterCard from './components/CharacterCard';
import WelcomePage from './components/WelcomePage';

import getData from './api/getData';
import { baseUrl } from './api/urls';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const addSearchResults = data => {
    setSearchResults(data);
  };

  const [characters, setCharacters] = useState({});
  const addCharacters = data => {
    setCharacters(prevData => {
      if (prevData.results) prevData.results = [...prevData.results, data.results];
      return data;
    });
  };
  useEffect(() => {
    getData(baseUrl, `character/`, {}, setCharacters);
  }, []);

  return (
    <main>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={routerProps => <WelcomePage {...routerProps} addSearchResults={addSearchResults} />}></Route>
        <Route
          exact
          path='/characters'
          render={routerProps => <CharactersContainer {...routerProps} characters={characters} />}></Route>
        <Route
          path='/characters/:id'
          render={routerProps => (
            <CharacterCard {...routerProps} searchResults={searchResults} character={characters} />
          )}></Route>
      </Switch>
    </main>
  );
}

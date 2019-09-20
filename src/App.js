import React from 'react';
import Header from './components/Header.js';
import { Switch, Route } from 'react-router-dom';

import CharactersContainer from './components/CharactersContainer';

export default function App() {
  return (
    <main>
      <Header />
      <CharactersContainer />
    </main>
  );
}

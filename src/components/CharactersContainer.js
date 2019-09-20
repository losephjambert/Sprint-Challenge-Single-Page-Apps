import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import { charactersUrl } from '../api/urls';

const CharactersContainer = props => {
  const [data, setData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then(response => {
        const { results } = response.data;
        const { data } = response;

        console.log(results);
        setData(prevState => {
          if (prevState.results) response.data.results = [...prevState.results, ...results];
          return data;
        });
      })
      .catch(error => {
        console.log('there was an error retrieving characters');
        console.error(error);
      });
  }, [pageNumber]);

  return (
    <div>
      <section className='character-list'>
        <h2>Characters</h2>
        <CharacterList characters={data.results} />
      </section>
      <button onClick={() => setPageNumber(pageNumber + 1)}>get next page</button>
    </div>
  );
};

export default CharactersContainer;

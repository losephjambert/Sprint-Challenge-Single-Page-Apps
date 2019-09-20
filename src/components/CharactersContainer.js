import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import SearchForm from './SearchForm';

const CharactersContainer = props => {
  const [pageNumber, setPageNumber] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = e => setSearchTerm(e.target.value);

  return (
    <div>
      <section className='character-list'>
        <h2>Characters</h2>
        <SearchForm labelText={'Filter Characters'} searchTerm={searchTerm} handleChange={handleChange} />
        <CharacterList characters={data.results} searchTerm={searchTerm} />
      </section>
      {data.info && data.info.next.length > 0 && (
        <button onClick={() => setPageNumber(pageNumber + 1)}>Load More Characters</button>
      )}
    </div>
  );
};

export default CharactersContainer;

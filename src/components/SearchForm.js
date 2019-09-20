import React from 'react';

export default function SearchForm({ searchTerm, handleChange }) {
  return (
    <section className='search-form'>
      <form>
        <label htmlFor='search'>Search Characters: </label>
        <input id='search' type='text' name='search' value={searchTerm} onChange={e => handleChange(e)} />
      </form>
    </section>
  );
}

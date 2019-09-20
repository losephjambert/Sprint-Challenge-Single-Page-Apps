import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  const [searchResults, setSearchResults] = useState({});
  return (
    <section className='welcome-page'>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
        <Formik
          initialValues={{
            searchTerm: '',
          }}
          onSubmit={(values, actions) => {
            console.log(actions);
            const { setSubmitting, resetForm } = actions;
            axios
              .get(`https://rickandmortyapi.com/api/character/?name=${values.searchTerm}`)
              .then(response => {
                console.log(response.data);
                setSearchResults(response.data);
                // resetForm('');
              })
              .catch(error => {
                console.error('There was an error submitting your form.', error);
              });
          }}
          render={props => {
            return (
              <section className='search-form'>
                <form onSubmit={props.handleSubmit}>
                  <label htmlFor='searchTerm'>Search for a character: </label>
                  <input
                    id='searchTerm'
                    type='text'
                    name='searchTerm'
                    value={props.values.searchTerm}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  <button type='submit'>Search</button>
                </form>
              </section>
            );
          }}
        />
        <h3>Search Results</h3>
        <ul>
          {searchResults &&
            searchResults.results &&
            searchResults.results.map(character => {
              return (
                <div key={character.id}>
                  <Link to={`/character/${character.id}`}>{character.name}</Link>
                </div>
              );
            })}
        </ul>
      </header>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

import SearchForm from "./SearchForm"
import CharacterCard from "./CharacterCard";
import './CharacterList.css'

const CharactersGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    margin: 25px 0;
`

const CharactersNav = styled.button`
    margin: 0 auto;
    background-color: brown;
    color: white;
`

export default function CharacterList() {
    const [ prev, setPrev ] = useState('')
    const [ next, setNext ] = useState('')
    const [ characters, setCharacters ] = useState([]);
    const [ query, setQuery ] = useState('');
    const [ display, setDisplay ] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(({ data }) => {
                console.log(data);
                setPrev(data.info.prev);
                setNext(data.info.next);
                setCharacters(data.results);
            })
            .catch(error => console.log('uh oh:', error));
    }, []);
        
    const changePage = event => {
        const url = event.target.classList.contains('next') ? next : prev;
        console.log(url);
        axios
            .get(url)
            .then(({ data }) => {
                console.log(data);
                console.log(prev, next);
                setPrev(data.info.prev);
                setNext(data.info.next);
                setCharacters(data.results);
            })
            .catch(error => console.log('uh oh:', error));
    }

    return (
        <div>
            <SearchForm characters={characters} setQuery={setQuery} setDisplay={setDisplay} />
            {
                characters.length
                ?   <CharactersGrid className="character-list">
                        {
                            !query.length
                                ? characters.map(character => <CharacterCard key={character.id} character={character}/>)
                                : query.length < 3
                                    ? <p>Query must be 3 characters or more.</p>
                                    : display.length
                                        ? display.map(character => <CharacterCard key={character.id} character={character}/>)
                                        : <p>No results found...</p>
                        }
                    </CharactersGrid>
                : <p>loading...</p>
                 
            }

            <div className='characters-nav-wrapper'>
                {prev.length && !query.length ? <CharactersNav className='prev' onClick={changePage}>previous</CharactersNav> : null}
                {next.length && !query.length ? <CharactersNav className='next' onClick={changePage}>next</CharactersNav> : null}
            </div>
        </div>
    );
}

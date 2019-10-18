import React, { useEffect, useState } from "react";
import axios from 'axios';

import styled from 'styled-components';
import CharacterCard from "./CharacterCard";
import './CharacterList.css'

const CharactersGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
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

    return (
        <>
            <CharactersGrid className="character-list">
                {characters.map(character => <CharacterCard key={character.id} character={character}/>)}
            </CharactersGrid>

            <div className='characters-nav-wrapper'>
                {prev.length ? <CharactersNav>previous</CharactersNav> : null}
                {next.length ? <CharactersNav>next</CharactersNav> : null}
            </div>
        </>
    );
}

import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from "./CharacterCard";

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
        <section className="character-list">
        {characters.map(character => <CharacterCard key={character.id} character={character}/>)}
        {prev.length ? <button className='character-nav'>previous</button> : null}
        {next.length ? <button className='character-nav'>next</button> : null}
        </section>
    );
}

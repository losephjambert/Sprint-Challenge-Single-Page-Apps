import React, { useState } from "react";
import axios from "axios";

export default function SearchForm({ characters, setDisplay, setQuery }) {
    
    const search = event => {
        const query = event.target.value.toLowerCase();
        setQuery(query);

        if (query.length < 3) {
            return;
        }

        // const results = characters.filter(character => character.name.toLowerCase().includes(query));
        axios
            .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(({ data }) => {
                setDisplay(data.results);
            })        
    }
    
    return (
        <form className="search-form">
            <label>
                Search:
                <input type='text' placeholder='Search' onChange={search} />
            </label>
        </form>
    );
}

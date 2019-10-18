import React, { useState } from "react";

export default function SearchForm({ characters, setDisplay, setQuery }) {
    
    const search = event => {
        const query = event.target.value.toLowerCase();
        const results = characters.filter(character => character.name.toLowerCase().includes(query));
        
        setQuery(query);
        setDisplay(results);
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

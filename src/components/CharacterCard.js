import React from "react";

export default function CharacterCard({ character }) {
    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
        </div>
    )
}

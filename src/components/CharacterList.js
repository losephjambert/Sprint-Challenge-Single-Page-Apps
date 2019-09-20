import React from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterList({ characters, searchTerm }) {
  characters = characters || [];
  if (characters.length < 1) return null;
  if (searchTerm.length > 0) {
    characters = characters.filter(character => character.name.toLowerCase().includes(searchTerm));
  }
  return (
    <ul>
      {characters.map((character, i) => (
        <CharacterCard key={i} character={character} />
      ))}
    </ul>
  );
}

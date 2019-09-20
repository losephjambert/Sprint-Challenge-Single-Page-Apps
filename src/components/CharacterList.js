import React from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterList({ characters }) {
  characters = characters || [];
  if (characters.length < 1) return null;
  return (
    <ul>
      {characters.map((character, i) => (
        <CharacterCard key={i} character={character} />
      ))}
    </ul>
  );
}

import React from 'react';

export default function CharacterCard({ character }) {
  return (
    <li>
      <h3>{character.name}</h3>
    </li>
  );
}

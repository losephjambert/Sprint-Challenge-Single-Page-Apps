import React, { useState, useEffect } from 'react';

export default function CharacterCard({ character, searchResults, match }) {
  character = character || searchResults.find(char => char.id === Number(match.params.id)) || [];
  return (
    <li>
      <h3>{character.name}</h3>
    </li>
  );
}

import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px grey;
    padding: 5px;

    .imgWrapper {
        width: 95%;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

export default function CharacterCard({ character }) {
    return (
        <Card>
            <div className='imgWrapper'>
                <img src={character.image} alt={character.name} />
            </div>
            <h3>{character.name}</h3>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
        </Card>
    )
}

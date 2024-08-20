import React from "react";
import CharacterCard from './CharacterCard';
import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/pngwing.com.png';


function RickAndMortyCharacterCard(props) {
    
    const rickAndMortyCharacterId = props.id;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
            
    useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
        .then((response) => response.json())
        .then((result) => {
        console.log(result);
        setName(result.name);
        setImage(result.image);
        setSpecies(result.species);
        setStatus(result.status)
        })
    })

    return(
        <div>
            <div>
                <CharacterCard
                    title={name}
                    imageUrl={image}
                    genre={species}
                    status={status}
                />
            </div>
        </div>
    )
}

export default RickAndMortyCharacterCard;
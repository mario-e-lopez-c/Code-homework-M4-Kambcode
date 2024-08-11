import React from 'react';
import { useEffect, useState } from 'react'
import Details from './components/Details';
import Titles from './components/Titles';
import Image from './components/Image';
// import CharacterCard from './components/CharacterCard';
import bethImage from './images/Beth_smith.png';
import rickImage from './images/rick_sanchez.png';
import mortyImage from './images/morty_smith.png';
import backgroundImage from './images/rick-and-morty-minimal-night.jpg'
import './App.css';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard';
import RickAndMortyCharacterId from './components/RickAndMortyCharacterCard';

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

function App() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");


  const rickAndMortyCharacterId = 35;
 
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

  return (
    <div style={divStyle}>
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={3}/>
      <RickAndMortyCharacterCard id={4}/>
      <RickAndMortyCharacterCard id={5}/>
    </div>
  );
}

export default App;
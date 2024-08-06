import React from 'react';
import Details from './components/Details';
import Titles from './components/Titles';
import Image from './components/Image';
// import CharacterCard from './components/CharacterCard';
import Card from './components/Card';
import bethImage from './images/Beth_smith.png';
import rickImage from './images/rick_sanchez.png';
import mortyImage from './images/morty_smith.png';
import backgroundImage from './images/rick-and-morty-minimal-night.jpg'
import './App.css';

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
  return (
    <div style={divStyle}>
      <Card
        title="Beth Smith"
        imageUrl={bethImage}
        genre="Female"
        status="Alive"
      />
      <Card
       title="Rick Sanchez"
       imageUrl={rickImage}
       genre="Male"
       status="Alive"
       />
      <Card
       title="Morty Smith"
       imageUrl={mortyImage}
       genre="Male"
       status="Alive"
      />
      {/* <Titles
        title={'Beth Smith'}
        />
        <Image
          url={exampleImage} 
        />
        <Details
          genre={'Femenino'} 
          status={'Alive'} 
        /> */}
    </div>
  );
}

export default App;
import React from 'react';
import backgroundImage from './images/rick-and-morty-minimal-night.jpg';
import LoginComponent from './components/LoginComponent';
import './App.css';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

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
    <Router>
      <Routes>
        <Route path='/' element={<LoginComponent/>}/>
        <Route path='/characters' element={
          <div style={divStyle}>
           <RickAndMortyCharacterCard id={39}/>
          </div>
        }/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
    // <div style={divStyle}>
    //   <RickAndMortyCharacterCard id={39}/>
    //   <RickAndMortyCharacterCard id={22}/>
    //   <RickAndMortyCharacterCard id={33}/>
    //   <RickAndMortyCharacterCard id={43}/>
    //   <RickAndMortyCharacterCard id={55}/>
    // </div>
  );
}

export default App;
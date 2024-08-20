import React from 'react';
import backgroundImage from './images/rick-and-morty-minimal-night.jpg';
import LoginComponent from './components/LoginComponent';
import './App.css';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw', 
  height: '100vh'
}

function App() {

  return (
    <Router>
      <div style={divStyle}>
        <Routes>
          <Route path='/' element={<LoginComponent/>}/>
          <Route path='/characters' element={<Home/>}/>
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import backgroundImage from '../images/rick-and-morty-minimal-night.jpg';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';


const LoginComponent = () => {

    const divStyle = {
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        width: '100%',
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    
    const divFormStyle = {
        backdropFilter: 'blur(3px)',
        color: 'white',
        padding: '10px 20px',
        border: '2px solid white',
        borderRadius: '10px',
        cursor: 'pointer',
        height:'250px',
        marginTop: '200px', // Adding margin-top
    }

    const formStyle = {
        width: '195px',
        height: '250px',
        margin: '16px',
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
    }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigates = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validación de campos
    if (!username || !password) {
      setError('Por favor ingrese nombre de usuario y contraseña.');
      return;
    }
    // Envío de datos al servidor
    if(username === 'mario' && password === '095'){
        navigates('/characters');
    } else {
        setError('Invalid credentials')
    }
    // Aquí iría la lógica para enviar los datos de inicio de sesión al servidor
  };

  return (
    <div style={divStyle} >
      {error && <p>{error}</p>}
      <div style={divFormStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Inicio de Sesión</h2>
            <div style={{padding: "7px", alignText: "center"}}>   
                <input
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div style={{padding: "7px"}}>
            <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button style={{padding: "9px"}} type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
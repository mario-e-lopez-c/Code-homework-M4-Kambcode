import React from 'react';
import exampleImage from './images/christophwaltz.png';

function App() {
  return (
    <div>
      <h1>Artista/personaje Favorito</h1>
      <img src={exampleImage} alt="Foto Christoph Waltz" />
      <p>
        Cristoph Waltz es un actor austroalemán. Ganador del premio Oscar al mejor actor de reparto
        en dos ocasiones por sus interpretaciones en INglorious Basterds y en Django Unchained, ambdas 
        películas del director Quentin Tarantino.
      </p>
    </div>
  );
}

export default App;
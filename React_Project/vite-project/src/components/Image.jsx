import React from 'react';

function Image(props) {
    // const url ='./images/christophwaltz.png'

  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  const imgStyle = {
    color: 'blue',
    backgroundColor: 'white',
    padding: '10px ',
    borderRadius: '5px',
    width: '200px',
    marginLeft: '750px',
    marginTop: '20px'
  };

  return <img style={imgStyle} src={props.url} alt="Foto de el artista/personaje" />;
}

export default Image;
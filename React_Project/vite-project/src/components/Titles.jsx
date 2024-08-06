import React from 'react';

function Titles(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  const divStyles = {
    color: 'blue',
    backgroundColor: 'white',
    padding: '10px ',
    borderRadius: '5px',
    width: '200px',
    marginLeft: '750px',
    marginTop: '0px'
  };

  return <div style={divStyles}>{props.title}</div>;
}

export default Titles;
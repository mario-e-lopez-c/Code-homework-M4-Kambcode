import React from 'react';

function Details(props) {

    const detailStyle = {
        color: 'blue',
        backgroundColor: 'white',
        padding: '10px ',
        borderRadius: '5px',
        width: '200px',
        marginLeft: '750px',
        marginTop: '20px'
      };
    return (
        <div style={detailStyle}>
            <p>
                <b>Genero:</b> {props.genre}
            </p>
            <p>
                <b>Estado:</b> {props.status}
            </p>
        </div>
    ); 
}

export default Details;
// import React from "react"
// import { CardInterface } from "../types"
// import styles from "./Card.module.css"


// const Card = ({title, url, genre, status}: CardInterface) => {
//     return (
//         <div className="flex flex-col px-4 py-4 border items-center">
//             <div className="text-center">
//                 <h3>hola</h3>
//              </div>
//         </div>

//         // <small className={`${styles.card}`}>
//         //     {title}
//         //     {url}
//         //     {genre}
//         //     {status}
//         // </small>
//     )
// }

// export default Card
import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  imageUrl?: string; // Optional prop
  genre: string;
  status: string;
};

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  height: 500px;
  margin: 16px;
  backdrop-filter: blur(4px);
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #00FF00;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: 'center';
`;

const CardText = styled.p`
  font-size: 1em;
  color: #00FF00;
`;

const Card: React.FC<CardProps> = ({ title, imageUrl, genre, status }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{genre}</CardText>
        <CardText>{status}</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

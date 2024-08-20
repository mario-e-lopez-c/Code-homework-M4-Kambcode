
import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

type CardProps = {
  title: string;
  imageUrl?: string; // Optional prop
  genre: string;
  status: string;
  name_s: string;
  status_s: string;
  species_s: string
};

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 200px;
  height: 380px;
  margin: 16px;
  backdrop-filter: blur(5px);
`;

const CardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  transform: scale(calc(1 + (var(--hover, 0) * 0.25))) rotate(calc(var(--hover, 0) * -5deg));
  transition: transform 0.2s;
`;

const CardContent = styled.div`
  padding: 2px;
  textAlign: 'center'
`;

const CardTitle = styled.h3`
  margin: 0;ss
  font-size: 0.2em;
  color: #00FF10;
  border: 3px solid #e0e0e0;
  border-radius: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const CardText = styled.h4`
  font-size: 1.3em;
  color: #00FF00;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
const CardText2 = styled.h4`
  font-size: 1em;
  color: #00FF00;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const Card: React.FC<CardProps> = ({ title, imageUrl, genre, status, name_s, species_s, status_s}) => {

    return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>
            {title}
        </CardTitle>
        <CardText>{genre}</CardText>
        <CardText2>{status}</CardText2>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

import React from 'react'
import './Cards.css'
import Card from '../Card/Card'
import { CardsData } from '../Data/Data';

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card) => {
        return (
          <div className="parent-card" >
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
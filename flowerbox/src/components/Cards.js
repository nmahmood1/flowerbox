import React from 'react'
import data from '../data/data'

export default function Cards() {
  const cards = data.map((card, index) => (
    <Cards
      key={index}
      name={card.name}
      image={card.image}
      price={card.price}
      tags={card.tags}
    />
  ));

  return <div>{cards}</div>;
}


import React from 'react';

const SimpsonsCard = ({card}) => {
    return (
        <div className='SimpsonsCard'>
            <h1>{card.character}</h1>
            <img src={card.image} alt={card.character} />
            <p>{card.quote}</p>
        </div>
    )
}

export default SimpsonsCard;
import React, { useState } from 'react'

export default function Card({card,onShowMore}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowMore = () => {
      onShowMore(card);
    };

    return (
      <div className="card">
        <h3>{card.title}</h3>
        <p>{isExpanded ? card.text :`${card.text.substring(0, 30)}...`}</p>
         <button onClick={handleShowMore}>Show More</button>
      </div>
    );
  };
  



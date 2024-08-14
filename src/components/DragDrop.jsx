import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Card from './Card';
import { cardsData } from './DummyJson';

export default function DragDrop() {
    const [cards, setCards] = useState(cardsData);
    const [selectedCard, setSelectedCard] = useState(null);
    const [popupContent, setPopupContent] = useState(null);
  
    const handleShowMore = (card) => {
      setPopupContent(card.text);
      setSelectedCard(card);
    };
  
    const handleClosePopup = () => {
      setSelectedCard(null);
      setPopupContent(null);
      setIsExpanded(false);
    };
  
    return (
      <div className="canvas">

        {cards.map((card) => (
            <Draggable key={card.id}>
            <div>
              <ResizableBox width={200} height={200} minConstraints={[150, 150]} maxConstraints={[400, 400]}>
                <Card card={card} onShowMore={handleShowMore} />
              </ResizableBox>
            </div>
          </Draggable>
        ))}
  
        {selectedCard && (
          <div className="popup">
            <div className="popup-content">
              <h3>{selectedCard.title} Details</h3>
              <p>{popupContent}</p>
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  };


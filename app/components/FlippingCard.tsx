import { useState } from 'react';
import type { LinksFunction } from "@remix-run/node";


// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylesUrl },
// ];

interface FlippingCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  flipTrigger?: 'hover' | 'click';
}

export default function FlippingCard({ 
  frontContent, 
  backContent, 
  flipTrigger = 'click' 
}: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    // if (flipTrigger === 'click') {
      setIsFlipped(!isFlipped);
    // }
  };

  const handleMouseEnter = () => {
    // if (flipTrigger === 'hover') {
      setIsFlipped(true);
    // }
  };

  const handleMouseLeave = () => {
    // if (flipTrigger === 'hover') {
      setIsFlipped(false);
    // }
  };

  return (
    <div 
      className="flip-card py-[10px]" 
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front p-0">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
}


import { useState } from 'react'

// Interactive Card - demonstrates hover events
export function InteractiveCard({ title, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  return (
    <div 
      className={`interactive-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
      <p className="click-counter">Clicked: {clickCount} times</p>
      {isHovered && <span className="hover-indicator">👆 Hovering!</span>}
    </div>
  );
}

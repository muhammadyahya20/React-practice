
import { useState } from 'react';

// MovingDot is a React component
export default function MovingDot() {

  // position stores the current x and y coordinates of the dot
  // Initial position is x: 0 and y: 0
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div
      // onPointerMove runs whenever the pointer moves over this div
      onPointerMove={e => {

        // Update position using the pointer's current coordinates
        // clientX = horizontal position relative to the viewport
        // clientY = vertical position relative to the viewport
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}

      // Inline styles for the outer container
      style={{
        position: 'relative', // Establishes positioning context for the dot
        width: '100vw',       // Full viewport width
        height: '100vh',      // Full viewport height
      }}>

      <div style={{

        // Position the dot absolutely inside the outer container
        position: 'absolute',

        // Give the dot its green color
        backgroundColor: 'green',

        // Make the square div circular
        borderRadius: '50%',

        // Move the dot according to the current position state
        // Template literal inserts position.x and position.y
        transform: `translate(${position.x}px, ${position.y}px)`,

        // Offset the dot by half its size
        // This makes the pointer appear at the center of the dot
        left: -10,
        top: -10,

        // Dot dimensions: 20px × 20px
        width: 20,
        height: 20,

      }} />
    </div>
  );
}

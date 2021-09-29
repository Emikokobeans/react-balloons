import './App.css';
import React, { useState } from 'react';

const colors = ['red', 'green', 'blue', 'gold'];

const generateColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const balloonArr = Array(25)
  .fill()
  .map((_, i) => ({ id: i, popped: false, color: generateColor() }));

function App() {
  const [balloons, setBalloons] = useState(balloonArr);

  const onPop = (index) => {
    setBalloons((balloons) => {
      const b = [...balloons];
      b[index].popped = true;
      return b;
    });
  };
  return (
    <div className='App'>
      <div>
        {balloons.map((b, i) => {
          if (!b.popped) {
            return (
              <div className='balloon-container' key={b.id}>
                <div
                  className='balloon'
                  style={{ backgroundColor: b.color }}
                  onClick={() => onPop(i)}
                ></div>
              </div>
            );
          } else {
            return <div className='balloon-container'>pop!</div>;
          }
        })}
      </div>
    </div>
  );
}

export default App;

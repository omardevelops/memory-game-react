import React from 'react';
import Button from './Button';

function Game(props) {
  const { incrementScore } = props;
  return (
    <div className="Game">
      <Button onClick={() => incrementScore('recordLevel')}>Increment</Button>
    </div>
  );
}

export default Game;

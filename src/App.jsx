import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Game from './components/Game';
import GameEndView from './components/GameEndView';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [scores, setScores] = useState({
    record: 0,
    current: 0,
    recordLevel: 0,
  });

  const incrementScore = (type) => {
    if (type in scores === false) {
      throw new Error(`Score type ${type} does not exist.`);
    }
    const newScores = { ...scores };
    newScores[type] = scores[type] + 1;

    setScores(newScores);
  };

  const switchToGamePage = () => {
    setCurrentPage('game');
  };

  // Allows loading the page to be dynamic (until I learn Router)
  const pages = {
    main: <MainMenu switchToGamePage={switchToGamePage} />,
    game: <Game incrementScore={incrementScore} />,
  };

  return (
    <div className="App">
      <Header scores={scores} statusText="" />
      {pages[currentPage]}
    </div>
  );
}

export default App;

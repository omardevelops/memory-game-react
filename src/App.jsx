import React, { useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Game from './components/Game';
import GameEndView from './components/GameEndView';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const switchToGamePage = () => {
    setCurrentPage('game');
  };

  const pages = {
    main: <MainMenu switchToGamePage={switchToGamePage} />,
    game: <Game />,
  };

  return <div className="App">{pages[currentPage]}</div>;
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Game from './components/Game';
import GameEndView from './components/GameEndView';
import Button from './components/Button';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [scores, setScores] = useState({
    record: 0,
    score: 0,
    recordLevel: 0,
  });

  // Sets LocalStorage to initial score values
  const initializeLocalScores = () => {
    localStorage.setItem('record', 0);
    localStorage.setItem('recordLevel', 0);
    console.log(localStorage);
  };

  // Fetches scores from localStorage
  const fetchFromLocal = () => {
    const [record, recordLevel] = [
      localStorage.getItem('record'),
      localStorage.getItem('recordLevel'),
    ];

    const newScores = { ...scores };
    // Ensure results are integers
    newScores.record = parseInt(record, 10);
    newScores.recordLevel = parseInt(recordLevel, 10);

    setScores(newScores);
  };

  // Updates local storage scores
  const updateLocalScores = (newRecord, newRecordLevel) => {
    // Initialize local storage if not init
    localStorage.setItem('record', newRecord);
    localStorage.setItem('recordLevel', newRecordLevel);
  };

  const incrementScore = () => {
    const newScores = { ...scores };
    newScores.score = scores.score + 1;

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

  // ComponentDidMount, used to fetch scores or initialize them
  useEffect(() => {
    if (localStorage.length === 0) initializeLocalScores();
    else {
      fetchFromLocal();
    }
  }, []);

  return (
    <div className="App">
      <Header scores={scores} statusText="" />
      {pages[currentPage]}
      <Button
        onClick={() => {
          fetchFromLocal();
        }}
      >
        Test
      </Button>
    </div>
  );
}

export default App;

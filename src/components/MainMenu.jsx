import React from 'react';
import '../MainMenu.css';
import Button from './Button';

function MainMenu(props) {
  const { switchToGamePage } = props;

  const onGitHubClick = () => {
    window.open('https://github.com/omardevelops/memory-game-react');
  };

  return (
    <div className="MainMenu">
      <div className="btn-group">
        <Button onClick={switchToGamePage}>Start Game</Button>
        <Button onClick={onGitHubClick}>Repo on GitHub</Button>
      </div>
    </div>
  );
}

export default MainMenu;

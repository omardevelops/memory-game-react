import React from 'react';
import '../MainMenu.css';

function MainMenu() {
  return (
    <div className="MainMenu">
      <div id="logo-container">
        {/* <img src={logo} alt="Logo" /> */}
        <h1>
          <span>MARVEL</span>
          <br />
          MEMORY GAME
        </h1>
      </div>
      <div className="btn-group">
        <button type="button">Start Game</button>
        <button type="button">GitHub</button>
      </div>
    </div>
  );
}

export default MainMenu;

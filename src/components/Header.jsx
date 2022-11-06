import React from 'react';
// Header component that contains text or an image
function Header(props) {
  const { statusText, scores } = props;
  return (
    <header>
      <h1>MARVEL MEMORY GAME</h1>
      <div className="scores">
        <h2>
          Record Score:
          {` ${scores.record}`}
        </h2>
        <h1>
          Score:
          {` ${scores.current}`}
        </h1>
        <h2>
          Record Level:
          {` ${scores.recordLevel}`}
        </h2>
      </div>
      <p>{statusText}</p>
    </header>
  );
}

export default Header;

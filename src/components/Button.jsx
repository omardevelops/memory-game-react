import React from 'react';

function Button(props) {
  const { children, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

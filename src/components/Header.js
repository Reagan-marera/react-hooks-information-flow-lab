import React from 'react';

const Header = ({ darkMode, onDarkModeClick }) => {
  const handleDarkModeClick = () => {
    onDarkModeClick(!darkMode); // Invert the current dark mode state
  };

  return (
    <header>
      <h1>My App</h1>
      <button onClick={handleDarkModeClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;

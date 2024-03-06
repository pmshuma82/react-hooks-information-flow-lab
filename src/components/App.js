import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${mode}`}>
      <Header onDarkModeClick={toggleMode} />
      <ShoppingList />
    </div>
  );
};

export default App;

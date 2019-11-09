import React from 'react';
import './scss/App.scss';
import Main from './sections/main/Main';
import Header from './sections/header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

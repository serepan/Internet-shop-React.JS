import React from 'react';
import './scss/App.scss';
import Main from './sections/main/Main';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './scss/App.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from './sections/MainPage';
import Cart from './sections/cart/Cart';


const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/Cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import './bulma.min.css';
import Logo from './Logo';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Login />
      </div>
    );
  }
  
}

export default App;

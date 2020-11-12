import React from 'react';
import './App.css';
import './bulma.min.css';
// import './all.css';
import Logo from './Logo';
import LoginForm from './LoginForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <LoginForm />
      </div>
    );
  }
  
}

export default App;

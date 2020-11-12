import React from 'react';
import './App.css';
import './bulma.min.css';
import './css/all.css';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';

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

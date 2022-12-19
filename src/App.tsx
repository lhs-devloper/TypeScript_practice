import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Clock from './components/clock';
import LoginControl from './components/loginControl';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Welcome name="MapleStory"/>
        <LoginControl />
        <Clock />
      </div>
    );
  }
}

export default App;
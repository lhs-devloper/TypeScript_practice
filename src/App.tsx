import React from 'react';
import './App.css';
import Welcome from './components/welcome';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Welcome name="Sara"/>
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
}

export default App;
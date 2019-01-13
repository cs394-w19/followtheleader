import React, { Component } from 'react';
import Card from './Components/Card.js'
import Settings from './Components/Settings.js'

class App extends Component {
  render() {
    return (
      <div>
        <Settings/>
        <Card/>
      </div>
    );
  }
}

export default App;

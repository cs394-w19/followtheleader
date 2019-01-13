import React, { Component } from 'react';
import Card from './Components/Card.js'
import Settings from './Components/Settings.js'
import Header from './Components/Header.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Settings/>
        <Card>

        </Card>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Card from './Components/Card.js'
import Settings from './Components/Settings.js'
import Header from './Components/Header.js'

class App extends Component {
  render() {
    let data = [{'place': 'Main Library', 'tag': 'Worst place on campus',
                  'distance': '.2 miles'},
                {'place': 'Lake Front', 'tag': 'Best place on campus',
                              'distance': '.4 miles'},
                {'place': 'The Rock', 'tag': 'More paint than rock at this point',
                              'distance': '.6 miles'},
                {'place': 'Spac', 'tag': 'Get the the Gym!',
                              'distance': '.8 miles'}];
    return (
      <div>
        <Header/>
        <Settings/>
        <Card propdata={data[0]}/>
        <Card propdata={data[1]}/>
        <Card propdata={data[2]}/>
        <Card propdata={data[3]}/>

      </div>
    );
  }
}

export default App;

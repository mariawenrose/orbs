import React from 'react';
import './App.css';

import Orb from './Orb.js'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Orb size="3" primary="purple" secondary="blue" delay="4" />
          <Orb size="3" primary="purple" secondary="blue" delay="5" />
          <Orb size="3" primary="purple" secondary="blue" delay="6" />
          <Orb size="3" primary="orangered" secondary="yellow" delay="4.25" />
          <Orb size="3" primary="orangered" secondary="yellow" delay="5.25" />
          <Orb size="3" primary="orangered" secondary="yellow" delay="6.25" />
          <Orb size="3" primary="red" secondary="hotpink" delay="4.5" />
          <Orb size="3" primary="red" secondary="hotpink" delay="5.5" />
          <Orb size="3" primary="red" secondary="hotpink" delay="6.5" />
          <Orb size="3" primary="green" secondary="white" delay="4.75" />
          <Orb size="3" primary="green" secondary="white" delay="5.75" />
          <Orb size="3" primary="green" secondary="white" delay="6.75" />
        </header>
      </div>
    );
  }
}

export default App;

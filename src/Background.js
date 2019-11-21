import React from 'react';
import './App.css';

import Orb from './Orb.js'

class Background extends React.Component {

  render() {
    return (
      <header className="App-header">
        <Orb size="1" primary="#ff2e63" secondary="#08d9d6" delay="2" />
        <Orb size="2" primary="#377fd9" secondary="#f1d851" delay="4" />
        <Orb size="3" primary="#e65a15" secondary="#edff24" delay="6" />
        <Orb size="3" primary="#0f46ab" secondary="#e84545" delay="6.25" />
        <Orb size="2" primary="#237e8a" secondary="#a5ec29" delay="4.25" />
        <Orb size="1" primary="#851cc7" secondary="#16cc4a" delay="2.25" />
        <Orb size="1" primary="#e31eb5" secondary="#e2eb3f" delay="2.5" />
        <Orb size="2" primary="#2effce" secondary="#0a798c" delay="4.5" />
        <Orb size="3" primary="#ab2980" secondary="#ff0f23" delay="6.5" />
        <Orb size="1" primary="white" secondary="#f6ff00" delay="2.75" />
        <Orb size="2" primary="white" secondary="#0091ff" delay="4.75" />
        <Orb size="3" primary="white" secondary="#ff3c00" delay="6.75" />
      </header>
    );
  }
}

export default Background;
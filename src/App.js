import React from 'react';
import './App.css';

import Background from './Background'
import Content from './Content'

class App extends React.Component {
  state = {
    display: true
  }
  handleButton = () => {
    this.setState({
      display: !this.state.display
    })
  }
  render() {
    return (
      <div className="App">
        <Background />
        {this.state.display && <Content />}
        <button onClick={this.handleButton} className="content-button">{this.state.display ? "Hide" : "Show"}</button>
      </div>
    );
  }
}

export default App;

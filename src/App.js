import React, { Component } from 'react';
import './App.css';

import ResourceList from './ResourceList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: require('./resources.json'),
    };
  }

  render() {
    return (
      <div className="app">
        <ResourceList resources={this.state.resources} />
      </div>
    );
  }
}

export default App;

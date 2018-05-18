import React, { Component } from 'react';
import './App.css';

// Importing Components
import Route from './route';
import Nav from './component/Nav/Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        {Route}
      </div>
    );
  }
}

export default App;

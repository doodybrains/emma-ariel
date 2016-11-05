import React, { Component } from 'react';
require('./app.scss');

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="emma">
          <h2>websites</h2>
          <a href="#" target="_blank">website with the sound of its own making</a>
          <a href="#" target="_blank">know thyself</a>
          <a href="#" target="_blank">erica eso</a>
        </div>
        <div className="ariel">
          <h2>poetry</h2>
          <a href="#" target="_blank">link</a>
          <a href="#" target="_blank">link</a>
          <a href="#" target="_blank">link</a>
        </div>
      </div>
    );
  }
}

export default App;

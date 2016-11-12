import React, { Component } from 'react';
require('./app.scss');

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="emma">
          <h2>web projects</h2>
          <a href="http://emmaraeworks.com/wwtsoiom/" target="_blank">website with the sound of its own making</a>
          <a href="https://doodybrains.github.io/knowthyself/" target="_blank">know thyself</a>
          <a href="http://ericaeso.com/" target="_blank">erica eso</a>
        </div>
        <div className="ariel">
          <h2>poetry + art projects</h2>
          <a href="http://www.twoseriousladies.org/two-poems-by-ariel-yelen/" target="_blank">Two Serious Ladies (2 poems)</a>
          <a href="http://jdbrecords.blogspot.com/2015/04/a-poem-by-ariel-yelen_21.html" target="_blank">Sometimes I Am Like the Flower of Farewell</a>
          <a href="http://www.peninsulaartspace.com/shifters/" target="_blank">Shifters @ Peninsula Art Space</a>
        </div>
      </div>
    );
  }
}

export default App;

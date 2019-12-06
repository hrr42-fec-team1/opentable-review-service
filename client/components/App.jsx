//  not clear why these two are necessary
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
      <h1>Reviews!</h1>
      <img src="assets/opentable.svg"></img>
      </div>
    )
  }
}
export default App;

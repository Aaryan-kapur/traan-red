/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Upper from './Upper';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Upper />
        <Cards />
      </React.Fragment>
    );
  }
}

export default App;

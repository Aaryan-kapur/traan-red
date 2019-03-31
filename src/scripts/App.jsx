/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Upper from "./Upper";
import Cards from "./Cards";
import Services from "./Services";
import Footer from "./Footer";
import Form from "./Form"
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Upper />
        <Cards />

        <Services />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import graphic from "../assests/graphic.svg"
class Cards extends Component{
  render(){
    return(
      <div className="test">Hola</div>
    )
  }
}
class Upper extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="container">
          
          <div className="row">
            <div className="main-div-additional responsive-font-size col-sm-12 col-m-6 col-lg-6">
            <h1 className="main-div-text">Traan</h1>
              <h2 className="text-break">
                {" "}
                Healing in a matter of time, but it is sometimes also a matter
                of opportunity.
              </h2>
              <button
                type="button"
                className="main-div-button-set btn btn-dark btn-outline-white waves-effect"
              >
                Contact-Us
              </button>
              <button
                type="button"
                className="main-div-button-set btn  waves-effect"
              >
                Know More{" "}
              </button>
            </div>
            <div className="main-div-graphic responsive-font-size col-sm-12 col-m-6 col-lg-6">
            <img className="graphic" src={graphic} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Upper/>
        <Cards />
      </React.Fragment>
    );
  }
}

export default App;

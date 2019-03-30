/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import graphic from "../assests/graphic.svg"
import card1 from "../assests/Card1.svg";
import card2 from "../assests/Card2.svg"
import card3 from "../assests/Card3.svg"

class Cards extends Component{
  render(){
    return(
      <div className="cards-clients">
      <div className="container">
      <div className="row">
      <div className="card1 col-sm-12 col-m-4 col-lg-4">
      <div className="card card-cascade wider">

  <div className="view view-cascade overlay">
    <img  className="card-img-top" src={card1} />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div className="card-body card-body-cascade text-center">

    <h4 className="card-title"><strong>Hospitals</strong></h4>
   
    <h5 className="text-below pb-2"><strong>Lorem Ipsum</strong></h5>
    
                  <p className="card-text">Lorem consectetur adipisicing elit. Magni possimus officiis, ipsam saepe dignissimos veniam minus! Id laboriosam</p>

  </div>
    <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
    <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
    <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

  </div>

</div>
<div className="card1 col-sm-12 col-m-4 col-lg-4">
      <div className="card card-cascade wider">

  <div className="view view-cascade overlay">
    <img  className="card-img-top" src={card2} />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div className="card-body card-body-cascade text-center">

    <h4 className="card-title"><strong>Doctors</strong></h4>
   
    <h5 className="text-below pb-2"><strong>Lorem Ipsum</strong></h5>
    
    <p className="card-text">Lorem consectetur adipisicing elit. Magni possimus officiis, ipsam saepe dignissimos veniam minus! Id laboriosam</p>

  </div>
    <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
    <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
    <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

  </div>

</div>

<div className="card1 col-sm-12 col-m-4 col-lg-4">
      <div className="card card-cascade wider">

  <div className="view view-cascade overlay">
    <img  className="card-img-top" src={card3}  />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div className="card-body card-body-cascade text-center">

    <h4 className="card-title"><strong>Volunteers</strong></h4>
   
    <h5 className="text-below pb-2"><strong>Lorem Ipsum</strong></h5>
    
                  <p className="card-text">Lorem consectetur adipisicing elit. Magni possimus officiis, ipsam saepe dignissimos veniam minus! Id laboriosam</p>

  </div>
    <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
    <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
    <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

  </div>

</div>



      </div>
      </div>
      </div>
     
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
              <img className="graphic" src={graphic} alt="" />
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
        <Upper />
        <Cards />
      </React.Fragment>
    );
  }
}

export default App;

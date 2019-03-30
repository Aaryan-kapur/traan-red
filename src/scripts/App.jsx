import React, { Component } from "react";
import graphic from "../assests/graphic.svg"
class Cards extends Component{
  render(){
    return(
      <div className="cards-clients">
      <div className="container">
      <div className="row">
      <div className="card1 col-sm-12 col-m-4 col-lg-4">
      <div className="card card-cascade wider">

  <div className="view view-cascade overlay">
    <img  className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap" />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div className="card-body card-body-cascade text-center">

    <h4 className="card-title"><strong>Alison Belmont</strong></h4>
   
    <h5 className="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
    
    <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>

  </div>
    <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
    <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
    <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

  </div>

</div>
<div className="card1 col-sm-12 col-m-4 col-lg-4">
      <div className="card card-cascade wider">

  <div className="view view-cascade overlay">
    <img  className="card-img-top" src={graphic} alt="Card image cap" />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div className="card-body card-body-cascade text-center">

    <h4 className="card-title"><strong>Alison Belmont</strong></h4>
   
    <h5 className="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
    
    <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>

  </div>
    <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
    <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
    <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

  </div>

</div>

<div className="card1 col-sm-12 col-m-4 col-lg-4">
      <div className="card card-cascade wider">

  <div className="view view-cascade overlay">
    <img  className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap" />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div className="card-body card-body-cascade text-center">

    <h4 className="card-title"><strong>Alison Belmont</strong></h4>
   
    <h5 className="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
    
    <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>

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

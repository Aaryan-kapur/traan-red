import React, { Component } from "react";
import WOW from "wowjs";
import badal from "../assests/red2.svg";
import badal1 from "../assests/red1.svg";

import badal2 from "../assests/red3.svg";
import serviceSources from "./servicesSources";
class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card-image col-5 col-sm-5 col-md-5 col-lg-5">
          <img src={this.props.image} alt=" " />
        </div>
        <div className="col-6 col-sm-7 col-md-7 col-lg-7">
          <div class="card Services-cards">
            <h4 class="card-title">
              <a>{this.props.title}</a>
            </h4>
            <p class="card-text">{this.props.cardText}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const serviceItems = serviceSources.map(source => (
  <Service
    image={source.image}
    title={source.title}
    cardText={source.cardText}
  />
));

class Services extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    
  }
  render() {
    return (
      <React.Fragment>
        <div className="Services">
          <div className="container">
            <h1 className="heading">Our Services</h1>

            {/* <div className="row wow fadeInUp">{serviceItems}</div> */}
          
          <div className="container">
            <div className="row">
              <div className="card-image col-5 col-sm-5 col-md-5 col-lg-5  wow fadeInLeft ">
                <img src={badal1} alt=" " />
              </div>
              <div className="col-6 col-sm-6 col-md-7 col-lg-7  wow fadeInUp">
                <div className="card Services-cards">
                  <h4 className="card-title">
                    <a>
                    Extensive network of volunteers, hospitals, and doctors<sup>*</sup>
                    </a>
                  </h4>
                  <p className="card-text">
                  Our extensive network of volunteers, hospitals and doctors, ensure that you get the best care possible in the nick of time
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-7 col-lg-7  wow fadeInUp">
                <div className="card Services-cards">
                  <h4 className="card-title">
                    <a>
                      Easiest and fastest access to emergency services{" "}
                      <sup>*</sup>{" "}
                    </a>
                  </h4>
                  <p className="card-text">
                    Our web-application ensures that you get access to emergency
                    services in the fastest and easiest way possible
                  </p>
                </div>
              </div>
              <div className="card-image col-5 col-sm-5 col-md-5 col-lg-5 wow fadeInRight " data-wow-delay="0.5s">
                <img src={badal} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="card-image col-5 col-sm-5 col-md-5 col-lg-5  wow fadeInLeft ">
                <img src={badal2} alt=" " />
              </div>
              <div className="col-6 col-sm-6 col-md-7 col-lg-7  wow fadeInUp">
                <div className="card Services-cards">
                  <h4 className="card-title">
                    <a>
                      Fastest emergency response time<sup>*</sup>
                    </a>
                  </h4>
                  <p className="card-text">
                    Our huge network of hospitals and ambulance provoiders
                    ensure that you get to a medical center as soon as possible!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Services;

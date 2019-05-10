import React, { Component } from "react";
import WOW from "wowjs";
import map from "../assests/map.png";
import { MDBInput } from "mdbreact";

class Form extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    
  }
  render() {
    return (
      <div className="container form">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <section style={{paddingTop:'2vh'}}>
              <h2 className="contact font-weight-bold text-left wow fadeIn">
                Contact Us
              </h2>
              <p className="text-left secondary-text wow fadeIn "data-wow-delay="0.5s">It's Easy. Promise.</p>
            </section>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-6 wow fadeInLeft">
            <img src={map} className="map-image" />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <form id="" name="contact-form">
              <p className="text-center form-title-text wow fadeIn slow">Fill the form</p>
              <div className="row form-part-1">
                <div className="md-form col-md-12 col-lg-6 form-name wow fadeIn slow" data-wow-delay="0.2s">
                  <MDBInput
                    type="text"
                    id="name"
                    name="name"
                    className="label_input"
                    label="Name"
                  />
                </div>

                <div className="col-md-12  col-lg-6 md-form form-email  wow fadeIn slow" data-wow-delay="0.2s">
                  <MDBInput
                    type="text"
                    id="email"
                    name="email"
                    className="label_input"
                    label="E-mail"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-house  wow fadeIn slow" data-wow-delay="0.4s">
                  <div className="md-form">
                    <MDBInput
                      type="text"
                      id="subject"
                      name="subject"
                      className="label_input"
                      label="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 form-house  wow fadeIn slow" data-wow-delay="0.6s">
                  <div className="md-form ">
                    <MDBInput
                      type="text"
                      id="message"
                      name="message"
                      className="label_input"
                      label="Message"
                    />
                  </div>
                </div>

                <div className="text-center  form-house  wow fadeIn slow" data-wow-delay="0.8s">
                  <a
                    className="btn btn-danger  "
                    onclick="document.getElementById('contact-form').submit();"
                  >
                    Send
                  </a>
                </div>
                <div className="status" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;

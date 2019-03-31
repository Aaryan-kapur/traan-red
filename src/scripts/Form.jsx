import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

class Form extends Component {
  render() {
    return (
      <div className="container forms">
        <div className="row">
          <div className="form-main col-sm-12 col-md-6 col-lg-6 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.981814579435!2d77.58213141519587!3d28.44996458249019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett+University!5e0!3m2!1sen!2sin!4v1554054558691!5m2!1sen!2sin"
              width="600"
              height="500vh"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <div className="card-form col-sm-12 col-md-6 col-lg-6">
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <MDBCard>
                    <div className="form">
                      <MDBCardBody>
                        <form>
                          <p className="h4 text-center ">Sign up</p>
                          <div className="white-text">
                            <MDBInput
                              className="white-text"
                              label="Your name"
                              icon="user"
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              className="white-text"
                              label="Your email"
                              icon="envelope"
                              group
                              type="email"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              className="white-text"
                              label="Confirm your email"
                              icon="exclamation-triangle"
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              className="white-text"
                              label="Your password"
                              icon="lock"
                              group
                              type="password"
                              validate
                            />
                          </div>
                          <div className="text-center py-4 mt-3">
                            <MDBBtn color="red" type="submit">
                              Register
                            </MDBBtn>
                          </div>
                        </form>
                      </MDBCardBody>
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

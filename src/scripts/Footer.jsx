import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small pt-4">
        <div className="text-center text-md-left">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h2 className="text-uppercase">We are traan</h2>
                <p>
                The fastest and most reliable support for medical emergencies.
                </p>
                <div className='credit-contents col-md-6 mt-md-0 mt-md-0'>
                  <a>Credit Contents</a>
                </div>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Our Services</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Find hospitals & doctors</a>
                  </li>
                  <li>
                    <a href="#!">Find volunteers</a>
                  </li>
                  <li>
                    <a href="#!">Diagnose Yourself</a>
                  </li>
                  <li>
                    <a href="#!">Book an ambulance</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Join US</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="https://traan.in/register-hospital">Hospitals</a>
                  </li>
                  <li>
                    <a href="https://traan.in/register-volunteer">Volunteers</a>
                  </li>
                  <li>
                    <a href="https://traan.in/register-hospital">Doctors</a>
                  </li>
                  <li>
                    <a href="https://traan.in/register-hospital">Ambulance Providers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright: powered by
            <a href="https://perplexed.tech">
              {" "}
              perplexed.tech
            </a>
            {/* <p>Credits</p> */}
            {/* <br/> */}
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
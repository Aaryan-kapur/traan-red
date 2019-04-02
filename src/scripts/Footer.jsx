import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small pt-4">
        <div class="text-center text-md-left">
          <div className="container">
            <div class="row">
              <div class="col-md-3 mt-md-0 mt-3">
                <h2 class="text-uppercase">We are traan</h2>
                <p>
                The fastest and most reliable support for medical emergencies.
                </p>
                <div class='credit-contents col-md-6 mt-md-0 mt-md-0'>
                  <a>Credit Contents</a>
                </div>
              </div>

              <hr class="clearfix w-100 d-md-none pb-3" />

              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Our Services</h5>

                <ul class="list-unstyled">
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
              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Media Handles</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Instagram</a>
                  </li>
                  <li>
                    <a href="#!">Facebook</a>
                  </li>
                  <li>
                    <a href="#!">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#!">Twitter</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Join US</h5>

                <ul class="list-unstyled">
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
          <div class="footer-copyright text-center py-3">
            © 2019 Copyright<span style={{color:'transparent'}}>rstuc</span>; powered by
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
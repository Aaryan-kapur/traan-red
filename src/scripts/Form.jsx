import React, { Component } from "react";
import map from "../assests/map.png";
class Form extends Component {
render(){
    return <div className="container form">
    <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
    

    <section>

<h2 class="h1-responsive font-weight-bold text-left">Fill the form</h2>
<p class="text-left w-responsive">It's Easy, Promise</p>

<div class="row">

    <div class="col-md-9 mb-md-0">
        <form id="contact-form" name="contact-form">

            <div class="row">

                <div class="col-md-6">
                    <div class="md-form mb-0 ">
                        <input type="text" id="name" name="name" class="form-control" />
                        <label for="name" class="label_input">Your name</label>
                    </div>
                </div>

                <div class="col-md-6 ">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" />
                        <label for="email" class="label_input">Your email</label>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" />
                        <label for="subject" class="label_input">Subject</label>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message"  class="label_input">Your message</label>
                    </div>

                </div>
            </div>

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>

    </div>

</section>
   </div>

    <div className="col-sm-12 col-md-3 col-lg-3">
    {/* <img src={map} className="map-image" /> */}
    </div>  

    </div>
    
    
    </div>
}

}
export default Form;
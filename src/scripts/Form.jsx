import React, { Component } from "react";
import map from "../assests/map.png";
import { MDBInput } from "mdbreact";

class Form extends Component {
render(){
    return <div className="container form">
    <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
    

    <section>

<h2 className="h1-responsive font-weight-bold text-left">Fill the form</h2>
<p className="text-left secondary-text">It's Easy, Promise</p>
<form id="" name="contact-form">
<div className="row ">
<div className="col-md-6 form-house">
                    <div className="md-form">
                        
                        <MDBInput type="text" id="name" name="name" className="label_input" label="Name" />

                       
                    </div>
                </div>
    
                <div className="col-md-6 form-email ">
                    <div className="md-form">
                      
                        <MDBInput type="email" id="email" name="email" className="label_input" label="E-mail" />
                    </div>
                </div>

                </div>
                <div className="row">
                <div className="col-md-12 form-house">
                    <div className="md-form">
                        
                        <MDBInput type="text" id="subject" name="subject" className="label_input" label="Subject" />

                    </div>
                </div>
                </div>
                <div className="row ">

                <div className="col-md-12 form-house">

                    <div className="md-form">
                        
                        <MDBInput type="text" id="message" name="message" className="label_input" label="Message" />

                    </div>

                </div>
            </div>

</form>
    </section>
<div className="text-center  form-house ">
            <a className="btn btn-danger  " onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div className="status"></div>
    </div>
   
     
   

    




    <div className="col-sm-12 col-md-6 col-lg-6">
    <img src={map} className="map-image" />
    </div>  

    </div>
    
    
    </div>
}

}
export default Form;
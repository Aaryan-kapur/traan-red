import React, { Component } from "react";
import badal from "../assests/InititalBadal1.svg";
import serviceSources from './servicesSources'

class Service extends Component {
    render(){
        return <React.Fragment>
            <div className="card-image col-5 col-sm-5 col-md-5 col-lg-5">
              <img src={this.props.image} alt=" " />
            </div>
            <div className="col-6 col-sm-7 col-md-7 col-lg-7">
              <div class="card Services-cards">
                <h4 class="card-title">
                  <a>{this.props.title}</a>
                </h4>
                <p class="card-text">
                  {this.props.cardText}
                </p>
              </div>
            </div>
           
          
           
        </React.Fragment>
    }
}

const serviceItems = serviceSources.map(source=><Service image={source.image} title={source.title} cardText={source.cardText}/>)

class Services extends Component {
  render() {
    return (
      <div className="Services">
        <div className="container">
          <div className="row">
                {serviceItems}
            </div>
            <div className="row">
           
            
           
            <div class="col-6 col-sm-6 col-md-7 col-lg-7 ">
              <div class="card Services-cards">
                <h4 class="card-title">
                  <a>Easiest and fastest access to emergency services <sup>*</sup> </a>
                </h4>
                <p class="card-text">
                  Our web-application ensures that you get access to emergency services in the fastest and easiest way possible
                </p>
              </div>
            </div>
            <div class="card-image col-5 col-sm-5 col-md-5 col-lg-5">
              <img src={badal} alt=" " />
            </div>
           </div>
           
           <div className="row">
            <div className="card-image col-5 col-sm-5 col-md-5 col-lg-5">
              <img src={badal} alt=" " />
            </div>
            <div className="col-6 col-sm-6 col-md-7 col-lg-7">
              <div class="card Services-cards">
                <h4 class="card-title">
                  <a>Fastest emergency response time<sup>*</sup></a>
                </h4>
                <p class="card-text">
                  Our huge network of hospitals and ambulance provoiders ensure that you get to a medical center as soon as possible!
                </p>
              </div>
            </div>
            </div>
        
        </div>
      </div>
    );
  }
}
export default Services;

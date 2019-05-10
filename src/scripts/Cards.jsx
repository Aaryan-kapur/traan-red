/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";
import cardSources from './sources';

class Card extends Component {
    render() {
        return <div className="wow fadeInUp  card1 col-sm-12 col-m-4 col-lg-4" data-wow-delay={this.props.wow} >
            <div className="card card-cascade wider">

                <div className="view view-cascade overlay">
                    <img className="card-img-top" src={this.props.card} />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>


                <div className="card-body card-body-cascade text-center">

                    <h4 className="card-title"><strong>{this.props.title}</strong></h4>

                    <h5 className="text-below pb-2"><strong><a href={this.props.cardsLink}>{this.props.textBelow}</a></strong></h5>

                    <p className="card-text">{this.props.cardText}</p>

                </div>
                <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
                <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
                <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

            </div>

        </div>

    }
}

const cardItems = cardSources.map((source =>
    <Card wow={source.wow} title={source.title} card={source.card} textBelow={source.textBelow} cardText={source.cardText} cardsLink={source.cardLink}/>
))

class Cards extends Component {
    render() {
        return (
            <div className="cards-clients">

                <div className="container">
                    <h1 className='heading wow fadeIn slow'>Our Users</h1>
                    <div className="row">
                        {cardItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
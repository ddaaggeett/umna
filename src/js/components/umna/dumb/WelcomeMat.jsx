import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import Subscribe from './subscribe'

const umnaBounds = require('../../../../assets/img/umna_border.png')
const umnaProfile = require('../../../../assets/img/umna_profile.png')

class WelcomeMat extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="body_item" id="welcome_mat" >


                <div>
                    <MediaQuery maxWidth={991}>
                        <h3 className="welcome_mat_item_mobile" id="welcome_mobile">Welcome to the Upper Monroe Neighborhood Association!</h3>

                        <a href="https://www.google.com/maps/place/1023-1057+Monroe+Ave,+Rochester,+NY+14620/@43.1397011,-77.5838634,17z/data=!3m1!4b1!4m5!3m4!1s0x89d6b56c54777c8d:0x4428f3f05f7c931c!8m2!3d43.1396972!4d-77.5816747" target="_blank" className="welcome_mat_item_mobile" id="map_mobile">
                            <img id="umnaBounds_mobile" src={umnaBounds} /></a>

                        <p className="welcome_mat_item_mobile" id="we_are">We're a neighborhood in<a href="https://en.wikipedia.org/wiki/Rochester,_New_York" target="_blank"> Rochester</a>, NY</p>

                        <Subscribe />

                        <div className="welcome_mat_item_mobile" id="buttons_mobile">
                            <div className="button_mobile" onClick={() => this.props.goTo('home')} ><p>About UMNA</p></div>
                            <div className="button_mobile" onClick={() => this.props.goTo('headlines')} ><p>Headlines</p></div>
                            <div className="button_mobile" onClick={() => this.props.goTo('posts')} ><p>Posts</p></div>
                        </div>
                    </MediaQuery>
                    <MediaQuery minWidth={992}>
                        <h1 className="welcome_mat_item" id="welcome">Welcome to the Upper Monroe Neighborhood Association!</h1>

                        <div id="intro" className="welcome_mat_item">

                            <p>We're a neighborhood in<a href="https://en.wikipedia.org/wiki/Rochester,_New_York" target="_blank"> Rochester</a>, NY</p>

                            <Subscribe />

                        </div>

                        <a href="https://www.google.com/maps/place/1023-1057+Monroe+Ave,+Rochester,+NY+14620/@43.1397011,-77.5838634,17z/data=!3m1!4b1!4m5!3m4!1s0x89d6b56c54777c8d:0x4428f3f05f7c931c!8m2!3d43.1396972!4d-77.5816747" target="_blank" className="welcome_mat_item" id="map">
                            <img id="umnaBounds" src={umnaBounds} /></a>
                        <div className="welcome_mat_item" id="buttons">
                            <div className="button" onClick={() => this.props.goTo('home')} ><p>About UMNA</p></div>
                            <div className="button" onClick={() => this.props.goTo('headlines')} ><p>Headlines</p></div>
                            <div className="button" onClick={() => this.props.goTo('posts')} ><p>Posts</p></div>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default WelcomeMat

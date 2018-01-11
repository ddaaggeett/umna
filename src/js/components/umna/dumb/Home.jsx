import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

class Home extends Component {

    openMembershipForm = () => {
        const form = require('../../../../assets/docs/UMNA-Membership-Form.pdf')
        var win = window.open(form, '_blank')
        win.focus()
    }
    openByLaws = () => {
        const form = require('../../../../assets/docs/UMNA-ByLaws.pdf')
        var win = window.open(form, '_blank')
        win.focus()
    }

    render() {
        return (

            <div>
                <MediaQuery maxWidth={991}>

                    <h3>Introduction</h3>

                    <p className="home_mobile">The Upper Monroe Neighborhood Association (UMNA) is a not-for-profit advocacy group representing the 3,300 residents and property owners in the Upper Monroe Neighborhood.</p>

                    <p className="home_mobile">“The Upper Monroe neighborhood exemplifies the best of the Monroe Urban Village. Residents can easily access the ingredients essential to comfortable city living – retail, restaurants and recreation resources – within walking distance of their homes. Its boundaries are marked at the north by Route 490, south at the city line with the Town of Brighton, east on Culver Road, and west to Field Street.” – <a href="http://www.cityofrochester.gov/article.aspx?id=8589944138" target="_blank">City of Rochester - Southeast Neighborhoods – Upper Monroe</a></p>

                    <p className="home_mobile">We’ll keep you continually informed of happenings on our Community News page.  Subscribe to UMNA for the latest buzz on area happenings. And, if you’ve got something to say about the Upper Monroe Neighborhood, say it on <a href="https://nextdoor.com/login/?next=/news_feed/" target="_blank">Nextdoor Upper Monroe</a>, or Upper Monroe Neighborhood’s <a href="https://www.facebook.com/uppermonroe" target="_blank">Facebook</a>. Also, our neighborhood includes <a href="http://www.uppermonroeavenue.org/washington-grove/" target="_blank">Washington Grove Park</a>, a beautiful Old Growth forest wonderfully maintained.</p>

                    <h3>Our goals are to:</h3>

                    <ul className="home_mobile">
                        <li>Ascertain the needs and concerns of the neighborhood</li>
                        <li>Provide a forum that focuses on those needs and concerns</li>
                        <li>Serve as a vehicle to take positive action to address those needs and concerns</li>
                    </ul>

                    <h3>Join UMNA</h3>

                    <ul className="home_mobile">
                        <li>UMNA dues are collected annually by Calendar Year – January 1st. to December 31st.</li>
                        <li>Please note that UMNA does not solicit memberships door-to-door, but only through the newsletter or by mail (Please download <span id="print_form" onClick={() => this.openMembershipForm() }>UMNA Membership Form</span>, print and send) – and now online.</li>
                        <li>Questions about membership? Contact us here, and thank you for your support!</li>
                        <li>UMNA <span id="print_form" onClick={() => this.openByLaws() }>ByLaws</span></li>
                    </ul>

                    <p className="home_mobile">Do you have an hour or so a month for the neighborhood?</p>

                    <p className="home_mobile">A strong neighborhood association is important for a neighborhood’s vitality.  We are a voice for the residents of Upper Monroe, a liaison to the City.  Our aim to build connections and community, while enhancing the neighborhood for all. We keep our eye on planning, zoning and general neighborhood issues as they arise. AND we need your participation.  UMNA meets on the first Tuesday of the Month, from 7:00 – 8:30.  UMNA is SEEKING participants, board members, and board officers.  Many of our board members have served for years; it’s time for a few new hands to keep the organization vibrant. We invite you to join us, no commitment required!
                    </p>

                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <h2>Introduction</h2>

                    <p>The Upper Monroe Neighborhood Association (UMNA) is a not-for-profit advocacy group representing the 3,300 residents and property owners in the Upper Monroe Neighborhood.</p>

                    <p>“The Upper Monroe neighborhood exemplifies the best of the Monroe Urban Village. Residents can easily access the ingredients essential to comfortable city living – retail, restaurants and recreation resources – within walking distance of their homes. Its boundaries are marked at the north by Route 490, south at the city line with the Town of Brighton, east on Culver Road, and west to Field Street.” – <a href="http://www.cityofrochester.gov/article.aspx?id=8589944138" target="_blank">City of Rochester - Southeast Neighborhoods – Upper Monroe</a></p>

                    <p>We’ll keep you continually informed of happenings on our Community News page.  Subscribe to UMNA for the latest buzz on area happenings. And, if you’ve got something to say about the Upper Monroe Neighborhood, say it on <a href="https://nextdoor.com/login/?next=/news_feed/" target="_blank">Nextdoor Upper Monroe</a>, or Upper Monroe Neighborhood’s <a href="https://www.facebook.com/uppermonroe" target="_blank">Facebook</a>. Also, our neighborhood includes <a href="http://www.uppermonroeavenue.org/washington-grove/" target="_blank">Washington Grove Park</a>, a beautiful Old Growth forest wonderfully maintained.</p>

                    <h2>Our goals are to:</h2>

                    <ul>
                        <li>Ascertain the needs and concerns of the neighborhood</li>
                        <li>Provide a forum that focuses on those needs and concerns</li>
                        <li>Serve as a vehicle to take positive action to address those needs and concerns</li>
                    </ul>

                    <h2>Join UMNA</h2>

                    <ul>
                        <li>UMNA dues are collected annually by Calendar Year – January 1st. to December 31st.</li>
                        <li>Please note that UMNA does not solicit memberships door-to-door, but only through the newsletter or by mail (Please download <span id="print_form" onClick={() => this.openMembershipForm() }>UMNA Membership Form</span>, print and send) – and now online.</li>
                        <li>Questions about membership? Contact us here, and thank you for your support!</li>
                        <li>UMNA <span id="print_form" onClick={() => this.openByLaws() }>ByLaws</span></li>
                    </ul>

                    <p>Do you have an hour or so a month for the neighborhood?</p>

                    <p>A strong neighborhood association is important for a neighborhood’s vitality.  We are a voice for the residents of Upper Monroe, a liaison to the City.  Our aim to build connections and community, while enhancing the neighborhood for all. We keep our eye on planning, zoning and general neighborhood issues as they arise. AND we need your participation.  UMNA meets on the first Tuesday of the Month, from 7:00 – 8:30.  UMNA is SEEKING participants, board members, and board officers.  Many of our board members have served for years; it’s time for a few new hands to keep the organization vibrant. We invite you to join us, no commitment required!
                    </p>
                </MediaQuery>
            </div>
        )
    }
}

export default Home

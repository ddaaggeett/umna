import React, { Component } from 'react'
import { emailConfigs } from '../../../../configs/emailConfigs'
import MediaQuery from 'react-responsive'

import WelcomeMat from './dumb/WelcomeMat'
import Footer from './dumb/Footer'
import List from './dumb/List'
import Home from './dumb/Home'

const ListObject = (props) => {
    return (
        <List list={props.list} />
    );
}

class UMNA extends Component {

    constructor(props) {
        super(props)

        var io = require('socket.io-client')
        if (process.env.NODE_ENV === "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://'+emailConfigs.umna+':1235')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1235')
        }
    }

    componentWillMount() {
        this.socket.emit('getSpreadsheetData')
        this.socket.on('mountSpreadsheetData', function(data) {
            this.handleDataRetrieval(data)
        }.bind(this))
    }

    componentDidMount() {
        this.handleBrowserTitleChange('UMNA')
    }

    handleBrowserTitleChange = function(title) {
        document.title = title
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = '../../../assets/img/food.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    handleDataRetrieval = function(data) {
        this.props.setSpreadsheetData(data)
    }

    render () {

        return (
            <div>

                <WelcomeMat {...this.props} />

                <div>
                    <MediaQuery maxWidth={991}>
                        <div className="welcome_mat_item_mobile">

                            {(() => {
                                if(this.props.umna.page === 'headlines') {
                                    return (
                                        <ListObject list={this.props.umna.umnaHeadlines} />
                                    )
                                }
                                else if(this.props.umna.page === 'posts') {
                                    return (
                                        <ListObject list={this.props.umna.umnaPosts} />
                                    )
                                }
                                else {
                                    return (
                                        <Home />
                                    )
                                }
                            })()}

                            <Footer />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={992}>
                        <div id="content">

                            {(() => {
                                if(this.props.umna.page === 'headlines') {
                                    return (
                                        <ListObject list={this.props.umna.umnaHeadlines} />
                                    )
                                }
                                else if(this.props.umna.page === 'posts') {
                                    return (
                                        <ListObject list={this.props.umna.umnaPosts} />
                                    )
                                }
                                else {
                                    return (
                                        <Home />
                                    )
                                }
                            })()}

                            <Footer />
                        </div>
                    </MediaQuery>
                </div>
            </div>
        )
    }
}

export default UMNA

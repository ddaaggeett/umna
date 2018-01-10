import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import UMNA from './UMNA'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={UMNA}/>
        </div>
    );
  }
}

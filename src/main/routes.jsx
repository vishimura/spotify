import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import App from './app'
import Home from '../home/home'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>  
)
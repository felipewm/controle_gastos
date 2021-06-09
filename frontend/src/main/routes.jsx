import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Painel from '../painel/painel'
import Fechamento from '../fechamento/fechamento'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Painel} />
        <Route path='/fechamentos' component={Fechamento} />
        <Redirect from='*' to='/' />
    </Router>
)
import React from 'react'
import {Switch, Route, Redirect } from 'react-router'

import Painel from '../painel/painel'
import Fechamento from '../fechamento/fechamento'

export default props => (

    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Painel} />
            <Route path='/fechamentos' component={Fechamento} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
) 
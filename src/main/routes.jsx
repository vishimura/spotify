import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

// import App from './app'
// import Home from '../home/home'
// import Cadastrar from '../cadastrar/cadastrar'
// import Cidade from '../cidade/cidade'
// import Perfil from '../perfil/perfil'

export default props => (
    <Router history={hashHistory}>
        {/* <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='cadastrar' component={Cadastrar} />
            <Route path='cidade/:estado/:cidade' component={Cidade} />
            <Route path='perfil/:user_id' component={Perfil} />
        </Route> */}
        <Redirect from='*' to='/' />
    </Router>
)
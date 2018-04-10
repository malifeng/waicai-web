import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,} from 'react-router-dom';
// import {Router,Route,} from 'react-router';
import './index.css';
import App from './App';
import Layout from './page/Layout';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} ></Route>
            <Route  path='/home' component={Layout}></Route>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();

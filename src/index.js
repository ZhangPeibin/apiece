import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Switch } from "react-router-dom";
import App from "./views/app/App";
import { createBrowserHistory } from "history";
import CreateMnemonicPage from "./views/mnemonic/CreateMnemonic";
import {UserIdentityPage} from "./views/userIdentity/UserIdentity";
import ImportMnemonicPage from "./views/mnemonic/ImportMnemonic";
import Dashboard from "./views/dashborad/Dashboard";
import "@fortawesome/fontawesome-free/css/all.min.css";

const hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/landing" component={App} />
            <Route path='/signup' component={CreateMnemonicPage}/>
            <Route path="/signin" component={ImportMnemonicPage} />
            <Route path="/userIdentity" component={UserIdentityPage} />
            <Route path="/dashBoard" component={Dashboard} />
            <Route path="/" component={App} />
        </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

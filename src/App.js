import React, {Component} from 'react';
import './App.less';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider, observer} from 'mobx-react';
import stores from './stores';
import bugsnag from 'bugsnag-js'
import createPlugin from 'bugsnag-react'
import Login from './page/Login'
import Register from './page/Register';
import Dashboard from './page/Dashboard';
import DefaultLayout from './layout/DefaultLayout';
import Profile from "./page/Profile";
import Team from './page/Profile/Team';
import Project from './page/Profile/Project';
import Details from './page/Details';
import Unicode from './page/Unicode';
import HomePage from './page/HomePage';
import Blog from './page/Blog';
import BlogDetails from "./page/Blog/BlogDetails";
import ProjectDetails from "./page/Profile/Project/ProjectDetails";
import TestValidation from "./page/TestValidation";
import RegSuccess from "./page/Register/RegSuccess";

@observer
class App extends Component {
    render() {
        return (
            <Provider stores={stores}>
                <Router>
                    <div className="App">
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/regsuccess" component={RegSuccess}/>
                        <Route path="/dashboard"
                               render={props => <DefaultLayout><Dashboard {...props}/></DefaultLayout>}/>
                        <Route path="/defaultlayout" component={DefaultLayout}/>
                        <Route path="/profile"
                               render={props => <DefaultLayout><Profile {...props}/></DefaultLayout>}/>
                        <Route path="/team" render={props => <DefaultLayout><Team {...props}/></DefaultLayout>}/>
                        <Route path="/project"
                               render={props => <DefaultLayout><Project {...props}/></DefaultLayout>}/>
                        <Route path="/details"
                               render={props => <DefaultLayout><Details {...props}/></DefaultLayout>}/>
                        <Route path="/unicode" component={Unicode}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/blogdetails/:id" component={BlogDetails}/>
                        <Route path="/projectdetails"
                               render={props => <DefaultLayout><ProjectDetails {...props}/></DefaultLayout>}/>
                        <Route path="/testvalidation" component={TestValidation}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

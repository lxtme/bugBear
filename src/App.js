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

const bugsnagClient = bugsnag('4968ceaa1c751e37413b1f4b45e7b2b2');
const ErrorBoundary = bugsnagClient.use(createPlugin(React));


@observer
class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Provider stores={stores}>
                    <Router>
                        <div className="App">
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/dashboard"
                                   render={props => <DefaultLayout><Dashboard {...props}/></DefaultLayout>}/>
                            <Route path="/defaultlayout" component={DefaultLayout}/>
                            <Route path="/profile"
                                   render={props => <DefaultLayout><Profile {...props}/></DefaultLayout>}/>
                            <Route path="/team" render={props => <DefaultLayout><Team {...props}/></DefaultLayout>}/>
                            <Route path="/project"
                                   render={props => <DefaultLayout><Project {...props}/></DefaultLayout>}/>
                            <Route path="/details" render={props=><DefaultLayout><Details {...props}/></DefaultLayout>}/>
                            <Route path="/unicode" component={Unicode}/>
                            <Route path="/homepage" component={HomePage}/>
                        </div>
                    </Router>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App;

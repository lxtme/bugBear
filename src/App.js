import React, {Component} from 'react';
import './App.less';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider, observer} from 'mobx-react';
import stores from './stores';
import Login from './page/Login'
import Register from './page/Register';
import Dashboard from './page/Dashboard';

@observer
class App extends Component {
    render() {
        return (
            <Provider stores={stores}>
                <Router>
                    <div className="App">
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

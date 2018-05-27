import React, {Component} from 'react';
import './App.less';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider, observer} from 'mobx-react';
import stores from './stores';
import Login from './page/Login'


@observer
class App extends Component {
    render() {
        return (
            <Provider stores={stores}>
                <Router>
                    <div className="App">
                        <Route path="/login" component={Login}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

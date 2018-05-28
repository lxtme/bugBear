import React, {Component} from 'react';
import './index.less';
import Chart from './Chart'

class Dashboard extends Component {
    render() {

        return (
            <div className="dashboard-page">
                <Chart/>
            </div>
        )
    }
}

export default Dashboard;

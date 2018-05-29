import React, {Component} from 'react';
import './index.less';
import Chart from './Chart'
import Table from "./Table";

class Dashboard extends Component {
    render() {

        return (
            <div className="dashboard-page">
                <Chart/>
                <div className="dashboard-middle">
                </div>
                <Table/>
            </div>
        )
    }
}

export default Dashboard;

import React, {Component} from 'react';
import {Icon, Row, Col} from 'antd';
import {BarChart, Bar, PieChart, Pie, Cell} from 'recharts';

const data24Hours = [];
for (let i = 0; i < 24; i++) {
    data24Hours.push(
        {
            name: i + ':00',
            uv: Math.random() * 100
        }
    )
}
const data30Days = [];
for (let i = 0; i < 30; i++) {
    data30Days.push(
        {
            name: i + ':00',
            uv: Math.random() * 100
        }
    )
}
const browserPercents = [
    {
        name: 'chrome',
        value: 345
    },
    {
        name: 'firefox',
        value: 154
    },
    {
        name: 'sougou',
        value: 241
    },
    {
        name: '360',
        value: 112
    },
];
const percentColor = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const browserList = [];

function browserSum() {
    let sum = 0;
    for (let i = 0; i < browserPercents.length; i++) {
        sum = sum + browserPercents[i].value;
    }
    return sum;
}

browserPercents.map((entry, index) => {
        browserList.push(
            <li key={index}>
                <span className="li-before" style={{backgroundColor: percentColor[index % percentColor.length]}}> </span>
                <span className="brower">{entry.name}</span>
                <span>{entry.value + '次'}</span>
                <span>{Math.round(entry.value / browserSum() * 100) + '%'}</span>
            </li>
        )
    }
);

class Overview extends Component {
    render() {
        return (
            <div className="details-overview">
                <Row style={{width:'100%'}}>
                    <Col span={7}>
                        <div className="first-box">
                            <div className="row1">
                                <span className="row1-l">第一次出现</span>
                                <span><Icon type="info-circle-o"/></span>
                            </div>
                            <span className="appear-time">2018-06-06 10:00</span>
                            <div className="appear-number">
                                事件数：<span>12%</span>&nbsp;&nbsp;
                                用户数：<span>11%</span>
                            </div>
                            <div className="box-bottom">
                                日均时间数：<span>12343</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={7} offset={1}>
                        <div className="first-box">
                            <div className="row1">
                                <span className="row1-l">过去24小时</span>
                                <span><Icon type="info-circle-o"/></span>
                            </div>
                            <span className="appear-time">6560</span>
                            <div className="appear-number">
                                <BarChart width={350} height={40} data={data24Hours}>
                                    <Bar dataKey="uv" fill='#8884d8'/>
                                </BarChart>
                            </div>
                            <div className="box-bottom">
                                转换率：<span>60%</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={7} offset={1}>
                        <div className="first-box">
                            <div className="row1">
                                <span className="row1-l">过去30天</span>
                                <span><Icon type="info-circle-o"/></span>
                            </div>
                            <span className="appear-time">6560</span>
                            <div className="appear-number">
                                <BarChart width={350} height={40} data={data30Days}>
                                    <Bar dataKey="uv" fill='#8884d8'/>
                                </BarChart>
                            </div>
                            <div className="box-bottom">
                                转换率：<span>60%</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{width:'100%'}}>
                    <Col span={7}>
                        <div className="percent-box">
                            <div className="title">
                                <span className="title-l">浏览器类别占比</span>
                                <span><Icon type="info-circle-o"/></span>
                            </div>
                            <div className="percent-chart">
                                <PieChart height={150} width={150} marginRight={20}>
                                    <Pie data={browserPercents} dataKey="value" fill='#8884d8'
                                         cx={75} cy={75} innerRadius={50}
                                         outerRadius={70}
                                    >
                                        {
                                            browserPercents.map((entry, index) => {
                                                    return (
                                                        <Cell key={index} fill={percentColor[index % percentColor.length]}/>
                                                    )
                                                }
                                            )
                                        }
                                    </Pie>
                                </PieChart>
                                <div className="percent-chart-text">
                                    <ul>
                                        {browserList}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={7} offset={1}>
                        <div className="percent-box">
                            <div className="title">
                                <span className="title-l">操作系统类别占比</span>
                                <span><Icon type="info-circle-o"/></span>
                            </div>
                            <div className="percent-chart">
                                <PieChart height={150} width={150} marginRight={20}>
                                    <Pie data={browserPercents} dataKey="value" fill='#8884d8'
                                         cx={75} cy={75} innerRadius={50}
                                         outerRadius={70}
                                    >
                                        {
                                            browserPercents.map((entry, index) => {
                                                    return (
                                                        <Cell key={index} fill={percentColor[index % percentColor.length]}/>
                                                    )
                                                }
                                            )
                                        }
                                    </Pie>
                                </PieChart>
                                <div className="percent-chart-text">
                                    <ul>
                                        {browserList}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Overview;

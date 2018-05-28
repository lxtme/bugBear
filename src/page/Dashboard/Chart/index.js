import React, {Component} from 'react';
import {Button, DatePicker} from 'antd';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const {RangePicker} = DatePicker;

function onchange(date, dateString) {
    console.log(date, dateString)
}

const data = [
    {name: '周一', uv: 89},
    {name: '周二', uv: 39},
    {name: '周三', uv: 49},
    {name: '周四', uv: 31},
    {name: '周五', uv: 68}
];

class Chart extends Component {
    render() {

        return (
            <div className="chart">
                <div className="chart-choose">
                    <div className="chart-choose-l">
                        2018年5月1日 10:00 ~ 2018年5月2日 10:00
                    </div>
                    <div className="chart-choose-r">
                        <Button>今日</Button>
                        <Button>昨日</Button>
                        <Button>三日</Button>
                        <Button>本周</Button>
                        <RangePicker onchange={onchange}/>
                    </div>
                </div>
                <div className="dashboard-area-chart" style={{height: 300}}>
                    <ResponsiveContainer width='100%'>
                        <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Area type="monotone" dataKey='uv' fill='#8884d8' stroke='#8884d8'/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default Chart;

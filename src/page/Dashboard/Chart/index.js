import React, {Component} from 'react';
import {Button, DatePicker} from 'antd';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {inject, observer} from 'mobx-react';

const {RangePicker} = DatePicker;

@inject('stores')
@observer
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateString: "",
        };
        this.dashboardStore = this.props.stores.dashboardStore;
    }

    componentDidMount() {
        this.setAreaDate(0, 0)
    }

    getDateSt(AddDayCount) {
        const date = new Date();
        date.setDate(date.getDate() + AddDayCount);//获取AddDayCount天后的日期
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return year + '年' + month + '月' + day + "日 ";
    }

    setAreaDate(beginCount, finishCount) {
        this.setState({
            dateString: this.getDateSt(beginCount) + '~' + this.getDateSt(finishCount)
        });
        const time = {
            start: this.getDateSt(beginCount),
            end: this.getDateSt(finishCount),
        };
        this.dashboardStore.setAreaData(time);
    }

    onChange = (date, dateString) => {
        const startDate = dateString[0];
        const startDate2 = startDate.replace(/-/, '年');
        const startDate3 = startDate2.replace(/-/, '月') + '日';
        const endDate = dateString[1];
        const endDate2 = endDate.replace(/-/, '年');
        const endDate3 = endDate2.replace(/-/, '月') + '日';
        const time = {
            start: startDate3,
            end: endDate3
        };
        this.dashboardStore.setAreaData(time);
        this.setState({
            dateString: startDate3 + '~' + endDate3
        });
    };

    render() {
        return (
            <div className="chart-section">
                <div className="chart-choose">
                    <div className="chart-choose-l">
                        {this.state.dateString}
                    </div>
                    <div className="chart-choose-r">
                        <Button onClick={() => this.setAreaDate(0, 0)}>今日</Button>
                        <Button onClick={() => this.setAreaDate(-1, -1)}>昨日</Button>
                        <Button onClick={() => this.setAreaDate(-2, 0)}>三日</Button>
                        <Button onClick={() => this.setAreaDate(-6, 0)}>本周</Button>
                        <RangePicker onChange={this.onChange}/>
                    </div>
                </div>
                <div className="areachart-box" style={{height: 300}}>
                    <ResponsiveContainer width='100%'>
                        <AreaChart className='areachart'
                                   data={this.dashboardStore.areaChartData.slice()}>
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

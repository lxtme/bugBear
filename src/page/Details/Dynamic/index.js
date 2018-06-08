import React, {Component} from 'react';
import {Avatar} from 'antd';
import avatrImg from './61BAA4B2-17A1-4094-9F9E-48EC5C50621E.png'

const dynamicData = [
    {
        time: '6月1日下午4时30分',
        value: 'jason 从 bug-bear-project 向网址移动了这张卡',
    },
    {
        time: '6月3日下午5时45分',
        value: 'jason 从 网页 向 bug-bear-project 移动了这张卡',
    },
    {
        time: '6月5日上午10时02分',
        value: 'jason 向网址添加了这张卡',

    },
    {
        time: '6月6日上午11时36分',
        value: 'jason 从 bug-bear-project 向网址移动了这张卡',
    },
];
const dynamicList = [];
dynamicData.map((item, index) => {
        dynamicList.push(
            <li key={index} className="dynamic-item">
                <span className="item-img"><Avatar src={avatrImg}/></span>
                <div>
                    <span className="item-text">{item.value}</span><br/>
                    <span className="item-time">{item.time}</span>
                </div>
            </li>
        )
    }
);

class Dynamic extends Component {
    render() {
        return (
            <div className="dynamic-box">
                <ul className="dynamic-list">
                    {dynamicList}
                </ul>
            </div>
        )
    }
}

export default Dynamic;

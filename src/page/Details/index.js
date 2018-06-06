import React, {Component} from 'react';
import {Button, Tabs, List, Timeline, Icon} from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

const errList = [
    {
        title: 'SyntaxError1',
        time: '19:00'
    },
    {
        title: 'SyntaxError2',
        time: '16:00'
    },
    {
        title: 'SyntaxError3',
        time: '10:00'
    },
    {
        title: 'SyntaxError4',
        time: '6:00'
    },
];

class Details extends Component {
    render() {
        return (
            <div className="details-page">
                <div className="details-top">
                    <div className="details-top-l">
                        <p style={{fontSize: 18}}>SyntaxError https://www.kuipmake.com/rqt/new</p>
                        <p>TypeError: null is not an object (evaluating
                            'document.getElementById("notifyDot").addEventListener')</p>
                        <span>首次出现：2018-6-5</span><br/>
                        <span>时间范围：2018-6-5~2018-6-5</span>
                    </div>
                    <div className="details-top-r">
                        <div>
                            <Button>评论</Button>
                            <Button>关注</Button>
                            <Button type="primary">执行人</Button>
                        </div>
                        <div className="details-top-r-number">
                            <div>
                                <span>状态</span><br/>
                                <span>待审批</span>
                            </div>
                            <div>
                                <span>事件数</span><br/>
                                <span>635</span>
                            </div>
                            <div>
                                <span>用户数</span><br/>
                                <span>1537</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="事件列表" key="1">
                        <div className="details-tab1">
                            <List dataSource={errList} bordered style={{width: 300}} renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta title={item.title}
                                                    description="TypeError: null is not an object"/>
                                    <div>{item.time}</div>
                                </List.Item>
                            )}/>
                            <Tabs type="card" onchange={callback} style={{marginLeft: 40}} className='details-tab1-r'>
                                <TabPane tab="基本信息" key="4">
                                    <div className="details-tab1-general">
                                        <div className="details-tab1-general-l">
                                            <div>
                                                <div className="details-tab1-general-title">
                                                    概要信息
                                                </div>
                                                <span>时间</span>
                                                <span>2018年6月5日凌晨12点28分44秒</span><br/>
                                                <span>类型</span>
                                                <span>uncaught</span><br/>
                                                <span>Title</span>
                                                <span>bugBear</span><br/>
                                                <span>URL</span>
                                                <span><a>http://bugbear.com</a></span><br/>
                                            </div>
                                            <div>
                                                <div className="details-tab1-general-title">
                                                    错误信息
                                                </div>
                                                <span>名称</span>
                                                <span>uncaught error</span><br/>
                                                <span>信息</span>
                                                <span>Script error</span><br/>
                                                <span>行号</span>
                                                <span>0</span><br/>
                                                <span>列号</span>
                                                <span><a>0</a></span><br/>
                                            </div>
                                        </div>
                                        <div className="details-tab1-general-r">
                                            <div className="details-tab1-general-r-equip">
                                                <div className="details-tab1-general-title">
                                                    设备信息
                                                </div>
                                                <span>JS引qin</span>
                                                <span>mi</span>
                                                <span>9.6.1</span>
                                                <br/>
                                                <span>浏览器</span>
                                                <span>mi</span>
                                                <span>9.6.1</span>
                                                <br/>
                                                <span>浏览器</span>
                                                <span>mi</span>
                                                <span>9.6.1</span>
                                                <br/>
                                            </div>
                                            <div className="details-tab1-general-l">
                                                <div className="details-tab1-general-title">
                                                    位置信息
                                                </div>
                                                <span>IP</span>
                                                <span>112.33.212.33</span><br/>
                                                <span>地点</span>
                                                <span>上海</span><br/>
                                                <span>运营商</span>
                                                <span>bug</span><br/>
                                            </div>
                                            <div className="details-tab1-general-l">
                                                <div className="details-tab1-general-title">
                                                    其他信息
                                                </div>
                                                <span>插件版本</span>
                                                <span>0.3.4</span><br/>
                                                <span>事件ID</span>
                                                <span>jdjkdkhhgb737bnjnfg67</span><br/>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="场景重现" key="5">
                                    <Timeline>
                                        <Timeline.Item color='green'>react router<br/>from /dashboard to
                                            /user</Timeline.Item>
                                        <Timeline.Item color='green'>console log this is a test</Timeline.Item>
                                        <Timeline.Item color='red'>console warn this is a test</Timeline.Item>
                                        <Timeline.Item>network fetch error<br/>
                                            初步排除网络异常2<br/>
                                            初步排除网络异常3 2015-09-01</Timeline.Item>
                                    </Timeline>
                                    <Timeline>
                                        <Timeline.Item>
                                            <div className="error-row">
                                                <span className="error-title">react router</span>
                                                <span className='error-message'> </span>
                                                <span className="error-time">18:34:21</span><br/>
                                            </div>
                                            <div className="error-row">
                                                <span className="error-message-p1">from</span>
                                                <span className="error-message-p2">/login/</span>
                                            </div>
                                            <div className="error-row">
                                                <span className="error-message-p1">to</span>
                                                <span className="error-message-p2">/dashboard/</span>
                                            </div>
                                        </Timeline.Item>
                                        <Timeline.Item dot={<Icon type="exclamation-circle-o"/>} color="red">
                                            <div className="error-row">
                                                <span className="error-title">console</span>
                                                <span className='error-message'>This is a info log message </span>
                                                <span className="error-time">14:34:21</span><br/>
                                            </div>
                                        </Timeline.Item>
                                        <Timeline.Item dot={<Icon type="warning"/>} color="red">
                                            <div className="error-row">
                                                <span className="error-title">console</span>
                                                <span className='error-message'>This is a warning log message </span>
                                                <span className="error-time">11:34:21</span><br/>
                                            </div>
                                        </Timeline.Item>

                                    </Timeline>
                                </TabPane>
                                <TabPane tab="用户信息" key="6">

                                </TabPane>
                                <TabPane tab="元信息" key="7">

                                </TabPane>

                            </Tabs>
                        </div>
                    </TabPane>
                    <TabPane tab="概览" key="2">hfhu</TabPane>
                    <TabPane tab="动态" key="3">hfhu</TabPane>
                </Tabs>

            </div>
        )
    }
}

export default Details;

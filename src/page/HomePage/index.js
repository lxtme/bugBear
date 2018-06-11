import React, {Component} from 'react';
import {Button} from 'antd';
import './index.less';
import img1 from './542B779B-3C9A-49EF-9766-5C410555999C.png';
import img2 from './7493FCC1-4E35-4DB9-A349-AB6450A3722E.png';

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="header">
                    <div className="agree">
                        <p>IN ORDER TO GIVE YOU BETTER SERVICE WE USE COOKIES. BY CONTINUING TO USE OUR WEBSITE, YOU
                            AGREE TO THE USE OF COOKIES AS DESCRIBED IN OUR COOKIE POLICY </p>
                        <Button className="agree-btn">I agree</Button>
                    </div>
                    <div className="nav1-box">
                        <div className="nav1">
                            <div className="nav1-l">
                                <ul>
                                    <li>ENTERPRISE</li>
                                    <li>KONG API GATEWAYs</li>
                                </ul>
                            </div>
                            <div className="nav1-r">
                                <ul>
                                    <li>SUPPORT</li>
                                    <li>REQUEST DEMO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav2-box">
                        <div className='nav2'>
                            <div className="nav2-l">
                                BugBear
                            </div>
                            <ul>
                                <li>关于</li>
                                <li>DOCS</li>
                                <li>PLUGINS</li>
                                <li>COMMUNITY</li>
                                <li>ENTERPRISE</li>
                                <li>GITHUB</li>
                                <Button>INSTALLATION</Button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="start-box">
                        <div className="start">
                            <div className="start-l">
                                <p className="p1">
                                    BugBear is a supervision center of bugs.BugBear is a supervision
                                    center of bugs
                                </p>
                                <p className="p2">
                                    BugBear 可以实时监控你的项目，给你最专业的提醒,最便捷的服务。
                                    BugBear 可以实时监控你的项目，给你最专业的提醒,最便捷的服务。
                                    BugBear 可以实时监控你的项目，给你最专业的提醒,最便捷的服务。
                                </p>
                                <div>
                                    <Button className="start-btn">start</Button>
                                    <Button className="why-btn">why</Button>
                                </div>
                            </div>
                            <div className="start-r">
                                <img src={img1} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-1">
                            <h4>
                                实时
                            </h4>
                            <img src={img2} alt="img"/>
                            <p>BugBear实时为您更新错误状态</p>
                        </div>
                        <div className="feature-2">
                            <h4>
                                实时
                            </h4>
                            <img src={img2} alt="img"/>
                            <p>BugBear实时为您更新错误状态</p>
                        </div>
                        <div className="feature-3">
                            <h4>
                                实时
                            </h4>
                            <img src={img2} alt="img"/>
                            <p>BugBear实时为您更新错误状态</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;

import React, {Component} from "react";
import {Button} from 'antd';
import './index.less';

class CommonNav extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="header-box">
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
                    <div className="header-sitg">
                    </div>
                </div>
            </div>
        )
    }
}

export default CommonNav;

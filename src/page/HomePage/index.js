import React, {Component} from 'react';
import {Button} from 'antd';
import './index.less';
import img1 from './542B779B-3C9A-49EF-9766-5C410555999C.png';
import img2 from './7493FCC1-4E35-4DB9-A349-AB6450A3722E.png';
import CommonNav from "./CommonNav";

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <CommonNav/>
                <div className="container">
                    <div className="start-box">
                        <div className="start">
                            <div className="start-l">
                                <p className="p1">
                                    ThinBug
                                </p>
                                <p className="p2">
                                    一个服务于开发人员的工具，支持多种语言，实时监控错误，提供错误报告，重现错误场景，帮助开发者给予用户更好的体验。
                                </p>
                                <div>
                                    <Button className="start-btn">开始使用</Button>
                                    <Button className="why-btn">How</Button>
                                </div>
                            </div>
                            <div className="start-r">
                                <img src={img1} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="feature-box">
                        <div className="feature">
                            <div className="feature-1">
                                <h4>
                                    实时
                                </h4>
                                <img src={img2} alt="img"/>
                                <p>ThinBug实时为您更新错误状态</p>
                            </div>
                            <div className="feature-1">
                                <h4>
                                    实时
                                </h4>
                                <img src={img2} alt="img"/>
                                <p>ThinBug实时为您更新错误状态</p>
                            </div>
                            <div className="feature-1">
                                <h4>
                                    实时
                                </h4>
                                <img src={img2} alt="img"/>
                                <p>ThinBug实时为您更新错误状态</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;

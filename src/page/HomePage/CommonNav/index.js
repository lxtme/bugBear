import React, {Component} from "react";
import './index.less';
import {withRouter} from 'react-router-dom';

class CommonNav extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="header-box">
                    <div className="header">
                        {/*<div className="agree">*/}
                        {/*<p>IN ORDER TO GIVE YOU BETTER SERVICE WE USE COOKIES. BY CONTINUING TO USE OUR WEBSITE, YOU*/}
                        {/*AGREE TO THE USE OF COOKIES AS DESCRIBED IN OUR COOKIE POLICY </p>*/}
                        {/*<Button className="agree-btn">I agree</Button>*/}
                        {/*</div>*/}
                        {/*<div className="nav1-box">*/}
                        {/*<div className="nav1">*/}
                        {/*<div className="nav1-l">*/}
                        {/*<ul>*/}
                        {/*<li>ENTERPRISE</li>*/}
                        {/*<li>KONG API GATEWAYs</li>*/}
                        {/*</ul>*/}
                        {/*</div>*/}
                        {/*<div className="nav1-r">*/}
                        {/*<ul>*/}
                        {/*<li>SUPPORT</li>*/}
                        {/*<li>REQUEST DEMO</li>*/}
                        {/*</ul>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        <div className="nav2-box">
                            <div className='nav2'>
                                <div className="nav2-l">
                                    ThinBug
                                </div>
                                <ul>
                                    <li onClick={() => this.props.history.push('/')}>首页</li>
                                    <li onClick={() => this.props.history.push('/')}>产品</li>
                                    <li onClick={() => this.props.history.push('/')}>文档</li>
                                    <li onClick={() => this.props.history.push('/blog')}>博客</li>
                                    <li onClick={() => this.props.history.push('/homepage')}>关于</li>
                                    <li onClick={() => this.props.history.push('/dashboard')}>控制台</li>
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

export default withRouter(CommonNav);

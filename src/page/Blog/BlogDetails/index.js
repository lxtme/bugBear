import React, {Component} from 'react';
import img from "../Postcard/36F67090-6EF3-4FDA-A039-30F3B5755346.png";
import {Avatar} from 'antd';
import './index.less';

class BlogDetails extends Component {
    render() {
        return (
            <div className="blogDetails-page">
                <div className='header-img'>
                    <img src={img} alt="img"/>
                </div>
                <div className="text">
                    <div className="title">bugbear can achieve</div>
                    <div className="attribution">
                        <Avatar size="large" className="avatar">J</Avatar>
                        <div className="attribution-message">
                            <span className="name">Jason</span>
                            <span className="time">2018.3.10</span>
                        </div>
                    </div>
                    <p className="text-content">
                        BugBear can achieve teal-time monitoring.BugBear can achieve teal-time monitoring.BugBear
                        can achieve teal-time monitoring.BugBear can achieve teal-time monitoring.BugBear can achieve
                        teal-time monitoring.BBugBear can achieve teal-time monitoring.
                    </p>
                </div>
            </div>
        )
    }
}

export default BlogDetails;

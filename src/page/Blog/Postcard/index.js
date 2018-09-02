import React, {Component} from 'react';
import {Avatar} from "antd";
import './index.less';

class Postcard extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="postcard-wrap">
                    <div className="postcard-card" style={{cursor: 'pointer'}} onClick={this.props.onClick}>
                        <div className="img">
                        </div>
                        <div className="container">
                            <div className="details">
                                <p className="title">
                                    {this.props.title}
                                </p>
                                <span className="time">{this.props.time}</span>
                                <p className="content">{this.props.content}</p>
                            </div>
                            <div className="attribution">
                                <Avatar className="attribution-avatar"
                                        src={this.props.avatar}>
                                    {this.props.avatar===''?this.props.name.substring(0,1):''}
                                    </Avatar>
                                <span className="attribution-name">{this.props.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Postcard;

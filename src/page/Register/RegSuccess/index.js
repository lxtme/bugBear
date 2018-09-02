import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

let intervalId = '';
class RegSuccess extends Component {
    constructor() {
        super();
        this.state = {
            time: 3,
        };
    }

    componentDidMount = function () {
        intervalId = setInterval(() => this.showtime(), 1000)
    }

    showtime() {
        this.setState({
                time: this.state.time - 1
            }
        );
        if(this.state.time===0){
            clearInterval(intervalId);
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div className="reg-success-page">
                <p className="strong"> 注册成功</p>
                <p> 将会在<span>{this.state.time}</span>秒后跳转到登录页面</p>
            </div>
        )
    }
}

export default withRouter(RegSuccess);

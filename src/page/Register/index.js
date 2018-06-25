import React, {Component} from 'react';
import './index.less';
import {Form, Input, Button} from 'antd';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';

const FormItem = Form.Item;

@inject('stores')
@observer
class Register extends Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
                const data = {
                    email: values.email,
                    password: values.password,
                };
                let result = this.props.stores.userStore.register(data);
                if (result) {
                    this.props.history.push('/login')
                }
            }
        })
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value})
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('上下密码不一致');
        }
        callback();
    };
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true})
        }
        callback();
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className="register-page">
                <div className="register-box">
                    <h1>BugBear</h1>
                    <p>BugBear 是一个实时的多平台的 bug 监控系统</p>
                    <h3>注册</h3>
                    <div className="register-form">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{type: 'email', message: '请输入正确的邮箱地址'},
                                        {required: true, message: '请输入邮箱'}]
                                })(<Input placeholder="邮箱"/>)}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码'}, {
                                        max: 16,
                                        message: '密码长度为6-16位'
                                    }, {min: 6, message: '密码长度为6-16位'}, {
                                        validator: this.validateToNextPassword,
                                }]
                                })(<Input type="password" placeholder="6 - 16位密码，区分大小写"/>)}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('confirm', {
                                    rules: [{required: true, message: '请确认您的密码'}, {
                                        validator: this.compareToFirstPassword,
                                    }]
                                })(<Input type="password" placeholder="确认密码" onBlur={this.handleConfirmBlur}/>
                                )}
                            </FormItem>
                            <FormItem>
                                <div className="register-register">
                                    <Button type="primary" htmlType="submit" className="register-btn">注册</Button>
                                    <a href="" onClick={() => this.props.history.push('/login')}>使用已有账号登录</a>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Form.create()(Register));

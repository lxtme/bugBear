import React, {Component} from 'react';
import './index.less';
import {Form, Input, Button} from 'antd';
import {observer, inject} from 'mobx-react';

const FormItem = Form.Item;

//确认密码的函数还没写
@inject('stores')
@observer
class Register extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
                const data = {
                    email: values.email,
                    password: values.email
                };
                this.props.stores.userStore.register(data);
            }
        })
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
                                    rules: [{required: true, message: '请输入密码'}]
                                })(<Input type="password" placeholder="6 - 16位密码，区分大小写"/>)}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('confirm', {
                                    rules: [{required: true, message: '请确认您的密码'}]
                                })(<Input type="password" placeholder="确认密码"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <div className="register-register">
                                    <Button type="primary" htmlType="submit" className="register-btn">注册</Button>
                                    <a href="">使用已有账号登录</a>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(Register);

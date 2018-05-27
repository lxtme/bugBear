import React, {Component} from 'react';
import {Form, Input, Icon, Checkbox, Button} from 'antd';
import './index.less';
import {observer, inject} from 'mobx-react';

const FormItem = Form.Item;

@inject('stores')
@observer
class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log(values);
                    const data = {
                        email: values.email,
                        password: values.password
                    };
                    console.log(this.props.stores);
                    this.props.stores.userStore.login(data)
                }
            }
        )
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-page">
                <div className="login-box">
                    <h1>BugBear</h1>
                    <p>BugBear 是一个实时的多平台的 bug 监控系统</p>
                    <div className="login-form">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [
                                        {type: 'email', message: '请输入正确的邮箱地址'},
                                        {required: true, message: '请输入邮箱'}
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="邮箱"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: ' 请输入密码'}]
                                })(
                                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25'}}/>}
                                           placeholder="密码"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <div className="login-check">
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>自动登录</Checkbox>
                                    )}
                                    <a href="">忘记密码</a>
                                </div>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className="login-btn">
                                    登录
                                </Button>
                            </FormItem>
                            <div className="login-register">
                                <a href="">注册账号</a>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login);
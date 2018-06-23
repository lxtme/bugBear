import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';
import '../index.less';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 16
    }
};

class BaseMessage extends Component {
    handleClick = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form style={{width: 700, marginTop: 30}} className='baseMessage-page'>
                <FormItem {...formItemLayout} label="头像">
                </FormItem>
                <FormItem {...formItemLayout} label="项目名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: '名称不能为空'
                        }]
                    })(
                        <Input placeholder="jason"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="描述">
                    {getFieldDecorator('direction', {
                        rules: [{
                            required: true, message: '请简单描述'
                        }]
                    })(
                        <Input placeholder="thinbug is good"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="语言">
                    {getFieldDecorator('language', {
                        rules: [{
                            required: true, message: '语言'
                        }]
                    })(
                        <Input placeholder="chinese"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="插件版本">
                    {getFieldDecorator('version', {
                        rules: [{
                            required: true, message: '版本'
                        }]
                    })(
                        <Input placeholder="1.0"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button onClick={this.handleClick} className='base-btn'>保存</Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(BaseMessage);

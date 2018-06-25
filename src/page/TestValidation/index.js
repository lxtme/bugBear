import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';

const FormItem = Form.Item;
const formlayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 16
    }
};

class TestValidation extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values', values)
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <h1>test</h1>
                <Form style={{width: 500, margin: '300px auto'}} onSubmit={this.handleSubmit}>
                    <FormItem label='密码' {...formlayout}  >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入密码'
                            },{validator: this.checkPass}]
                        })(
                            <Input />
                        )}
                        <div style={{background:'pink'}}>ff</div>
                    </FormItem>
                    <Button htmlType='submit'>确认</Button>
                </Form>
            </div>
        )
    }
}

export default Form.create()(TestValidation);


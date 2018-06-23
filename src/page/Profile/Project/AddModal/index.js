import React, {Component} from 'react';
import {Form, Input, Modal, Select} from "antd/lib/index";
import {inject, observer} from 'mobx-react';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 16
    }
};
const Option = Select.Option;

@inject('stores')
@observer
class AddModal extends Component {
    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
            }
            console.log(this.props.stores.projectDetailsStore.projectData.slice());
            this.props.stores.projectDetailsStore.projectData.push(
                {
                    key: values.title,
                    name: values.name,
                    title: values.title,
                    describe:values.describe,
                }
            )
        });
        this.props.stores.projectDetailsStore.hiddenModalAdd();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal visible={this.props.visible} title={'添加'}
                       onCancel={() => this.props.stores.projectDetailsStore.hiddenModalAdd()}
                       onOk={this.handleOk}>
                    <Form className='baseMessage-page'>
                        <FormItem {...formItemLayout} label="头像">
                        </FormItem>
                        <FormItem {...formItemLayout} label="名字">
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '名称不能为空'
                                }]
                            })(
                                <Input placeholder="jason"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="名称">
                            {getFieldDecorator('title', {
                                rules: [{
                                    required: true, message: '请输入项目名称'
                                }]
                            })(
                                <Input placeholder="项目名称"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="描述">
                            {getFieldDecorator('describe', {
                                rules: [{
                                    required: true, message: '请输入项目描述'
                                }]
                            })(
                                <Input placeholder="描述"/>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(AddModal);

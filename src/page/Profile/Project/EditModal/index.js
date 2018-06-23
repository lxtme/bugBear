import React, {Component} from 'react';
import {Form, Input, Modal} from "antd/lib/index";
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

@inject('stores')
@observer
class EditModal extends Component {
    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
            }
        });
        this.props.stores.projectDetailsStore.hiddenModalEdit();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal visible={this.props.visible} title={'编辑'}
                       onCancel={() => this.props.stores.projectDetailsStore.hiddenModalEdit()}
                       onOk={this.handleOk}>
                    <Form className='baseMessage-page'>
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
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(EditModal);

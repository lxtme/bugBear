import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';
import {observer, inject} from 'mobx-react';

const FormItem = Form.Item;

@inject('stores')
@observer
class TeamModal extends Component {
    handleOk=()=> {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
                this.props.stores.profileStore.hiddenModal();
                const teamData={
                    email:values.email,
                    phone:values.phone,
                    name:values.name,
                };
                console.log(teamData);
                this.props.stores.profileStore.teamSet(teamData);
            }
        })
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 16
            }
        };

        return (
            <div>
                <Modal visible={this.props.visible} title="编辑团队信息"
                       onCancel={() => this.props.stores.profileStore.hiddenModal()}
                       onOk={() =>this.handleOk()}>
                    <Form>
                        <FormItem {...formItemLayout} label="昵称">
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '昵称不能为空'
                                }]
                            })(
                                <Input placeholder="jason"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="邮箱">
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: '请输入有效的邮箱地址'
                                }, {
                                    required: true, message: '邮箱不能为空'
                                }]
                            })(
                                <Input placeholder="bugbear@gmail.com"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="手机号">
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true, message: '请输入手机号'
                                }]
                            })(
                                <Input placeholder="13200001111"/>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(TeamModal);

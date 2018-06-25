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
                                initialValue:this.props.stores.profileStore.teamInformation.name,
                                rules: [{
                                    required: true, message: '昵称不能为空'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="创建时间">
                                <Input readonly='readonly' value={this.props.stores.profileStore.teamInformation.time}/>
                        </FormItem>
                        <FormItem {...formItemLayout} label="邮箱">
                            {getFieldDecorator('email', {
                                initialValue:this.props.stores.profileStore.teamInformation.email,
                                rules: [{
                                    type: 'email', message: '请输入有效的邮箱地址'
                                }, {
                                    required: true, message: '邮箱不能为空'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(TeamModal);

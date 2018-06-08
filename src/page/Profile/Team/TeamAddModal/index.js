import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';
import {inject, observer} from 'mobx-react'

const FormItem = Form.Item;

@inject('stores')
@observer
class TeamAddModal extends Component {
    handleOk = () => {
        this.props.form.validateFields((err, value) => {
            if (!err) {
                console.log(value);
                this.props.stores.profileStore.teamMember.push(
                    {
                        key: value.email,
                        name: 'lixiao',
                        email: value.email,
                        degree: '管理员',
                        time: '',
                        operate: '删除'
                    }
                );
                this.props.stores.profileStore.hiddenModalAdd();
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal visible={this.props.visible} title="添加团队成员" onOk={() => this.handleOk()}
                       onCancel={() => this.props.stores.profileStore.hiddenModalAdd()}>
                    <Form>
                        <FormItem labelCol={{span: 4}} wrapperCol={{span: 18}} label="邮箱">
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: '请输入正确的邮箱地址'
                                }, {
                                    required: true, message: '邮箱不能为空'
                                }]
                            })(<Input/>)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(TeamAddModal);

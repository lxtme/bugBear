import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';
import {observer, inject} from 'mobx-react';

const FormItem = Form.Item;

@inject('stores')
@observer
class TeamEditModal extends Component {
    constructor(props){
        super(props);
        this.profileStore=this.props.stores.profileStore;
    }
    handleOk=()=> {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.profileStore.hiddenTeamEditModal();
                const teamData={
                    email:values.email,
                    phone:values.phone,
                    name:values.name,
                };
                this.profileStore.setTeamData(teamData);
            }
        })
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const {profileStore}=this.props.stores;
        const {teamData}=profileStore;
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
                       onCancel={() => profileStore.hiddenTeamEditModal()}
                       onOk={() =>this.handleOk()}>
                    <Form>
                        <FormItem {...formItemLayout} label="昵称">
                            {getFieldDecorator('name', {
                                initialValue:teamData.name,
                                rules: [{
                                    required: true, message: '昵称不能为空'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="创建时间">
                                <Input readOnly='readOnly' value={teamData.time}/>
                        </FormItem>
                        <FormItem {...formItemLayout} label="邮箱">
                            {getFieldDecorator('email', {
                                initialValue:teamData.email,
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

export default Form.create()(TeamEditModal);

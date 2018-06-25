import React, {Component} from 'react';
import {Modal, Form, Input, Upload, Icon} from 'antd';
import {observer, inject} from 'mobx-react';

const FormItem = Form.Item;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

@inject('stores')
@observer
class ProfileModal extends Component {
    state = {
        loading: false,
    };
    handleOk = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
                this.props.stores.profileStore.hiddenModal();
                const profileData = {
                    email: values.email,
                    phone: values.phone,
                    name: values.name,
                };
                console.log(profileData);
                this.props.stores.profileStore.profileSet(profileData);
            }
        })
    };

    avatarChange(info) {
        if (info.file.status === 'uploading') {
            this.setState.loading = true;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
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
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div>Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <div>
                <Modal visible={this.props.visible} title="编辑个人信息"
                       onCancel={() => this.props.stores.profileStore.hiddenModal()}
                       onOk={() => this.handleOk()}>
                    <Form>
                        <FormItem {...formItemLayout} label="昵称">
                            {getFieldDecorator('name', {
                                initialValue:this.props.stores.profileStore.profileData.name,
                                rules: [{
                                    required: true, message: '昵称不能为空'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="邮箱">
                            {getFieldDecorator('email', {
                                initialValue:this.props.stores.profileStore.profileData.email,
                                rules: [{
                                    type: 'email', message: '请输入有效的邮箱地址'
                                }, {
                                    required: true, message: '邮箱不能为空'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="手机号">
                            {getFieldDecorator('phone', {
                                initialValue:this.props.stores.profileStore.profileData.phone,
                                rules: [{
                                    required: true, message: '请输入手机号'
                                },{
                                    len:11,message:'请输入正确的手机号码'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="头像">
                            <Upload name="avatar" list-type="picture-card"
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    onchange={this.avatarChange}>
                                {imageUrl ? <img src={imageUrl} alt="avatar"/> : uploadButton}
                            </Upload>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(ProfileModal);

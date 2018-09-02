import React, {Component} from 'react';
import {Form, Input, Modal, Upload, message} from "antd/lib/index";
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

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

@inject('stores')
@observer
class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
        this.projectStore = this.props.stores.projectStore;
    }

    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const projectData = {
                    avatar: values.avatar,
                    name: values.name,
                    title: values.title,
                    describe: values.title,
                };
                this.projectStore.updateProjectMessage(projectData);
            }
        });
        this.projectStore.hiddenModalEdit();
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {projectStore} = this.props.stores;
        const imageUrl = this.state.imageUrl;
        const uploadButton = (
            <div>
                <img className="img-avatar"
                     src={projectStore.currentData.avatar}
                     alt={projectStore.currentData.avatar === '' ? '' : '加载失败'}/>
            </div>
        );
        return (
            <Modal visible={this.props.visible} title={'编辑'}
                   onCancel={() => projectStore.hiddenModalEdit()}
                   onOk={this.handleOk}>
                <div className='edit-modal'>
                    <Form className='baseMessage-page'>
                        <FormItem {...formItemLayout} label="头像">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar"/> : uploadButton}
                            </Upload>
                        </FormItem>
                        <FormItem {...formItemLayout} label="创建人">
                            <Input readOnly='readOnly' value={projectStore.currentData.name}/>
                        </FormItem>
                        <FormItem {...formItemLayout} label="项目名称">
                            {getFieldDecorator('title',
                                {
                                    initialValue: projectStore.currentData.title,
                                    rules: [{
                                        required: true, message: '名称不能为空'
                                    }]
                                })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="描述">
                            {getFieldDecorator('describe', {
                                initialValue: projectStore.currentData.describe,
                                rules: [{
                                    required: true, message: '请简单描述'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="语言">
                            <Input value="js" readOnly='readOnly'/>
                        </FormItem>
                        <FormItem {...formItemLayout} label="插件版本">
                            <Input value="1.0" readOnly='readOnly'/>
                        </FormItem>
                    </Form>
                </div>
            </Modal>
        )
    }
}

export default Form.create()(EditModal);

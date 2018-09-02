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

@inject('stores')
@observer
class AddModal extends Component {
    constructor(props){
        super(props);
        this.projectStore=this.props.stores.projectStore;
    }
    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const createProjectData= {
                    key: values.title,
                    name: values.name,
                    title: values.title,
                    describe:values.describe,
                };
                this.projectStore.createProject(createProjectData);
            }
        });
        this.projectStore.hiddenModalAdd();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const projectStore=this.projectStore;
        return (
            <div>
                <Modal visible={this.props.visible} title={'添加'}
                       onCancel={() => projectStore.hiddenModalAdd()}
                       onOk={this.handleOk}>
                    <Form className='baseMessage-page'>
                        <FormItem {...formItemLayout} label="头像">
                        </FormItem>
                        <FormItem {...formItemLayout} label="创建人">
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '名称不能为空'
                                }]
                            })(
                                <Input placeholder="创建人"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="项目名称">
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

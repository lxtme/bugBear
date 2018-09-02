import React, {Component} from 'react';
import {Form, Input, Modal, Button} from "antd/lib/index";
import {inject, observer} from 'mobx-react';
import '../../index.less'

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
class MoreModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberData: ['aaa', 'sss', 'ddd'],
            showMemberDataError: false,
        };
        this.projectStore = props.stores.projectStore;
    }

    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const projectData = {
                    title: values.title,
                    manager: values.manager,
                };
                console.log('aaa',projectData);
                if (this.state.memberData.length) {
                    this.setState({
                        showMemberDataError: true
                    })
                }
                projectData.memberData = this.state.memberData;

                this.projectStore.updateProjectMoreMessage(projectData);
            }
        });
        this.projectStore.hiddenModalMore();
    };
    handleClick = () => {
        const addMember = this.refs.myInput.value;
        this.setState({
            memberData: [...this.state.memberData, addMember]
        })

        if (!this.state.memberData.length) {
            this.setState({
                showMemberDataError: false
            })
        }

    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const projectStore = this.projectStore;
        return (
            <Modal visible={this.props.visible}
                   title={'编辑'}
                   onCancel={() => projectStore.hiddenModalMore()}
                   onOk={this.handleOk}>
                <div className='more-modal'>
                    <Form>
                        <FormItem {...formItemLayout} label="项目名称">
                            {getFieldDecorator('title', {
                                initialValue: projectStore.currentData.title,
                                rules: [{
                                    required: true, message: '名称不能为空'
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="管理员">
                            {getFieldDecorator('manager', {
                                rules: [{
                                    required: true, message: '管理员不能为空'
                                }]
                            })(
                                <Input placeholder="jason"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label='成员'>
                            <ul className='member-list'>{this.state.memberData.map((item, index) => {
                                return (<li key={index}>{item}</li>)
                            })}</ul>
                            <p style={{display: this.state.showMemberDataError ? 'block' : 'none'}}>至少需要有一个成员</p>
                        </FormItem>
                    </Form>
                    <input className='add-input' ref='myInput'/>
                    <Button className='add-btn' onClick={this.handleClick}>添加</Button>
                </div>
            </Modal>
        )
    }
}

export default Form.create()(MoreModal);

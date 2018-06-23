import React, {Component} from 'react';
import {Form, Input, Modal, Button} from "antd/lib/index";
import {inject, observer} from 'mobx-react';
import '../index.less';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 16
    }
};
const memberList = [];


@inject('stores')
@observer
class MoreModal extends Component {

    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values:', values);
            }
        });
        this.props.stores.projectDetailsStore.hiddenModalMore();
    };
    handleClick = () => {
        const addMember = this.refs.myInput.value;
        console.log(addMember);
        memberList.push(
            <li>{addMember}</li>
        )
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal visible={this.props.visible} title={'编辑'} className='more-modal'
                       onCancel={() => this.props.stores.projectDetailsStore.hiddenModalMore()}
                       onOk={this.handleOk}>
                    <Form className='baseMessage-page '>
                        <FormItem {...formItemLayout} label="项目名称">
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '名称不能为空'
                                }]
                            })(
                                <Input placeholder="thinbug"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="管理员">
                            {getFieldDecorator('manager', {
                                rules: [{
                                    required: true, message: '管理员'
                                }]
                            })(
                                <Input placeholder="jason"/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label='成员'>
                            {getFieldDecorator(' member', {
                                rules: [{
                                    required: true, message: '成员'
                                }]
                            })(
                                <ul className='member-list'>{this.props.stores.projectDetailsStore.memberData.map((item, index) => {
                                  return(<li key={index}>{item}</li>)
                                })}</ul>
                            )}
                        </FormItem>
                    </Form>
                    <input className='add-input' ref='myInput'/>
                    <Button className='add-btn' onClick={this.handleClick}>添加</Button>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(MoreModal);

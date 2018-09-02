import React, {Component} from 'react';
import {Modal, Input, Form} from 'antd';
import {inject, observer} from 'mobx-react';


const FormItem = Form.Item;

@inject('stores')
@observer
class ForgetModal extends Component {
    handleOk() {
        this.props.form.validateFields((err,values)=>{
            if(!err){
                this.props.stores.userStore.hiddenForget();
            }
        });

    }
    render() {
        const {getFieldDecorator} =this.props.form;
        return (
            <Modal visible={this.props.visibleForget} title='忘记密码' onOk={() =>this.handleOk()}
                   onCancel={() => this.props.stores.userStore.hiddenForget()}>
                <Form>
                    <FormItem lable='邮箱：'>
                        {getFieldDecorator('email',{
                            rules:[{type:'email',message:'请输入正确的邮箱地址'}]
                        })(
                            <Input placeholder='请输入'/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(ForgetModal);

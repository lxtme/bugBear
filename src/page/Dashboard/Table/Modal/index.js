import React, {Component} from 'react';
import {Form, Input, Modal} from 'antd';
import {observer, inject} from 'mobx-react';

const FormItem = Form.Item;

@inject('stores')
@observer
class CommentModal extends Component {
    handleSubmit() {
        this.props.form.validateFields((err, value) => {
            if (!err) {
                console.log('value:', value);
                const key=this.props.stores.bugStore.commentKey;
                console.log(key);
                const comment={
                    value:value.comment,
                    key:key
                };
                console.log(comment);
                this.props.stores.bugStore.comment(comment);
    }
        });
        this.props.stores.bugStore.hiddenModal()
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Modal visible={this.props.visible}
                       onOk={() => {
                           this.handleSubmit()
                       }}
                       onCancel={() => {
                           this.props.stores.bugStore.hiddenModal()
                       }}
                       title='modal'>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('comment', {
                                rules: [{required: true, message: '请输入评论'}]
                            })(<Input/>)}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(CommentModal);

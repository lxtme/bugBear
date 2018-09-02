import React, {Component} from 'react';
import {Form, Input, Modal} from 'antd';
import {observer, inject} from 'mobx-react';

const FormItem = Form.Item;
const {TextArea} = Input;

@inject('stores')
@observer
class CommentModal extends Component {
    constructor(props){
        super(props);
        this.bugStore=this.props.stores.bugStore
    }
    handleSubmit() {
        this.props.form.validateFields((err, value) => {
            if (!err) {
                const commentData = {
                    comment: value.comment,
                    key: this.bugStore.currentCommentKey,
                };
                this.bugStore.addComment(commentData);
            }
        });
        this.bugStore.hiddenModal()
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Modal visible={this.props.visible}
                       onOk={() => {this.handleSubmit()}}
                       onCancel={() => {this.bugStore.hiddenModal()}}
                       title='评论'>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('comment', {
                                rules: [{required: true, message: '请输入评论'}]
                            })(<TextArea rows={4}/>)}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(CommentModal);

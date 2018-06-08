import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';
import {inject, observer} from 'mobx-react';

const FormItem = Form.Item;

@inject('stores')
@observer
class CommentModal extends Component {
    handleOk = () => {
        this.props.form.validateFields((err, value) => {
            if (!err) {
                console.log('comment', value);
                this.props.stores.detailsStore.hiddenModal();
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Modal visible={this.props.visible} title='评论' onOk={() => this.handleOk()}
                       onCancel={()=>this.props.stores.detailsStore.hiddenModal()}>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('comment', {
                                rules: [{
                                    required: true, message: '请输入评论'
                                }]
                            })(
                                <textarea style={{width:'100%',height:90}}/>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(CommentModal);

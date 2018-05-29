import React, {Component} from 'react';
import {Form, Button, Input, Select, Table as TableAntd, Alert, message} from 'antd';
import {inject, observer} from 'mobx-react';
import CommentModal from "./Modal";

const FormItem = Form.Item;
const Option = Select.Option;
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys:${selectedRowKeys}`, 'selectedRows:', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    })
};

@inject('stores')
@observer
class Table extends Component {
    constructor(props) {
        super();
        props.stores.bugStore.listBugs()
    }

    render() {
        const columns = [
            {
                title: '信息',
                dataIndex: 'message',
                key: 'message'
            },
            {
                title: '事件数',
                dataIndex: 'account',
                key: 'account',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.account - b.account,
            },
            {
                title: '用户数',
                dataIndex: 'userNum',
                key: 'userNum',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.userNum - b.userNum,
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                filters: [
                    {
                        text: '待定',
                        value: '待定'
                    },
                    {
                        text: '进行中',
                        value: '进行中'
                    },
                    {
                        text: '已修复',
                        value: '已修复'
                    }],
                filterMultiple: true,
                onFilter: (value, record) => {
                    if (record.status.indexOf(value) > -1) {
                        return true
                    }
                    return false
                }
            },
            {
                title: '时间',
                dataIndex: 'time',
                key: 'time'
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render: (text, record) => (
                    <div>
                        <a href="javascript:;"
                           onClick={() => {
                               message.success('该错误将不在展示，可以通过筛选状态已忽略查看');
                               this.props.stores.bugStore.ignore(record.key)
                           }
                           }>忽略</a>
                        <a href="javascript:;"
                           onClick={() => {
                               this.props.stores.bugStore.comment(record.key)
                           }}>评论</a>
                    </div>
                )
            },
        ];

        return (
            <div className="table-box">
                <CommentModal visible={this.props.stores.bugStore.visible}/>
                <Form layout="inline">
                    <FormItem label="关键词">
                        <Input placeholder="请输入" style={{width: 220}}/>
                    </FormItem>
                    <FormItem label="状态">
                        <Select defaultValue="请输入" style={{width: 220}}>
                            <Option value="待定">待定</Option>
                            <Option value="进行中">进行中</Option>
                            <Option value="已修复">已修复</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Button>查询</Button>
                    </FormItem>
                    <FormItem>
                        <Button>重置</Button>
                    </FormItem>
                </Form>
                <Alert style={{margin: '20px 0'}} message="Informational Notes" type="info" showIcon/>
                <TableAntd rowSelection={rowSelection} columns={columns}
                           dataSource={this.props.stores.bugStore.bugs.slice()}/>
            </div>
        )
    }
}

export default Table;

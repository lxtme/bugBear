import React, {Component} from 'react';
import {Avatar, Alert, Table} from 'antd';
import {observer, inject} from 'mobx-react';
import TeamModal from './TeamModal';
import TeamAddModal from "./TeamAddModal";

@inject('stores')
@observer
class Team extends Component {
    render() {
        const teamColumns = [
            {
                title: '昵称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: '身份',
                dataIndex: 'degree',
                key: 'degree'
            },
            {
                title: '活跃时间',
                dataIndex: 'time',
                key: 'time'
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render: (text, record) => (
                    <a onClick={() => this.props.stores.profileStore.deleteMember(record)}>删除</a>
                )
            }
        ];
        return (
            <div className="profile-page">
                <div>
                    <span className="profile-title">团队信息</span>
                    <span className="profile-btn"
                          onClick={() => this.props.stores.profileStore.showModal()}><a>编辑</a></span><br/>
                    <span className="profile-label">头像：</span>
                    <span className="profile-value"> <Avatar icon="user"/></span><br/>
                    <span className="profile-label">名称</span>
                    <span className="profile-value">BugBear</span><br/>
                    <span className="profile-label">创建时间</span>
                    <span className="profile-value">2018.5</span><br/>
                    <span className="profile-label">手机号：</span>
                    <span className="profile-value">13067899909</span>
                </div>
                <div style={{marginTop: 50}}>
                    <span className="profile-title">团队成员</span>
                    <span className="profile-btn"><a onClick={()=>this.props.stores.profileStore.showModalAdd()}>添加</a></span>
                    <Alert type="info" message="共13人" showIcon style={{width: 1200}}/>
                    <Table dataSource={this.props.stores.profileStore.teamMember.slice()} columns={teamColumns}
                           style={{width: 1200}}/>
                </div>
                <TeamModal visible={this.props.stores.profileStore.visible}/>
                <TeamAddModal visible={this.props.stores.profileStore.visibleAdd}/>
            </div>
        )
    }
}

export default Team;

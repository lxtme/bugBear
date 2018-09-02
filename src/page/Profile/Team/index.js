import React, {Component} from 'react';
import {Avatar, Alert, Table} from 'antd';
import {observer, inject} from 'mobx-react';
import TeamEditModal from './TeamEditModal';
import TeamAddModal from "./TeamAddModal";

@inject('stores')
@observer
class Team extends Component {
    constructor(props) {
        super(props);
        this.props.stores.profileStore.getTeamData();
    }

    render() {
        const {profileStore} = this.props.stores;
        const {teamData} = profileStore;
        const columns = [
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
                    <a onClick={() => profileStore.deleteTeamMember(record.id)}>删除</a>
                )
            }
        ];
        return (
            <div className="team-page">
                <div>
                    <div className="title-box">
                        <span className="title">团队信息</span>
                        <span className="btn"
                              onClick={() => profileStore.showTeamEditModal()}><a>编辑</a></span><br/>
                    </div>
                    <div className="content">
                        <span className="profile-label">头像：</span>
                        <span>
                        <Avatar>{teamData.avatar}</Avatar>
                        </span><br/>
                        <span className="profile-label">名称：</span>
                        <span>{teamData.name}</span><br/>
                        <span className="profile-label">邮箱：</span>
                        <span>{teamData.email}</span><br/>
                        <span className="profile-label">创建时间：</span>
                        <span>{teamData.time}</span><br/>
                    </div>
                </div>
                <div className='table-section'>
                    <div className="title-box">
                        <span className="title">团队成员</span>
                        <span className="btn"><a onClick={() => profileStore.showTeamAddModal()}>添加</a></span>
                    </div>
                    <Alert className='alert' type="info" message="共13人" showIcon/>
                    <Table className='table' dataSource={teamData.teamMember.slice()} columns={columns}/>
                </div>
                <TeamEditModal visible={profileStore.teamEditModalVisible}/>
                <TeamAddModal visible={profileStore.teamAddModalVisible}/>
            </div>
        )
    }
}

export default Team;

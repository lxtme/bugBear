import React, {Component} from 'react';
import {Avatar} from 'antd';
import './index.less';
import ProfileModal from "./ProfileModal";
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
class Profile extends Component {
    render() {
        return (
            <div className="profile-page">
                <span className="profile-title">用户信息</span>
                <span className="profile-btn"><a
                    onClick={() => this.props.stores.profileStore.showModal()}>编辑</a></span><br/>
                <span className="profile-label">用户头像：</span>
                <span className="profile-value">
                    <Avatar>{this.props.stores.profileStore.profileData.avatar}</Avatar>
                </span><br/>
                <span className="profile-label">邮箱：</span>
                <span className="profile-value">{this.props.stores.profileStore.profileData.email}</span><br/>
                <span className="profile-label">昵称：</span>
                <span className="profile-value">{this.props.stores.profileStore.profileData.name}</span><br/>
                <span className="profile-label">手机号：</span>
                <span className="profile-value">{this.props.stores.profileStore.profileData.phone}</span>
                <ProfileModal visible={this.props.stores.profileStore.visible}/>
            </div>
        )
    }
}

export default Profile;

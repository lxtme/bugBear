import React, {Component} from 'react';
import {Avatar} from 'antd';
import './index.less';
import ProfileModal from "./ProfileModal";
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
class Profile extends Component {
    constructor(props) {
        super(props);
        this.props.stores.profileStore.getProfileData();
    }

    render() {
        const {profileStore} = this.props.stores;
        const {profileData} = profileStore;
        return (
            <div className="profile-page">
                <div className='title-box'>
                    <span className="title">用户信息</span>
                    <span className="btn"><a
                        onClick={() => profileStore.showProfileModal()}>编辑</a></span>
                </div>
                <div className="content">
                    <span className="profile-label">用户头像：</span>
                    <span>
                    <Avatar>{profileData.avatar}</Avatar>
                    </span><br/>
                    <span className="profile-label">邮箱：</span>
                    <span>{profileData.email}</span><br/>
                    <span className="profile-label">昵称：</span>
                    <span>{profileData.name}</span><br/>
                    <span className="profile-label">手机号：</span>
                    <span>{profileData.phone}</span>
                </div>
                <ProfileModal visible={profileStore.profileModalVisible}/>
            </div>
        )
    }
}

export default Profile;

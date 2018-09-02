import {observable} from 'mobx';
import {setProfileData, setTeamData, getProfileData, getTeamData,deleteTeamMember} from '../apis/profile';
import {message} from 'antd';

class ProfileStore {
    @observable profileModalVisible = false;
    @observable teamEditModalVisible=false;
    @observable teamAddModalVisible = false;
    @observable profileData ={};
    @observable teamData = {
        teamMember:[]
    };

    showProfileModal() {
        this.profileModalVisible = true
    };

    hiddenProfileModal() {
        this.profileModalVisible = false
    };

    showTeamAddModal() {
        this.teamAddModalVisible = true
    };

    hiddenTeamAddModal() {
        this.teamAddModalVisible = false
    };
    showTeamEditModal() {
        this.teamEditModalVisible = true
    };

    hiddenTeamEditModal() {
        this.teamEditModalVisible = false
    };



    async getProfileData() {
        const result = await getProfileData();
        if (result.status===200) {
            this.profileData=result.data;
            return;
        }
        message.error('获取失败')
    }

    async setProfileData(profileData) {
        const result = await setProfileData(profileData);
        if (result.status === 200) {
            this.getProfileData();
            message.success('保存成功');
            return;
        }
        message.error('保存失败')
    }

    async getTeamData() {
        let result = await getTeamData();
        if (result.status===200) {
            result.data.teamMember.map(item=>{
                item.key=item.id
            });
            this.teamData=result.data;
            return;
        }
        message.error('获取失败')
    }

    async setTeamData(teamData) {
        const result = await setTeamData(teamData);
        if (result.status === 200) {
            this.getTeamData();
            message.success('保存成功');
            return;
        }
        message.error('保存失败')
    }
    async deleteTeamMember(id){
        const result=await deleteTeamMember(id);
        if (result.status === 200) {
            this.getTeamData();
            message.success('删除成功');
            return;
        }
        message.error('删除失败')

    }

}

export default ProfileStore;

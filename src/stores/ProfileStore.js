import {observable} from 'mobx';
import {profileSet, teamSet} from '../apis/profile';
import {message} from 'antd';

class ProfileStore {
    constructor() {
        for (let i = 0; i < 6; i++) {
            this.teamMember.push({
                key: i,
                name: 'lixiao' + i,
                email: 'bugbear@email.com',
                degree: '管理员',
                time: '3小时前',
                operate: '删除'
            })
        }
    }

    @observable visible = false;
    @observable visibleAdd = false;
    @observable teamMember = [];
    @observable  profileData = {
        avatar: 'T',
        email: 'thinbug@gmail.com',
        name: 'thinbug',
        phone: '13233332222'
    };
    @observable teamInformation={
        avatar:'T',
        name:'team',
        email:'team@gmail.com',
        time:'2018.6.1',
    };

    showModal() {
        this.visible = true
    };

    hiddenModal() {
        this.visible = false
    };

    showModalAdd() {
        this.visibleAdd = true
    };

    hiddenModalAdd() {
        this.visibleAdd = false
    };

    deleteMember(record) {
        console.log(record);
        console.log(record.key);
        const index = this.teamMember.indexOf(record);
        console.log(index);
        this.teamMember.splice(index, 1)
    };

    async profileSet(profileData) {
        const result = await profileSet(profileData);
        if (result.status === 'success') {
            message.success('保存成功');
            return;
        }
        message.error('保存失败')
    }

    async teamSet(teamData) {
        const result = await teamSet(teamData);
        if (result.status === 'success') {
            message.success('保存成功');
            return;
        }
        message.error('保存失败')
    }

}

export default ProfileStore;

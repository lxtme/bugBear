import {observable} from 'mobx';
import {login} from '../apis/user';
import {message} from 'antd';

class UserStore {
    @observable token = '';

    async login(data) {
        const result = await login(data);
        if (result.status === 'success') {
            message.success(' 登录成功');
            this.token = result.token;
            console.log('token:', this.token)
        }
        else {
            message.error('登录失败')
        }
    }
}

export default UserStore;
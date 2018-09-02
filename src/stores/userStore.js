import {observable} from 'mobx';
import {login, register,getUserInform} from '../apis/user';
import {message} from 'antd';

class UserStore {
    @observable token = '';
    @observable visibleForget = false;

    hiddenForget() {
        this.visibleForget = false
    }

    showForget() {
        this.visibleForget = true
    }

    async login(data) {
        const result = await login(data);
        if (result.status === 200) {
            message.success(' 登录成功');
            this.token = result.data.token;

            return true;
        }
        message.error('登录失败');
        return false;
    }

    async register(data) {
        const result = await register(data);
        if (result.status === 200) {
            message.success('注册成功');
            // this.token = result.token;

            return true;
        }
        message.error('注册失败');
        return false;
    }

}


export default UserStore;

import {observable} from 'mobx';
import {login,register} from '../apis/user';
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
    async register(data){
        const result=await register(data);
        if (result.status==='success'){
            message.success('注册成功');
            this.token=result.token;
            console.log('register token:', this.token)
        }
        else{
            message.error('注册失败')
        }
    }
}

export default UserStore;

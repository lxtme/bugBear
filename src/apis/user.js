import request from '../utils/request';

//登录
export async function login(data) {
    if (data.email === 'bugBear@gmail.com' && data.password === '666666') {

        return {
            status: 'success',
            token: 'hgsiretyuhhgrtiyuoeuyitri'
        };
    }

    return {status: 'fail'};
    let response = await request.post('http://api.letsgo.tech/login', data);

    return response;
}

//注册
export async function register(data){

    return{
        status:'success',
        token:'fdhuiftwaogiwpjhgls;a'
    }
}

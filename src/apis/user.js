import request from '../utils/request';

//登录
export async function login(data) {
    let response = await request.post('/login', data);
    console.log('login response', response);
    return response;
}

//注册
export async function register(data) {
    console.log('post reg data:', data);
    let response = await request.post('/reg', data);
    console.log('reg response', response);
    return response;
}

import request from '../utils/request';

//登录
export async function login(data) {
    let response = await request.post('/login', data);
    return response;
}

//注册
export async function register(data) {
    let response = await request.post('/reg', data);
    return response;
}
export async function getUserInform() {
    return{
        status:200,
        data:{
            name:'wo',
            avatar:'',
        }
    };
   return await request.get('/12')
}

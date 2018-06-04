import request from '../utils/request';

export async function profileSet(profileData) {
    return {
        status: 'success',
        message: '保存成功'
    };

    let response = await request.post('http://api.letsgo.tech/profile', profileData);
    return response;
}

export async function teamSet(teamData) {
    return {
        status: 'success',
        message: '保存成功'
    };

    let response = await request.post('http://api.letsgo.tech/team', teamData);
    return response;
}


import request from '../utils/request';

export async function getProfileData() {
    return {
        status: 200,
        data: {
            avatar: 'T',
            email: 'thinbug@gmail.com',
            name: 'thinbug',
            phone: '13233332222'
        },
    };

    return await request.get('/123')
}

export async function setProfileData(profileData) {
    return {
        status: 200,
    };

    let response = await request.put('http://api.letsgo.tech/profile', profileData);
    return response;
}

export async function setTeamData(teamData) {
    return {
        status: 200,
    };
    let response = await request.put('http://api.letsgo.tech/team', teamData);
    return response;
}

export async function getTeamData() {
    return {
        status: 200,
        data: {
            avatar: 'T',
            name: 'team',
            email: 'team@gmail.com',
            time: '2018.6.1',
            teamMember: [
                {
                    id: 1,
                    name: 'lixiao' + 1,
                    email: 'bugbear@email.com',
                    degree: '管理员',
                    time: '3小时前',
                    operate: '删除'
                },
            ],
        }
    };
    return await request.get('/123')
}

export async function deleteTeamMember(id) {
    return {
        status: 200,
    };
    return await request.delete('/123', id)
}

export async function getProjectData() {
    return {
        status: 200,
        data: [
            {
                id: '1',
                title: 'bugBear',
                name: 'jason',
                percent: 36,
                avatar: 'http://cxcy.xcu.edu.cn/_mediafile/cxcy/2016/05/27/1gxo7pvumz.jpg',
                describe: 'bugBear是一个追踪监控 bug 的系统。'
            },
            {
                id: '2',
                title: 'bugBear33',
                name: 'tian',
                avatar: '',
                percent: 100,
                describe: 'bugBear33是一个追踪监控 bug 的系统。'
            },
            {
                id: '3',
                title: 'bugBear66',
                name: 'chang',
                avatar: '',
                percent: 86,
                describe: 'bugBea22r是一个追踪监控 bug 的系统。'
            },
            {
                id: '4',
                title: 'bugBear88',
                name: 'mini',
                avatar: '',
                percent: 67,
                describe: 'bugBear11是一个追踪监控 bug 的系统。'
            },
        ]
}
    return await request.get('/ddd')
}
export async function createProject(projectData) {
    return {
        status: 200,
    };
    let response = await request.post('http://api.letsgo.tech/team', projectData);
    return response;
}
export async function updateProjectMessage(projectData) {
    return{
        status:200,
    };
    return await request.put('/sss',projectData)
}
export async function updateProjectMoreMessage(projectData) {
    return{
        status:200,
    };
    return await request.put('/sss',projectData)

}
export async function commitComment(commentData) {
    return{
        status:200,
    }
    return await request.post('/1112',commentData)
}
export async function updateIsAttention(isAttention) {
    return{
        status:200,
    }
    return await  request.put('/12',isAttention)
}
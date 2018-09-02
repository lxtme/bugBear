import request from '../utils/request';

export async function setAreaData(time) {
    console.log('api time',time);
    return {
        status:200,
        data: [
            {name: '周一', uv: 89},
            {name: '周二', uv: 39},
            {name: '周三', uv: 49},
            {name: '周四', uv: 31},
            {name: '周五', uv: 68}
        ]
    };
    return await request.put('/dashboard', time)
}


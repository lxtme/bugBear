import request from '../utils/request';

export async function queryConcernBugs(data) {
    console.log('api queryconcernbugs', data);
    return {
        status: 200,
        data: [
            {
                id: 1,
                message: 'uncaught error ideapar.com',
                account: 469,
                userNum: 6977,
                status: '待定',
                time: '1天前',
            },
            {
                id: 2,
                message: 'ReferenceError https://www.ideapar.com/my-rqt',
                account: 679,
                userNum: 6447,
                status: '进行中',
                time: '3小时前',
            },
            {
                id: 3,
                message: 'uncaught error https://www.ideapar.com/',
                account: 869,
                userNum: 9877,
                status: '已修复',
                time: '2天前',
            },
        ]
    };

    return await request.get(`/123${data}`)
    //这是之前教我的，现在看不懂
    // return await request.get(`api.letsgo.tech/bugs?${buildQuery(data)}`);
}

export async function addComment(commentData) {
    return {
        status: 200
    };
    return await request.post('/www', commentData)
}

export async function ignoreBug(bugId) {
    return {
        status: 200
    }
    return await request.delete('/123', bugId)
}

//data={
//    startDate:2017-01-02,
//    endDate:2018-2-4
// }
function buildQuery(data) {
    let queryString = '';
    for (let prop in data) {
        queryString = prop + "=" + data[prop] + "&"
    }
    queryString = queryString.substring(0, queryString.length - 1);
    return queryString
}

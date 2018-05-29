import request from '../utils/request';

export async function listBugs(data) {

    return {
        status: 'success',
        data: [
            {
                key: 1,
                message: 'uncaught error ideapar.com',
                account: 469,
                userNum: 6977,
                status: '待定',
                time: '1天前',
                // operate: '忽略'
            },
            {
                key: 2,
                message: 'ReferenceError https://www.ideapar.com/my-rqt',
                account: 679,
                userNum: 6447,
                status: '进行中',
                time: '3小时前',
                // operate: '忽略'
            },
            {
                key: 3,
                message: 'uncaught error https://www.ideapar.com/',
                account: 869,
                userNum: 9877,
                status: '已修复',
                time: '5天前',
                // operate: '忽略'
            },
        ]
    };

    let response = await request.get(`api.letsgo.tech/bugs?${buildQuery(data)}`);
    return response;
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

export async function comment(comment) {

    return {
        status: 'success'
    };
    let response = request.post('http://api.letsgo.tech/comment', comment);

    return response;
}
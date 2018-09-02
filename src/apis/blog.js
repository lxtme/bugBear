import request from '../utils/request';

export async function getBlogListData() {
    return {
        status: 200,
        data: [{
            id: '1',
            content: "BugBear can achieve teal-time monitoring.BugBear can achieve\n" +
            "                                    teal-time monitoring.",
            time: '2018.6.1',
            title: "jason is a good good good",
            name: "chang",
            avatar:'http://g.search.alicdn.com/img/bao/uploaded/i4/i3/884973057/TB2n5tMbH0kpuFjy0FjXXcBbVXa_!!884973057.jpg',
        },
            {
                id: '2',
                content: "BugBear can achieve teal-time monitoring.BugBear can achieve teal-time " +
                "monitoring.BugBear can achieve teal-time monitoring.BugBear can achieve teal-time " +
                "monitoring.",
                title: "BugBear can achieve teal-time monitoring.",
                time: "2018.4.7",
                name: "jason",
                avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyVL444y98ZY-SKb4TOXZDTaDk-iU_ZgMA6j2on00MdMNrBjE9A',
            },
            {
                id: '3',
                title: "bugbear", time: '2018.3.6', name: "tian",
                content:'这是第三条 blog的 content',
                avatar:'',
            },
            {
                id: '4',
                title: "bugbugbug", time: '2018.6.6', name: "bear",avatar:'',
            },
            {
                id: '5',
                title: "bearbear", time: '2018.6.11', name: "sweet",avatar:'',
            }]
    };
    return await request.get('/djk')
}
export async function getBlogDetails(id){
    return{
        status:200,
        data:{
        id: '2',
            content: "BugBear can achieve teal-time monitoring.BugBear can achieve teal-time " +
    "monitoring.BugBear can achieve teal-time monitoring.BugBear can achieve teal-time " +
    "monitoring.",
        title: "BugBear can achieve teal-time monitoring.",
        time: "2018.4.7",
        name: "jason",
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyVL444y98ZY-SKb4TOXZDTaDk-iU_ZgMA6j2on00MdMNrBjE9A',
        }
    }
    return await request.get(`/geturl${id}`)
}
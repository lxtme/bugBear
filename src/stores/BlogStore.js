import {observable} from 'mobx';

class BlogStore {
    @observable blogdata = [
        {
            content: "BugBear can achieve teal-time monitoring.BugBear can achieve\n" +
            "                                    teal-time monitoring.",
            time: '2018.6.1',
            title: "jason is a good good good",
            name: "chang",
        },
        {
            content: "BugBear can achieve teal-time monitoring.BugBear can achieve teal-time " +
            "monitoring.BugBear can achieve teal-time monitoring.BugBear can achieve teal-time " +
            "monitoring.",
            title: "BugBear can achieve teal-time monitoring.",
            time: "2018.4.7",
            name: "jason"
        },
        {
            title: "bugbear", time: '2018.3.6', name: "tian"
        },
        {
            title: "bugbugbug", time: '2018.6.6', name: "bear"
        },
        {
            title: "bearbear", time: '2018.6.11', name: "sweet"
        }
    ];
}
export default BlogStore;

import {observable} from 'mobx';

class BellStore {
    @observable display = 'none';
    @observable clearKey = '';
    @observable messages = [
        {
            id: 1,
            type: 'notice',
            value: '您的 bug 已修复，您的 bug 已修复您的 bug 已修复'
        },
        {
            id: 2,
            type: 'news',
            value: '您收到14条新周报'
        },
        {
            id: 3,
            type: 'todo',
            value: '你有一个新 bug'
        },
        {
            id: 4,
            type: 'todo',
            value: '急急急啦啦啦啦啦'
        },
        {
            id: 5,
            type: 'notice',
            value: 'jason 添加您为好友'
        },];

    ChangeBell() {
        if (this.display === 'none') {
            this.display = 'block';
            return;
        }
        this.display = 'none'
    }

    handleClear() {
        let id = this.messages.map(x => x.id);
        console.log(id)
    }
}

export default BellStore;

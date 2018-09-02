import {observable} from 'mobx';
import {getUserInform} from "../apis/user";
import {message} from "antd/lib/index";

class DefaultStore {

    @observable selectedKeys = ['/dashboard'];
    @observable openKeys = [];
    @observable display = 'none';
    @observable clearKey = '';
    @observable bellBackground='';
    @observable userInform={};
    @observable activePage='/dashboard';
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
    }
    handleMouseOver(){
        this.bellBackground='rgb(230, 247, 254)';
    }
    handleMouseOut(){
        this.bellBackground='';
    }
    updateSelectedKeys(key) {
        this.selectedKeys = [key]
    }

    updateOpenKeys(openKeys) {
        this.openKeys = openKeys
    }
    changeActivePage(key){
        this.activePage=key;
    }

    async getUserInform(){
        const result=await getUserInform();
        if(result.status===200){
            this.userInform=result.data;
            return;
        }
        message.error('获取失败，请稍后再试')
    }
}

export default DefaultStore;
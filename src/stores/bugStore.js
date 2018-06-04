import {observable} from 'mobx';
import {listBugs,comment} from "../apis/bugs";
import {message} from 'antd';

class BugStore {
    @observable bugs = [];
    @observable visible = false;

    commentKey = '';

    ignore(record) {
        console.log(record);
        const index=this.bugs.indexOf(record);
        console.log(index);
        this.bugs.splice(index,1)
    }

    comment(key) {
        console.log(key);
        this.commentKey = key;
        this.visible = true
    }

    hiddenModal() {
        this.visible = false
    }

    async listBugs(data) {
        const result = await listBugs(data);
        if (result.status === 'success') {
            this.bugs = result.data;
        }
    }

    async commentDate(commentDate) {
        const result=await comment(commentDate);
        if(result.status==='success'){
            message.success('评论成功')
        }
    }
}

export default BugStore;

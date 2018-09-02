import {observable} from 'mobx';
import {queryConcernBugs, addComment,ignoreBug} from "../apis/bugs";
import {message} from 'antd';

class BugStore {
    @observable bugs = [];
    @observable visible = false;
    @observable currentCommentKey = '';

    setCurrentCommentKey(id) {
        this.currentCommentKey = id;
        this.visible = true
    }

    hiddenModal() {
        this.visible = false
    }
    async queryConcernBugs(data){
        let result=await queryConcernBugs(data);
        if(result.status===200){
            result.data.map(item=>{
                item.key=item.id
            });
            this.bugs=result.data;
            return;
        }
        message.error('获取失败')
    }

    async addComment(commentData) {
        const result = await addComment(commentData);
        if (result.status ===200) {
            message.success('评论成功');
            return;
        }
        message.error('评论失败')
    }
    async ignoreBug(bugId) {
        const result = await ignoreBug(bugId);
        if (result.status ===200) {
            message.success('已忽略');
            return;
        }
        message.error('请求失败')
    }
}

export default BugStore;

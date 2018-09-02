import {observable} from 'mobx';
import {message} from 'antd';
import {getBlogListData,getBlogDetails} from '../apis/blog.js'

class BlogStore {
    @observable blogdata = [];
    @observable currentBlogData = {};

    setCurrentBlogData(currentBlogData) {
        this.currentBlogData = currentBlogData;
    }

    async getBlogListData() {
        const result = await getBlogListData();
        if (result.status === 200) {
            this.blogdata = result.data;
            return;
        }
        message.error('数据获取失败，请稍后再试')
    }

    async getBlogDetails(id) {
        const result = await getBlogDetails(id);
        if (result.status === 200) {
            this.currentBlogData = result.data;
            return;
        }
        message.error('数据获取失败，请稍后再试')
    }
}

export default BlogStore;

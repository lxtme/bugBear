import {observable} from 'mobx';
import {message} from 'antd';
import {
    getProjectData,
    createProject,
    updateProjectMessage,
    updateProjectMoreMessage,
    commitComment,
    updateIsAttention,
} from "../apis/profile";

class ProjectStore {
    @observable visible = false;
    @observable visibleEdit = false;
    @observable visibleMore = false;
    @observable visibleAdd = false;
    @observable projectData = [];
    @observable currentData = {};
    @observable isAttention=false;

    updateCurrentData(item) {
        this.currentData = item;
    }

    hiddenModal() {
        this.visible = false;
    }

    showModal() {
        this.visible = true;
    }

    hiddenModalEdit() {
        this.visibleEdit = false;
    }

    showModalEdit() {
        this.visibleEdit = true;
    }

    hiddenModalMore() {
        this.visibleMore = false;
    }

    showModalMore() {
        this.visibleMore = true;
    }

    hiddenModalAdd() {
        this.visibleAdd = false;
    }

    showModalAdd() {
        this.visibleAdd = true;
    }

    async getProjectData() {
        const result = await getProjectData();
        if (result.status === 200) {
            this.projectData = result.data;
            return;
        }
        message.error('获取失败')
    }

    async createProject(projectData) {
        const result = await createProject(projectData);
        if (result.status === 200) {
            this.getProjectData();
            return;
        }
        message.error('获取失败')
    }

    async updateProjectMessage(projectData) {
        const result = await  updateProjectMessage(projectData);
        if (result.status === 200) {
            this.getProjectData();
            return;
        }
        message.error('更新失败')
    }

    async updateProjectMoreMessage(projectData) {
        const result = await  updateProjectMoreMessage(projectData);
        if (result.status === 200) {
            this.getProjectData();
            return;
        }
        message.error('更新失败')
    }

    async commitComment(commentData) {
        const result = await commitComment(commentData);
        if (result.status === 200) {
            message.success('评论成功');
            return;
        }
        message.error('评论失败，请稍后再试');
    }
    async updateIsAttention(isAttention) {
        const result = await updateIsAttention(isAttention);
        if (result.status === 200) {
            this.isAttention=!this.isAttention;
            return;
        }
        message.error('关注失败，请稍后再试');
    }


}

export default ProjectStore;
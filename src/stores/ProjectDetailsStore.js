import {observable} from 'mobx';

class ProjectDetailsStore{
    @observable visible = false;
    @observable visibleEdit=false;
    @observable visibleMore=false;
    @observable visibleAdd=false;
    @observable memberData = ['aaa', 'sss', 'ddd'];
    @observable projectData = [
        {
            title: 'bugBear',
            name: 'jason',
            percent: 36,
            describe:'bugBear是一个追踪监控 bug 的系统。'
        },
        {
            title: 'bugBear33',
            name: 'tian',
            percent: 100,
            describe:'bugBear33是一个追踪监控 bug 的系统。'
        },
        {
            title: 'bugBear66',
            name: 'chang',
            percent: 86,
            describe:'bugBea22r是一个追踪监控 bug 的系统。'
        },
        {
            title: 'bugBear88',
            name: 'mini',
            percent: 67,
            describe:'bugBear11是一个追踪监控 bug 的系统。'
        },
    ];

    hiddenModal(){
        this.visible=false;
    }
    showModal(){
        this.visible=true;
    }

    hiddenModalEdit(){
        this.visibleEdit=false;
    }
    showModalEdit(){
        this.visibleEdit=true;
    }
    hiddenModalMore(){
        this.visibleMore=false;
    }
    showModalMore(){
        this.visibleMore=true;
    }
    hiddenModalAdd(){
        this.visibleAdd=false;
    }
    showModalAdd(){
        this.visibleAdd=true;
    }
}

export default ProjectDetailsStore;
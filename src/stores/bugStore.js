import {observable} from 'mobx';
import {listBugs} from "../apis/bugs";

class BugStore {
    @observable bugs = [];
    @observable visible = false;

    ignore(key) {
        console.log(key)
    }
    // ignore=(key)=>{
    //     console.log(key)
    // };
    comment(key) {
        console.log(key);
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
}

export default BugStore;

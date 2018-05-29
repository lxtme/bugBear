import {observable} from 'mobx';
import {listBugs} from "../apis/bugs";

class BugStore {
    @observable bugs = [];
    @observable visible = false;

    @observable ignore(key) {
        console.log(key)
    }

    @observable comment(key) {
        console.log(key);
        this.visible = true
    }

    @observable hiddenModal() {
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

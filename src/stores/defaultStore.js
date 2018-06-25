import {observable} from 'mobx';

class DefaultStore {

    @observable selectedKeys = ['/dashboard'];
    @observable openKeys = [];

    updateSelectedKeys(key) {
        this.selectedKeys = [key]
    }

    updateOpenKeys(openKeys) {
        this.openKeys = openKeys
    }
}

export default DefaultStore;
import {observable} from 'mobx';

class DefaultStore {

    @observable selectedKeys = ['/dashboard'];
    @observable openKeys = [];
    @observable collapsed = false;
    toggle = () => {
        this.collapsed = !this.collapsed
    };

    updateSelectedKeys(key) {
        this.selectedKeys = [key]
    }

    updateOpenKeys(openKeys) {
        this.openKeys = openKeys
    }
}

export default DefaultStore;
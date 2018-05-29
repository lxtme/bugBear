import {observable} from 'mobx';

class DefaultStore {

    @observable  collapsed = false;
    toggle =() => {
        this.collapsed = !this.collapsed
    };
}
export default DefaultStore;
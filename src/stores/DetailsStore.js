import {observable} from 'mobx';

class DetailsStore {
    @observable visible = false;

    hiddenModal(){
        this.visible=false;
    }
    showModal(){
        this.visible=true;
    }
}

export default DetailsStore;

import UserStore from './userStore';

class stores{
    constructor(){
        this.userStore=new UserStore()
    }

}
export default new stores();
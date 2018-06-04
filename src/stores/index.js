import UserStore from './userStore';
import ChartMobx from './chartMobx';
import BugStore from './bugStore';
import DefaultStore from "./defaultStore";
import BellStore from "./bellStore";
import ProfileStore from "./ProfileStore";

class stores{
    constructor(){
        this.userStore=new UserStore();
        this.chartMobx=new ChartMobx();
        this.bugStore=new BugStore();
        this.defaultStore=new DefaultStore();
        this.bellStore=new BellStore();
        this.profileStore=new ProfileStore();
    }

}
export default new stores();

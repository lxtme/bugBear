import UserStore from './userStore';
import ChartMobx from './chartMobx';
import BugStore from './bugStore';
import DefaultStore from "./defaultStore";

class stores{
    constructor(){
        this.userStore=new UserStore();
        this.chartMobx=new ChartMobx();
        this.bugStore=new BugStore();
        this.defaultStore=new DefaultStore();
    }

}
export default new stores();

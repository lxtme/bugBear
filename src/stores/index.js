import UserStore from './userStore';
import ChartMobx from './chartMobx';
import BugStore from './bugStore';

class stores{
    constructor(){
        this.userStore=new UserStore();
        this.chartMobx=new ChartMobx();
        this.bugStore=new BugStore();
    }

}
export default new stores();

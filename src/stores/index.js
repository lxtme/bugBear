import UserStore from './userStore';
import ChartMobx from './chartMobx';

class stores{
    constructor(){
        this.userStore=new UserStore();
        this.chartMobx=new ChartMobx();
    }

}
export default new stores();

import UserStore from './userStore';
import ChartMobx from './chartMobx';
import BugStore from './bugStore';
import DefaultStore from "./defaultStore";
import BellStore from "./bellStore";
import ProfileStore from "./ProfileStore";
import DetailsStore from "./DetailsStore";
import BlogStore from "./BlogStore";

class stores{
    constructor(){
        this.userStore=new UserStore();
        this.chartMobx=new ChartMobx();
        this.bugStore=new BugStore();
        this.defaultStore=new DefaultStore();
        this.bellStore=new BellStore();
        this.profileStore=new ProfileStore();
        this.detailsStore=new DetailsStore();
        this.blogStore=new BlogStore();
    }

}
export default new stores();

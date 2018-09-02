import UserStore from './userStore';
import DashboardStore from './dashboardStore';
import BugStore from './bugStore';
import DefaultStore from "./defaultStore";
import ProfileStore from "./ProfileStore";
import DetailsStore from "./DetailsStore";
import BlogStore from "./BlogStore";
import ProjectStore from "./ProjectStore";

class stores{
    constructor(){
        this.userStore=new UserStore();
        this.dashboardStore=new DashboardStore();
        this.bugStore=new BugStore();
        this.defaultStore=new DefaultStore();
        this.profileStore=new ProfileStore();
        this.detailsStore=new DetailsStore();
        this.blogStore=new BlogStore();
        this.projectStore=new ProjectStore();
    }

}
export default new stores();

import {observable} from 'mobx';

class ChartMobx {
    @observable onchange(date, dateString) {
        console.log(date, dateString)
    }
    @observable data = [
        {name: '周一', uv: 89},
        {name: '周二', uv: 39},
        {name: '周三', uv: 49},
        {name: '周四', uv: 31},
        {name: '周五', uv: 68}
    ];
}

export default ChartMobx;

import {observable} from 'mobx';
import {setAreaData} from '../apis/dashboard';
import {message} from 'antd';

class DashboardStore {
    @observable areaChartData = [];

    async setAreaData(time) {
        const result = await setAreaData(time);
        if (result.status===200) {
            this.areaChartData=result.data;
            return;
        }
        message.error('获取数据失败')
    }

}

export default DashboardStore;

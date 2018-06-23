import React, {Component} from 'react';
import {Input, List, Avatar, Progress, Icon} from 'antd';
import './index.less';
import EditModal from "./EditModal";
import {inject, observer} from 'mobx-react';
import MoreModal from './MoreModal';
import AddModal from "./AddModal";


const Search = Input.Search;


@inject('stores')
@observer
class Project extends Component {
    editClick = (index) => {
        console.log('ddd');
        this.props.stores.projectDetailsStore.showModalEdit();
        console.log(index);
    };
    moreClick = (index) => {
        console.log('ddd');
        this.props.stores.projectDetailsStore.showModalMore();
        console.log(index);
    };
    addClick = (index) => {
        console.log('ddd');
        this.props.stores.projectDetailsStore.showModalAdd();
        console.log(index);
    };

    render() {
        return (
            <div className="profile-page">
                <span className="profile-title">项目列表</span>
                <div className="team">
                    <Search onSearch={value => console.log(value)} style={{width: 300}}/>
                    <div className='team-add'>
                        <a onClick={this.addClick}>添加</a>
                    </div>
                    <List dataSource={this.props.stores.projectDetailsStore.projectData}
                          renderItem={item => (
                              <List.Item actions={[<a
                                  onClick={this.editClick}>编辑</a>,
                                  <a onClick={this.moreClick}>更多&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="down"/></a>]}>
                                  <List.Item.Meta avatar={<Avatar>J</Avatar>}
                                                  title={item.title}
                                                  description={item.describe}/>
                                  <div className="project-list-content">
                                      <div className="project-list-name">
                                          <span>创建人：</span><br/>
                                          <span>{item.name}</span>
                                      </div>
                                      <div className="project-list-speed" style={{width: 170}}>
                                          <Progress percent={item.percent} size="small" status={
                                              item.percent === 100 ? 'success' : 'active'
                                          }/>
                                      </div>
                                  </div>
                              </List.Item>
                          )}/>
                </div>
                <EditModal visible={this.props.stores.projectDetailsStore.visibleEdit}/>
                <MoreModal visible={this.props.stores.projectDetailsStore.visibleMore}/>
                <AddModal visible={this.props.stores.projectDetailsStore.visibleAdd}/>
            </div>
        )
    }
}

export default Project;

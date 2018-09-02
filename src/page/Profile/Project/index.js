import React, {Component} from 'react';
import {Input, List, Avatar, Progress, Icon} from 'antd';
import './index.less';
import EditModal from "./Modal/EditModal";
import {inject, observer} from 'mobx-react';
import MoreModal from './Modal/MoreModal';
import AddModal from "./Modal/AddModal";

const Search = Input.Search;

@inject('stores')
@observer
class Project extends Component {
    constructor(props) {
        super(props);
        this.projectStore = this.props.stores.projectStore;
        this.projectStore.getProjectData();
    }

    editClick = (item) => {
        this.projectStore.showModalEdit();
        this.projectStore.updateCurrentData(item);
    };
    moreClick = (item) => {
        this.projectStore.showModalMore();
        this.projectStore.updateCurrentData(item)
    };
    addClick = () => {
        this.projectStore.showModalAdd();
    };

    render() {
        const projectStore = this.projectStore;
        return (
            <div className="project-page">
                <span className="title">项目列表</span>
                <div className="content">
                    <Search className='search' onSearch={value => console.log(value)}/>
                    <div className='add'>
                        <a onClick={this.addClick}>添加</a>
                    </div>
                    <List dataSource={projectStore.projectData}
                          renderItem={item => (
                              <List.Item
                                  actions={[
                                      <a onClick={() => this.editClick(item)}>编辑</a>,
                                      <a onClick={() => this.moreClick(item)}>
                                          更多
                                          <Icon type="down"/>
                                      </a>
                                  ]}>
                                  <List.Item.Meta
                                      avatar={
                                          <Avatar
                                              src={item.avatar}>{item.avatar === '' ? item.name.substring(0, 1) : ''}
                                          </Avatar>}
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
                <EditModal visible={projectStore.visibleEdit}/>
                <MoreModal visible={projectStore.visibleMore}/>
                <AddModal visible={projectStore.visibleAdd}/>
            </div>
        )
    }
}

export default Project;

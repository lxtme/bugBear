import React, {Component} from 'react';
import {Input, List, Avatar, Progress, Icon} from 'antd';
import './index.less';

const projectData = [
    {
        title: 'bugBear',
        name:'jason',
        percent:36
    },
    {
        title: 'bugBear33',
        name:'tian',
        percent:100
    },
    {
        title: 'bugBear66',
        name:'chang',
        percent:86
    },
    {
        title: 'bugBear88',
        name:'mini',
        percent:67
    },
];
const Search = Input.Search;

class Project extends Component {
    render() {
        return (
            <div className="profile-page">
                <span className="profile-title">项目列表</span>
                <div className="team">
                    <Search onSearch={value => console.log(value)} style={{width: 300}}/>
                    <div className='team-add'>
                        添加
                    </div>
                    <List dataSource={projectData}
                          renderItem={item => (
                              <List.Item actions={[<a>编辑</a>, <a>更多&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="down"/></a>]}>
                                  <List.Item.Meta avatar={<Avatar>J</Avatar>}
                                                  title={item.title}
                                                  description={'bugBear是一个追踪监控 bug 的系统。'}/>
                                  <div className="project-list-content">
                                      <div className="project-list-name">
                                          <span>创建人：</span><br/>
                                          <span>{item.name}</span>
                                      </div>
                                      <div className="project-list-speed" style={{width: 170}}>
                                          <Progress percent={item.percent} size="small"status={
                                              item.percent===100?'success':'active'
                                          }/>
                                      </div>
                                  </div>
                              </List.Item>
                          )}/>
                </div>
            </div>
        )
    }
}

export default Project;

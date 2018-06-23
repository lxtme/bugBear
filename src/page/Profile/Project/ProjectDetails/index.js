import React, {Component} from 'react';
import {Button, Dropdown, Menu, Tabs} from 'antd';
import './index.less';
import CommentModal from './CommentModal';
import {observer, inject} from 'mobx-react';
import BaseMessage from './BaseMessage';

const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const transactor = (
    <Menu onClick={handleClick}>
        <MenuItem key='jason'>Jason</MenuItem>
        <MenuItem key='chang'>Chang</MenuItem>
        <MenuItem key='tian'>Tian</MenuItem>
    </Menu>
);

function handleClick(e) {
    console.log('chick', e)
}

function callback(e) {
    console.log('chick', e)
}

@inject('stores')
@observer
class ProjectDetails extends Component {
    render() {
        return (
            <div className='projectDetails-page'>
                <div className="details-top">
                    <div className="details-top-l">
                        <p>ThinBug项目</p>
                        <p>ThinBug的project详情，我的项目内容</p>
                        <span>创建时间：2018-6-5</span><br/>
                    </div>
                    <div className="details-top-r">
                        <div>
                            <Button onClick={() => this.props.stores.projectDetailsStore.showModal()}>评论</Button>
                            <Button>关注</Button>
                            <Dropdown overlay={transactor}>
                                <Button type="primary">执行人</Button>
                            </Dropdown>
                        </div>
                        <div className="details-top-r-number">
                            <div>
                                <span>状态</span><br/>
                                <span>待审批</span>
                            </div>
                            <div>
                                <span>事件数</span><br/>
                                <span>635</span>
                            </div>
                            <div>
                                <span>用户数</span><br/>
                                <span>1537</span>
                            </div>
                        </div>
                    </div>
                    <CommentModal visible={this.props.stores.projectDetailsStore.visible}/>
                </div>
                <Tabs onChange={callback} style={{marginLeft:30}}>
                    <TabPane tab="概览" key="1">概览</TabPane>
                    <TabPane tab="基本信息" key="2">
                        <BaseMessage/>
                    </TabPane>
                    <TabPane tab="报警方式" key="3">Content of Tab Pane 3</TabPane>
                    <TabPane tab="报警规则" key="4">Content of Tab Pane 4</TabPane>
                    <TabPane tab="source map" key="5">Content of Tab Pane 2</TabPane>
                    <TabPane tab="成员列表" key="6">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default ProjectDetails;

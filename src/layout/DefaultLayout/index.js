import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar} from 'antd';
import './index.less';
import {inject, observer} from 'mobx-react';
import Bell from './Bell';
import {withRouter} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const {Header, Sider, Content} = Layout;
const MenuItem = Menu.Item;

@inject('stores')
@observer
class DefaultLauout extends Component {
    handleClick(e) {
        console.log('click', e);
        this.props.history.push(e.key);
        this.props.stores.defaultStore.updateSelectedKeys(e.key)
    }

    handleClickSubMenu(openKeys) {
        this.props.stores.defaultStore.updateOpenKeys(openKeys)
    }

    render() {
        return (
            <div>
                <Layout>
                    <Sider className="default-sider" collapsible trigger={null}
                           collapsed={this.props.stores.defaultStore.collapsed}>
                        <div className="default-logo">
                            <h1>BugBear</h1>
                        </div>
                        <Menu theme="dark" onClick={(e) => this.handleClick(e)}
                              selectedKeys={this.props.stores.defaultStore.selectedKeys.slice()}
                              onOpenChange={(openKeys) => this.handleClickSubMenu(openKeys)}
                              openKeys={this.props.stores.defaultStore.openKeys.slice()}
                              mode='inline'>
                            <MenuItem key='/dashboard'>
                                <Icon type='dashboard'/>
                                <span>控制台</span>
                            </MenuItem>
                            <SubMenu key="setting" title={<span><Icon type="warning"/><span>设置</span></span>}>
                                <MenuItem key='/profile'>
                                    <Icon type='user'/>
                                    <span>个人</span>
                                </MenuItem>
                                <MenuItem key='/team'>
                                    <Icon type='warning'/>
                                    <span>团队</span>
                                </MenuItem>
                                <MenuItem key='/project'>
                                    <Icon type='warning'/>
                                    <span>项目</span>
                                </MenuItem>
                                <MenuItem key='/projectdetails'>
                                    <Icon type='warning'/>
                                    <span>项目详情</span>
                                </MenuItem>
                            </SubMenu>
                            <SubMenu key="details" title={<span><Icon type="warning"/><span>错误详情</span></span>}>
                                <MenuItem key='/details'>
                                    <Icon type='user'/>
                                    <span>错误详情-基本信息</span>
                                </MenuItem>
                                <MenuItem key='12'>
                                    <Icon type='warning'/>
                                    <span>详情2</span>
                                </MenuItem>
                                <MenuItem key='13'>
                                    <Icon type='warning'/>
                                    <span>详情3</span>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="default-header">
                            <Icon type={this.props.stores.defaultStore.collapsed ? 'menu-unfold' : 'menu-fold'}
                                  onClick={this.props.stores.defaultStore.toggle}/>
                            <div className="default-header-r">
                                <div className="default-bell-box"
                                     onMouseOver={() => this.props.stores.bellStore.handleMouseOver()}
                                     onMouseOut={() => this.props.stores.bellStore.handleMouseOut()}>
                                    <div className="icon-background"
                                         style={{background: this.props.stores.bellStore.bellBackground}}>
                                        <Icon type="bell" onClick={() => this.props.stores.bellStore.ChangeBell()}/>
                                    </div>
                                    <Bell/>
                                </div>
                                <div className={'default-avatar'}>
                                    <Avatar>J</Avatar>
                                </div>
                                <span className="default-user-name">请登录</span>
                            </div>
                        </Header>
                        <Content className="default-content">
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default withRouter(DefaultLauout);

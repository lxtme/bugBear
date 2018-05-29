import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar} from 'antd';
import './index.less';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

const {Header, Sider, Content} = Layout;
const MenuItem = Menu.Item;

@inject('stores')
@observer
class DefaultLauout extends Component {
    render() {
        return (
            <Layout>
                <Sider className="default-sider" collapsible trigger={null}
                       collapsed={this.props.stores.defaultStore.collapsed}>
                    <div className="default-logo">
                        <h1>BugBear</h1>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']}>
                        <MenuItem key='1'>
                            <Link to='./dashboard'>
                                <Icon type='dashboard'/>
                                <span>控制台</span>
                            </Link>
                        </MenuItem>
                        <MenuItem key='2'>
                            <Icon type='form'/>
                            <span>最近</span>
                        </MenuItem>
                        <MenuItem key='3'>
                            <Icon type='table'/>
                            <span>所有</span>
                        </MenuItem>
                        <MenuItem key='4'>
                            <Icon type='profile'/>
                            <span>网址</span>
                        </MenuItem>
                        <MenuItem key='5'>
                            <Icon type='check-circle-o'/>
                            <span>浏览器</span>
                        </MenuItem>
                        <MenuItem key='6'>
                            <Icon type='warning'/>
                            <span>用户</span>
                        </MenuItem>
                        <MenuItem key='7'>
                            <Icon type='warning'/>
                            <span>日历</span>
                        </MenuItem>
                        <MenuItem key='8'>
                            <Icon type='warning'/>
                            <span>团队</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="default-header">
                        <Icon type={this.props.stores.defaultStore.collapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={this.props.stores.defaultStore.toggle}/>
                        <div className="default-header-r">
                            <Icon type="search"/>
                            <Icon type="bell"/>
                            <Avatar className="default-avatar">J</Avatar>
                            <span className="default-user-name">请登录</span>
                        </div>
                    </Header>
                    <Content className="default-content">
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default DefaultLauout;

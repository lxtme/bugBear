import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar} from 'antd';
import './index.less';
import {inject, observer} from 'mobx-react';
import Bell from './Bell';
import {withRouter} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const {Header, Sider, Content} = Layout;
const MenuItem = Menu.Item;
const nav = [
    {
        key: '/',
        text: 'ThinBug'
    },
    {
        key: '/dashboard',
        text: '控制台'
    },
    {
        key: '/project',
        text: '项目列表'
    },
    {
        key: '/projectdetails',
        text: '项目详情'
    },
    {
        key: '/details',
        text: '错误详情'
    },
];

@inject('stores')
@observer
class DefaultLauout extends Component {
    constructor(props) {
        super(props);
        this.defaultStore = this.props.stores.defaultStore;
        this.props.stores.defaultStore.getUserInform();
        this.state = {
            size: '32px',
            collapsed: false,
        };
    }


    toggle = () => {
        this.setState({
            size: this.state.size === '32px' ? '16px' : '32px'
        });
        this.setState({
                collapsed: !this.state.collapsed
            }
        );
    };


    handleClick(e) {
        this.props.history.push(e.key);
        this.defaultStore.updateSelectedKeys(e.key)
    }

    handleClickSubMenu(openKeys) {
        this.defaultStore.updateOpenKeys(openKeys)
    }

    render() {
        const {defaultStore} = this.props.stores;
        const {userInform} = defaultStore;
        return (
            <div>
                {/*<Layout>*/}
                {/*<Sider className="default-sider" collapsible trigger={null}*/}
                {/*collapsed={this.state.collapsed}>*/}
                {/*<div className="default-logo" onClick={() => this.props.history.push('/')}>*/}
                {/*<h1 style={{fontSize: this.state.size}}>ThinBug</h1>*/}
                {/*</div>*/}
                {/*<Menu theme="dark" onClick={(e) => this.handleClick(e)}*/}
                {/*selectedKeys={defaultStore.selectedKeys.slice()}*/}
                {/*onOpenChange={(openKeys) => this.handleClickSubMenu(openKeys)}*/}
                {/*openKeys={defaultStore.openKeys.slice()}*/}
                {/*mode='inline'>*/}
                {/*<MenuItem key='/dashboard'>*/}
                {/*<Icon type='dashboard'/>*/}
                {/*<span>控制台</span>*/}
                {/*</MenuItem>*/}
                {/*<SubMenu key="setting" title={<span><Icon type="warning"/><span>设置</span></span>}>*/}
                {/*<MenuItem key='/profile'>*/}
                {/*<Icon type='user'/>*/}
                {/*<span>个人</span>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem key='/team'>*/}
                {/*<Icon type='warning'/>*/}
                {/*<span>团队</span>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem key='/project'>*/}
                {/*<Icon type='warning'/>*/}
                {/*<span>项目</span>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem key='/projectdetails'>*/}
                {/*<Icon type='warning'/>*/}
                {/*<span>项目详情</span>*/}
                {/*</MenuItem>*/}
                {/*</SubMenu>*/}
                {/*<SubMenu key="details" title={<span><Icon type="warning"/><span>错误详情</span></span>}>*/}
                {/*<MenuItem key='/details'>*/}
                {/*<Icon type='user'/>*/}
                {/*<span>错误详情-基本信息</span>*/}
                {/*</MenuItem>*/}
                {/*/!*<MenuItem key='12'>*!/*/}
                {/*/!*<Icon type='warning'/>*!/*/}
                {/*/!*<span>详情2</span>*!/*/}
                {/*/!*</MenuItem>*!/*/}
                {/*/!*<MenuItem key='13'>*!/*/}
                {/*/!*<Icon type='warning'/>*!/*/}
                {/*/!*<span>详情3</span>*!/*/}
                {/*/!*</MenuItem>*!/*/}
                {/*</SubMenu>*/}
                {/*</Menu>*/}
                {/*</Sider>*/}
                <Layout>
                    <Header className="default-header">
                        {/*<Icon*/}
                        {/*type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}*/}
                        {/*onClick={this.toggle}/>*/}
                        <ul className='default-header-l'>
                            {nav.map(item => {
                                return (
                                    <li key={item.key}
                                        className={defaultStore.activePage === item.key ? 'active-page' : ''}
                                        onClick={() => {
                                            defaultStore.changeActivePage(item.key);
                                            this.props.history.push(item.key);
                                        }}
                                    >
                                        {item.text}
                                    </li>
                                );
                            })}

                            {/*<li onClick={()=>this.props.history.push('/')}>首页</li>*/}
                            {/*<li onClick={()=>this.props.history.push('/dashboard')}>控制台</li>*/}
                            {/*<li onClick={()=>this.props.history.push('/project')}>项目列表</li>*/}
                            {/*<li onClick={()=>this.props.history.push('/projectdetails')}>项目详情</li>*/}
                            {/*<li onClick={()=>this.props.history.push('/details')}>错误详情</li>*/}
                        </ul>
                        <div className="default-header-r">
                            <div className="default-bell-box"
                                 onMouseOver={() => defaultStore.handleMouseOver()}
                                 onMouseOut={() => defaultStore.handleMouseOut()}>
                                <div className="icon-background"
                                     style={{background: defaultStore.bellBackground}}>
                                    <Icon type="bell" onClick={() => defaultStore.ChangeBell()}/>
                                </div>
                                <Bell/>
                            </div>
                            <div className={'default-avatar'}>
                                <Avatar
                                    src={userInform.avatar}>{userInform.avatar === '' ? userInform.name.substring(0, 1) : ''}</Avatar>
                            </div>
                            <span className="default-user-name">{userInform.name || '请登录'}</span>
                        </div>
                    </Header>
                    <Content className="default-content">
                        {this.props.children}
                    </Content>
                </Layout>
                {/*</Layout>*/}
            </div>
        )
    }
}

export default withRouter(DefaultLauout);

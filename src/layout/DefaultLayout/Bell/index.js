import React, {Component} from 'react';
import {Tabs, Button} from 'antd';
import '../index.less';
import {inject, observer} from 'mobx-react';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key)
}

@inject('stores')
@observer
class Bell extends Component {
    render() {
        const {defaultStore}=this.props.stores;
        let notice = [];
        let news = [];
        let todo = [];
        defaultStore.messages.map(message => {
            if (message.type === 'notice') {
                notice.push(
                    <li key={message.id} className="bell-item">{message.value}</li>
                );
            }
            if (message.type === 'news') {
                news.push(
                    <li className="bell-item" key={message.id}>{message.value}</li>
                )
            }
            if (message.type === 'todo') {
                todo.push(
                    <li key={message.id} className="bell-item">{message.value}</li>
                )
            }
            return 0;
        });

        return (
            <div className="bell-box" style={{display: defaultStore.display}}>
                <Tabs defaultActiveKey="1" onchange={callback} tabBarGutter={40} tabBarStyle={{padding: '0 30px'}}>
                    <TabPane tab="通知" key="1">
                        <ul className="bell-list">
                            {notice}
                        </ul>
                        <Button className="bell-clear" onClick={() => defaultStore.handleClear()}>
                            清空通知
                        </Button>
                    </TabPane>
                    <TabPane tab="消息" key="2">
                        <ul className="bell-list">
                            {news}
                        </ul>
                    </TabPane>
                    <TabPane tab="待办" key="3">
                        <ul className="bell-list">
                            {todo}
                        </ul>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Bell;

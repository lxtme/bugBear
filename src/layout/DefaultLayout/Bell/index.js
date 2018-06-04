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
        let notice = [];
        let news = [];
        let todo = [];
        this.props.stores.bellStore.messages.map(x => {
            if (x.type === 'notice') {
                notice.push(
                    <li key={x.id} className="bell-item">{x.value}</li>
                );
            }
            if (x.type === 'news') {
                news.push(
                    <li className="bell-item" key={x.id}>{x.value}</li>
                )
            }
            if (x.type === 'todo') {
                todo.push(
                    <li key={x.id} className="bell-item">{x.value}</li>
                )
            }
            return 0;
        });

        return (
            <div className="bell-box" style={{display: this.props.stores.bellStore.display}}>
                <Tabs defaultActiveKey="1" onchange={callback} tabBarGutter={40} tabBarStyle={{padding: '0 30px'}}>
                    <TabPane tab="通知" key="1">
                        <ul className="bell-list">
                            {notice}
                        </ul>
                        <Button className="bell-clear" onClick={() => this.props.stores.bellStore.handleClear()}>
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
